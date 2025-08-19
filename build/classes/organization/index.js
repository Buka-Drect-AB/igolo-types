"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationModel = void 0;
const model_1 = require("../model");
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
};
// Type-safe validation to ensure schema matches the type exactly
// This will cause a TypeScript error if the schema doesn't match the Organization type
const _validateSchema = ORGANIZATION_SCHEMA;
class OrganizationModel extends model_1.Model {
    userRole(uid) {
        var _a;
        return (_a = this.schema.members[uid]) === null || _a === void 0 ? void 0 : _a.role;
    }
    /**
   * Override to provide Organization-specific schema properties
   * Uses the ORGANIZATION_SCHEMA constant to avoid duplication
   */
    getSchemaProperties() {
        return new Set(Object.keys(ORGANIZATION_SCHEMA));
    }
    /**
     * Override toMap to only return schema-compliant properties
     * If you want to keep the original toMap behavior, remove this override
     */
    toMap() {
        return this.toSchemaOnlyMap();
    }
}
exports.OrganizationModel = OrganizationModel;
//# sourceMappingURL=index.js.map