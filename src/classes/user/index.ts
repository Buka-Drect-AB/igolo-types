import { Address, AuthenticationProvider, DocumentSchema } from "../..";
import { Model } from "../model";



// Schema definition that mirrors the type structure
const USER_SCHEMA = {
  // DocumentSchema properties
  id: true,
  iat: true,
  lut: true,
  // Organization properties
  naming: true,
  email: true,
  photoUrl: true,
  eid: true,
  fcm: true,
  address: true,
  phone: true,
  isNewUser: true,
  security: true,
  roles: true,
} as const;

export type User = {
  naming: {
    first: string;
    last: string;
  },
  email: string;
  isNewUser?: boolean | null;
  roles: {
    landlord?: boolean | null;
    tenant?: boolean | null;
  },
  fcm?: {
    device: string;
    token: string;
  }
  photoUrl: string | null | undefined;
  eid: string | null | undefined;
  phone: string | null | undefined;
  security: {
    emailVerified: boolean;
    phoneVerified: boolean;
    authProvider: AuthenticationProvider;
  },
  address?: Address, 
} & DocumentSchema;

// Type-safe validation to ensure schema matches the type exactly
// This will cause a TypeScript error if the schema doesn't match the Organization type
const _validateSchema: Record<keyof User, true> = USER_SCHEMA;

export class UserModel extends Model<User> {

  /**
  * Override to provide class-specific schema properties
  * Uses the USER_SCHEMA constant to avoid duplication
  */
  protected getSchemaProperties(): Set<string> {
    return new Set(Object.keys(USER_SCHEMA));
  }

  /**
   * Override toMap to only return schema-compliant properties
   * If you want to keep the original toMap behavior, remove this override
   */
  toMap(): Record<string, unknown> {
    return this.toSchemaOnlyMap();
  }

  public get accountIsValid(): boolean {
    return this.data.naming.first.length > 1 && this.data.naming.last.length > 1;
  }

  public get fullname(): string {
    const naming = this.data.naming;
    // Handle null/undefined input
    if (!naming) {
      return '';
    }

    // Trim whitespace and handle empty strings
    const firstName = naming.first?.trim() || '';
    const lastName = naming.last?.trim() || '';

    // If both are empty, return empty string
    if (!firstName && !lastName) {
      return '';
    }

    // If only first name exists
    if (firstName && !lastName) {
      return firstName;
    }

    // If only last name exists
    if (!firstName && lastName) {
      return lastName;
    }

    // Both names exist
    return `${firstName} ${lastName}`;
  }
}
 