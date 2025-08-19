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