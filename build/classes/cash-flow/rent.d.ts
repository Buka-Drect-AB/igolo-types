import { DocumentSchema, PaymentMethod } from "../..";
import { Model } from "../model";
export type Rent = {
    amount: number;
    currency: string;
    landlord: string;
    due: string;
    updatedBy?: string;
    lease: string;
    status: "paid" | "pending" | "stale" | "incomplete" | "in_review";
    tenant: string;
    method: PaymentMethod;
} & DocumentSchema;
export declare class RentModel extends Model<Rent> {
}
