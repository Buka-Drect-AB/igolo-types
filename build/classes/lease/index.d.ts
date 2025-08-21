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
    }[];
    file: {
        link: string;
        mime: string;
    };
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
export declare class LeaseModel extends Model<Lease> {
    /**
     * Checks if the collection date is within 7 days from now
     */
    isWithinSevenDays(): boolean;
    /**
     * Checks if the rent is overdue
     */
    isOverDue(): boolean;
    /**
     * Returns the number of days the rent has been overdue
     * Returns 0 if not overdue or if collectionDate is null
     */
    get overdueDays(): number;
    /**
     * Returns the number of days until the rent is due
     * Returns negative value if overdue, 0 if due today, positive if future due date
     */
    get daysUntilDue(): number;
    /**
     * Returns a label indicating the status of the lease
     */
    get label(): string;
    static calculateNextCollectionDate(due: Date, frequency: PaymentFrequency): string;
}
export {};
