"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationType = exports.notificationRestrictions = exports.environmentType = exports.transactionType = exports.paymentStatus = exports.methods = exports.businessType = exports.authProvider = exports.roles = exports.plans = exports.collections = void 0;
exports.collections = {
    users: "users",
    organizations: "organizations", // a landlord is an organization
    leases: "leases",
    logs: "logs",
    actions: "actions",
    properties: "properties",
    units: "units",
    reports: "reports", // maintenance reports
    charges: "charges", // TODO re-scheme this
    accounts: (collection, doc) => `${collection}/${doc}/accounts`, // sub collection
    inbox: (collection, doc) => `${collection}/${doc}/inbox`, // sub collection
};
exports.plans = {
    basic: "basic",
    scale: "scale",
};
exports.roles = {
    manager: "manager",
    viewer: "viewer",
};
exports.authProvider = {
    email: "Email address",
    google: "google.com",
    apple: "apple.com",
    pasby: "pasby e-ID (National Identification Number)",
    pasbyMail: "pasby and email authentication"
};
exports.businessType = {
    individual: "Individual",
    corporate: "Corporate",
};
const pStatus = {
    pending: "pending",
    cancelled: "cancelled",
    reviewing: "reviewing",
    completed: "completed",
    terminated: "terminated",
};
const frequency = {
    monthly: "monthly",
    yearly: "yearly",
    weekly: "weekly",
    daily: "daily",
    quarterly: "quarterly",
    biannually: "biannually",
    biennial: "biennial",
};
const ocStatus = {
    occupied: "occupied",
    vacant: "vacant",
    reserved: "reserved",
    maintenance: "maintenance",
    unknown: "unknown",
    unavailable: "unavailable",
};
const utilities = {
    parking: "parking",
    security: "security",
    gym: "gym",
    pool: "pool",
    powerBackup: "power backup",
    waterSupply: "water supply",
};
exports.methods = {
    bank_transfer: "Bank Transfer",
    direct_debit: "Direct debit",
    cash: "Cash",
    card: "Bank card",
    check: "Check",
    money_order: "Money order",
    online: "Online payment"
};
exports.paymentStatus = strEnum(['paid', 'pending', 'failed', 'refunded', 'cancelled']);
exports.transactionType = strEnum(['credit', 'debit']);
exports.environmentType = strEnum(['live', 'test']);
exports.notificationRestrictions = strEnum(['owners', 'admin', 'members', 'none']);
exports.notificationType = strEnum(["alert", "payment", "process", "info", "message", "lease"]);
function strEnum(o) {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}
//# sourceMappingURL=enums.js.map