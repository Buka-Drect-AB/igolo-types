import { BusinessType, DashboardRoles, DocumentSchema } from "../../types";
import { Model } from "../model";
interface Balance {
    current: number;
    lifetime_credits?: number;
    lifetime_debits?: number;
}
export interface Address {
    city: string;
    country: string;
    postCode?: string;
    street: string;
    state: string;
}
export type Organization = {
    name: string;
    slug: string;
    email?: string;
    image?: string;
    ownerId: string;
    referral?: string;
    type: BusinessType;
    address: Address;
    balance?: {
        live?: Balance | null;
        test?: Balance | null;
    };
    accepting_payments: boolean;
    settlement: {
        automatic_payouts?: boolean;
    };
    members: {
        [key: string]: {
            role: DashboardRoles;
            uid: string;
        };
    };
    terms: {
        mandatory: boolean;
        marketing: boolean;
    };
} & DocumentSchema;
export declare class OrganizationModel extends Model<Organization> {
    userRole(uid: string): DashboardRoles | undefined;
    /**
   * Override to provide Organization-specific schema properties
   * Uses the ORGANIZATION_SCHEMA constant to avoid duplication
   */
    protected getSchemaProperties(): Set<string>;
    /**
     * Override toMap to only return schema-compliant properties
     * If you want to keep the original toMap behavior, remove this override
     */
    toMap(): Record<string, unknown>;
}
export type OrgRequest = {
    org: string;
    uid: string;
} & DocumentSchema;
export type SettlementAccount = {
    org: string;
    createdBy: string;
    isActive: boolean;
    primary: boolean;
    currency: string;
    details: {
        account: string;
        name: string;
        bank: {
            name: string;
            code: string;
        };
    };
} & DocumentSchema;
export {};
