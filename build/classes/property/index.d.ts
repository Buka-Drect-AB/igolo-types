import { Address, DocumentSchema, OccupancyStatus, PaymentFrequency, Utilities } from "../..";
import { Model } from "../model";
export type Property = {
    currency: string;
    name: string;
    owner: string;
    type: string;
    utilities: Utilities[];
    address: Address;
} & DocumentSchema;
export type Unit = {
    paymentFrequency: PaymentFrequency;
    name: string;
    occupancyStatus: OccupancyStatus;
    type: string;
    propertyID: string;
    tenant?: string;
    lease?: string;
    rentAmount: number;
} & DocumentSchema;
export declare class PropertyModel extends Model<Property> {
    address(): string;
}
export declare class UnitModel extends Model<Unit> {
}
