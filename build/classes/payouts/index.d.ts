import { DocumentSchema, EnvironmentType, PaymentStatus, TransactionType } from "../..";
import { Model } from "../model";
export type Payout = {
    reference: string;
    provider: string;
    type: TransactionType;
    destination: {
        bank: string;
        account: string;
    };
    amount: number;
    paid_at?: number;
    currency: string;
    customer: string;
    provider_fee?: number;
    domain: EnvironmentType;
    status: PaymentStatus;
} & DocumentSchema;
export declare class PayoutModel extends Model<Payout> {
}
