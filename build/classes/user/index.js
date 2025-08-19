"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const model_1 = require("../model");
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
};
// Type-safe validation to ensure schema matches the type exactly
// This will cause a TypeScript error if the schema doesn't match the Organization type
const _validateSchema = USER_SCHEMA;
class UserModel extends model_1.Model {
    /**
    * Override to provide class-specific schema properties
    * Uses the USER_SCHEMA constant to avoid duplication
    */
    getSchemaProperties() {
        return new Set(Object.keys(USER_SCHEMA));
    }
    /**
     * Override toMap to only return schema-compliant properties
     * If you want to keep the original toMap behavior, remove this override
     */
    toMap() {
        return this.toSchemaOnlyMap();
    }
    get accountIsValid() {
        return this.data.naming.first.length > 1 && this.data.naming.last.length > 1;
    }
    get fullname() {
        var _a, _b;
        const naming = this.data.naming;
        // Handle null/undefined input
        if (!naming) {
            return '';
        }
        // Trim whitespace and handle empty strings
        const firstName = ((_a = naming.first) === null || _a === void 0 ? void 0 : _a.trim()) || '';
        const lastName = ((_b = naming.last) === null || _b === void 0 ? void 0 : _b.trim()) || '';
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
exports.UserModel = UserModel;
//# sourceMappingURL=index.js.map