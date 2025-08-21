"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaseModel = void 0;
const model_1 = require("../model");
class LeaseModel extends model_1.Model {
    /**
     * Checks if the collection date is within 7 days from now
     */
    isWithinSevenDays() {
        const targetDate = this.schema.collectionDate;
        if (!targetDate)
            return false;
        const now = new Date();
        const targetDateObj = new Date(targetDate);
        // Normalize times to midnight for accurate day difference
        const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const end = new Date(targetDateObj.getFullYear(), targetDateObj.getMonth(), targetDateObj.getDate());
        const dayDiff = Math.abs(Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
        return dayDiff <= 7;
    }
    /**
     * Checks if the rent is overdue
     */
    isOverDue() {
        const collectionDate = this.schema.collectionDate;
        if (!collectionDate)
            return false;
        const now = new Date();
        const collectionDateObj = new Date(collectionDate);
        return collectionDateObj < now;
    }
    /**
     * Returns the number of days the rent has been overdue
     * Returns 0 if not overdue or if collectionDate is null
     */
    get overdueDays() {
        const collectionDate = this.schema.collectionDate;
        if (!collectionDate)
            return 0;
        const now = new Date();
        const collectionDateObj = new Date(collectionDate);
        if (collectionDateObj > now)
            return 0; // Not overdue yet
        // Calculate the difference in days
        const difference = now.getTime() - collectionDateObj.getTime();
        return Math.floor(difference / (1000 * 60 * 60 * 24));
    }
    /**
     * Returns the number of days until the rent is due
     * Returns negative value if overdue, 0 if due today, positive if future due date
     */
    get daysUntilDue() {
        const collectionDate = this.schema.collectionDate;
        if (!collectionDate)
            return 0;
        const now = new Date();
        const collectionDateObj = new Date(collectionDate);
        const difference = collectionDateObj.getTime() - now.getTime();
        return Math.floor(difference / (1000 * 60 * 60 * 24));
    }
    /**
     * Returns a label indicating the status of the lease
     */
    get label() {
        if (this.isOverDue()) {
            return "overdue";
        }
        return "pending";
    }
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