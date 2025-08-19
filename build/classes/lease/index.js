"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaseModel = void 0;
const model_1 = require("../model");
class LeaseModel extends model_1.Model {
    static calculateNextCollectionDate(due, frequency) {
        const nextCollection = new Date(); // Start from today
        switch (frequency) {
            case "daily":
                nextCollection.setDate(nextCollection.getDate() + 1);
                break;
            case "weekly":
                nextCollection.setDate(nextCollection.getDate() + ((7 - nextCollection.getDay()) || 7));
                break;
            case "monthly":
                nextCollection.setMonth(nextCollection.getMonth() + 1);
                nextCollection.setDate(due.getDate()); // Maintain due day
                break;
            case "quarterly":
                nextCollection.setMonth(nextCollection.getMonth() + 3);
                nextCollection.setDate(due.getDate()); // Maintain due day
                break;
            case "biannually":
                nextCollection.setMonth(nextCollection.getMonth() + 6);
                nextCollection.setDate(due.getDate()); // Maintain due day
                break;
            case "yearly":
                nextCollection.setFullYear(nextCollection.getFullYear() + 1);
                nextCollection.setMonth(due.getMonth(), due.getDate()); // Maintain due month and day
                break;
            case "biennial":
                nextCollection.setFullYear(nextCollection.getFullYear() + 2);
                nextCollection.setMonth(due.getMonth(), due.getDate()); // Maintain due month and day
                break;
        }
        return nextCollection.toISOString().split("T")[0]; // Return in YYYY-MM-DD format
    }
}
exports.LeaseModel = LeaseModel;
//# sourceMappingURL=index.js.map