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
    static calculateNextCollectionDate(due: Date, frequency: PaymentFrequency): string;
}
export {};
