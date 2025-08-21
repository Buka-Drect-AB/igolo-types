import { DocumentSchema, PaymentFrequency, ProcessStatus } from "../..";
import { Model } from "../model";

interface AgreementObj {
  identifier: string;
  signature: {
    iat: number;
    signature?: string;
    nin: string;
    name: string;
    identification: string;
  }[],
  file: {
    link: string;
    mime: string;
  }
}

export type Lease = {
  nin: string;
  name: string;
  tenant: string;
  representative: string;
  unit: string;
  landlord: string;
  generatedBy: string;
  agreement?: AgreementObj;
  chargePending?: boolean;
  bankConnected?: boolean;
  isActive?: boolean;
  status: ProcessStatus;
  leaseEndDate?: Date | null | string | number;
  leaseStartDate: Date | null | string | number;
  dueDate: Date;
  collectionDate?: string;
  file?: string;
  signatureFlow?: string;
} & DocumentSchema;

export class LeaseModel extends Model<Lease> {

  /**
   * Checks if the collection date is within 7 days from now
   */
  public isWithinSevenDays(): boolean {
    const targetDate = this.schema.collectionDate;
    if (!targetDate) return false;
    
    const now = new Date();
    const targetDateObj = new Date(targetDate);
    
    // Normalize times to midnight for accurate day difference
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const end = new Date(targetDateObj.getFullYear(), targetDateObj.getMonth(), targetDateObj.getDate());
    
    const dayDiff = Math.abs(Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
    
    return dayDiff <= 7;
  }

  /**
   * Checks if the rent is overdue
   */
  public isOverDue(): boolean {
    const collectionDate = this.schema.collectionDate;
    if (!collectionDate) return false;
    
    const now = new Date();
    const collectionDateObj = new Date(collectionDate);
    return collectionDateObj < now;
  }

  /**
   * Returns the number of days the rent has been overdue
   * Returns 0 if not overdue or if collectionDate is null
   */
  public get overdueDays(): number {
    const collectionDate = this.schema.collectionDate;
    if (!collectionDate) return 0;
    
    const now = new Date();
    const collectionDateObj = new Date(collectionDate);
    if (collectionDateObj > now) return 0; // Not overdue yet
    
    // Calculate the difference in days
    const difference = now.getTime() - collectionDateObj.getTime();
    return Math.floor(difference / (1000 * 60 * 60 * 24));
  }

  /**
   * Returns the number of days until the rent is due
   * Returns negative value if overdue, 0 if due today, positive if future due date
   */
  public get daysUntilDue(): number {
    const collectionDate = this.schema.collectionDate;
    if (!collectionDate) return 0;
    
    const now = new Date();
    const collectionDateObj = new Date(collectionDate);
    const difference = collectionDateObj.getTime() - now.getTime();
    return Math.floor(difference / (1000 * 60 * 60 * 24));
  }

  /**
   * Returns a label indicating the status of the lease
   */
  public get label(): string {
    if (this.isOverDue()) {
      return "overdue";
    }
    return "pending";
  }

  public static calculateNextCollectionDate(due: Date, frequency: PaymentFrequency): string {
    const nextCollection = new Date(); // Start from today

    switch (frequency) {
      case "daily":
        nextCollection.setDate(nextCollection.getDate() + 1);
        break;

      case "weekly":
        nextCollection.setDate(nextCollection.getDate() + ((7 - nextCollection.getDay()) || 7));
        break;

      case "monthly":
        nextCollection.setMonth(nextCollection.getMonth() + 1);
        nextCollection.setDate(due.getDate()); // Maintain due day
        break;

      case "quarterly":
        nextCollection.setMonth(nextCollection.getMonth() + 3);
        nextCollection.setDate(due.getDate()); // Maintain due day
        break;

      case "biannually":
        nextCollection.setMonth(nextCollection.getMonth() + 6);
        nextCollection.setDate(due.getDate()); // Maintain due day
        break;

      case "yearly":
        nextCollection.setFullYear(nextCollection.getFullYear() + 1);
        nextCollection.setMonth(due.getMonth(), due.getDate()); // Maintain due month and day
        break;

      case "biennial":
        nextCollection.setFullYear(nextCollection.getFullYear() + 2);
        nextCollection.setMonth(due.getMonth(), due.getDate()); // Maintain due month and day
        break;
    }

    return nextCollection.toISOString().split("T")[0]; // Return in YYYY-MM-DD format
  }
}