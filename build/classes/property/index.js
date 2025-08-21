"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitModel = exports.PropertyModel = void 0;
const strings_1 = require("../../utils/strings");
const model_1 = require("../model");
class PropertyModel extends model_1.Model {
    address() {
        return `${this.schema.address.street}, ${this.schema.address.city}, ${this.schema.address.state}${this.schema.address.postCode != null ? `, ${this.schema.address.postCode}` : ' '}${strings_1.StringHelper.capitalizeWords(this.schema.address.country)}`;
    }
}
exports.PropertyModel = PropertyModel;
class UnitModel extends model_1.Model {
}
exports.UnitModel = UnitModel;
//# sourceMappingURL=index.js.map