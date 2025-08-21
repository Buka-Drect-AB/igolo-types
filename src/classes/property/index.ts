import { Address, DocumentSchema, OccupancyStatus, PaymentFrequency, Utilities } from "../..";
import { StringHelper } from "../../utils/strings";
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

export class PropertyModel extends Model<Property> {

  public address() {
    return `${this.schema.address.street}, ${this.schema.address.city}, ${this.schema.address.state}${this.schema.address.postCode != null ? `, ${this.schema.address.postCode}` : ' '}${StringHelper.capitalizeWords(this.schema.address.country)}`;
  }
}

export class UnitModel extends Model<Unit> {

}