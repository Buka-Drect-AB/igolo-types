"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeModel = void 0;
const model_1 = require("../model");
class ChargeModel extends model_1.Model {
    static calculatePercentage(amount, percentage) {
        return (amount * percentage) / 100;
    }
}
exports.ChargeModel = ChargeModel;
//# sourceMappingURL=charge.js.map