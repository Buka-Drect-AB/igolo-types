"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
const system_1 = require("../utils/system");
class Model {
    constructor(data) {
        this.data = data;
    }
    toJsonString() {
        return JSON.stringify(this.data);
    }
    toMap() {
        return Object.assign({}, this.data);
    }
    /**
     * Returns a map containing only properties that are defined in the schema
     * Subclasses should override getSchemaProperties() to define their allowed properties
     */
    toSchemaOnlyMap() {
        const allowedProperties = this.getSchemaProperties();
        if (!allowedProperties || allowedProperties.size === 0) {
            // If no schema properties are defined, return all data (fallback behavior)
            return Object.assign({}, this.data);
        }
        const filteredData = {};
        for (const key of Object.keys(this.data)) {
            if (allowedProperties.has(key)) {
                filteredData[key] = this.data[key];
            }
        }
        return filteredData;
    }
    /**
     * Override this method in subclasses to define which properties are allowed in the schema
     * Return null or empty set to disable filtering (returns all properties)
     */
    getSchemaProperties() {
        return null;
    }
    get schema() {
        return this.data;
    }
    static fromJson(obj) {
        return new this(obj);
    }
    static generateID({ prefix, length }) {
        return `${prefix !== null && prefix !== void 0 ? prefix : ''}_${(0, system_1.generateRandomAlphaNumeric)(length !== null && length !== void 0 ? length : 10)}`;
    }
}
exports.Model = Model;
//# sourceMappingURL=model.js.map