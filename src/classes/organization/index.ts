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

// Schema definition that mirrors the type structure
const ORGANIZATION_SCHEMA = {
  // DocumentSchema properties
  id: true,
  iat: true,
  lut: true,
  // Organization properties
  name: true,
  slug: true,
  email: true,
  image: true,
  ownerId: true,
  address: true,
  referral: true,
  type: true,
  balance: true,
  accepting_payments: true,
  settlement: true,
  members: true,
  terms: true,
} as const;

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
    },
  }
  terms: {
    mandatory: boolean;
    marketing: boolean;
  };
} & DocumentSchema;

// Type-safe validation to ensure schema matches the type exactly
// This will cause a TypeScript error if the schema doesn't match the Organization type
const _validateSchema: Record<keyof Organization, true> = ORGANIZATION_SCHEMA;


export class OrganizationModel extends Model<Organization> {
  public userRole(uid: string): DashboardRoles | undefined {
    return this.schema.members[uid]?.role;
  }

  /**
 * Override to provide Organization-specific schema properties
 * Uses the ORGANIZATION_SCHEMA constant to avoid duplication
 */
  protected getSchemaProperties(): Set<string> {
    return new Set(Object.keys(ORGANIZATION_SCHEMA));
  }

  /**
   * Override toMap to only return schema-compliant properties
   * If you want to keep the original toMap behavior, remove this override
   */
  toMap(): Record<string, unknown> {
    return this.toSchemaOnlyMap();
  }
}

export type OrgRequest = {
  org: string;
  uid: string; // authenticated user
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
    }
  }
} & DocumentSchema;