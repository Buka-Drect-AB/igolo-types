import { Address, AuthenticationProvider, DocumentSchema } from "../..";
import { Model } from "../model";
export type User = {
    naming: {
        first: string;
        middle?: string;
        last: string;
    };
    email: string;
    isNewUser?: boolean | null;
    roles: {
        landlord?: boolean | null;
        tenant?: boolean | null;
    };
    fcm?: {
        device: string;
        token: string;
    };
    photoUrl: string | null | undefined;
    eid: string | null | undefined;
    phone: string | null | undefined;
    security: {
        emailVerified: boolean;
        phoneVerified: boolean;
        authProvider: AuthenticationProvider;
    };
    address?: Address;
} & DocumentSchema;
export declare class UserModel extends Model<User> {
    /**
    * Override to provide class-specific schema properties
    * Uses the USER_SCHEMA constant to avoid duplication
    */
    protected getSchemaProperties(): Set<string>;
    /**
     * Override toMap to only return schema-compliant properties
     * If you want to keep the original toMap behavior, remove this override
     */
    toMap(): Record<string, unknown>;
    get accountIsValid(): boolean;
    get fullname(): string;
}
