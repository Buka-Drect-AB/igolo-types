import { DocumentSchema, PaymentMethod } from "../..";
import { Model } from "../model";

export type Charge = {
  amount: number;
  currency: string;
  landlord: string;
  reference: string;
  fees?: {
    paystack?: number;
    provider: number;
    integration: number;
  };
  provider: "kora" | "stripe" | "none";
  nextDue: string;
  collectionDate: string;
  lease: string;
  status: "paid" | "failed" | "stale";
  tenant: string;
  method: PaymentMethod;
  paidAt?: number | undefined | null;
} & DocumentSchema;

export class ChargeModel extends Model<Charge> {
  public static calculatePercentage(amount: number, percentage: number): number {
    return (amount * percentage) / 100;
  }
}