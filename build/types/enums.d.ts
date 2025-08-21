export declare const collections: {
    readonly users: "users";
    readonly organizations: "organizations";
    readonly leases: "leases";
    readonly logs: "logs";
    readonly actions: "actions";
    readonly properties: "properties";
    readonly units: "units";
    readonly reports: "reports";
    readonly charges: "charges";
    readonly accounts: (collection: string, doc: string) => string;
    readonly inbox: (collection: string, doc: string) => string;
};
export declare const plans: {
    readonly basic: "basic";
    readonly scale: "scale";
};
export declare const roles: {
    readonly manager: "manager";
    readonly viewer: "viewer";
};
export declare const authProvider: {
    readonly email: "Email address";
    readonly google: "google.com";
    readonly apple: "apple.com";
    readonly pasby: "pasby e-ID (National Identification Number)";
    readonly pasbyMail: "pasby and email authentication";
};
export declare const businessType: {
    readonly individual: "Individual";
    readonly corporate: "Corporate";
};
declare const pStatus: {
    readonly pending: "pending";
    readonly cancelled: "cancelled";
    readonly reviewing: "reviewing";
    readonly completed: "completed";
    readonly terminated: "terminated";
};
declare const frequency: {
    readonly monthly: "monthly";
    readonly yearly: "yearly";
    readonly weekly: "weekly";
    readonly daily: "daily";
    readonly quarterly: "quarterly";
    readonly biannually: "biannually";
    readonly biennial: "biennial";
};
declare const ocStatus: {
    readonly occupied: "occupied";
    readonly vacant: "vacant";
    readonly reserved: "reserved";
    readonly maintenance: "maintenance";
    readonly unknown: "unknown";
    readonly unavailable: "unavailable";
};
declare const utilities: {
    readonly parking: "parking";
    readonly security: "security";
    readonly gym: "gym";
    readonly pool: "pool";
    readonly powerBackup: "power backup";
    readonly waterSupply: "water supply";
};
declare const methods: {
    readonly bank_transfer: "Bank Transfer";
    readonly direct_debit: "Direct debit";
    readonly cash: "Cash";
    readonly card: "Bank card";
    readonly check: "Check";
    readonly money_order: "Money order";
    readonly online: "Online payment";
};
export declare const paymentStatus: {
    pending: "pending";
    cancelled: "cancelled";
    paid: "paid";
    failed: "failed";
    refunded: "refunded";
};
export declare const transactionType: {
    credit: "credit";
    debit: "debit";
};
export declare const environmentType: {
    live: "live";
    test: "test";
};
export declare const notificationRestrictions: {
    owners: "owners";
    admin: "admin";
    members: "members";
    none: "none";
};
export declare const notificationType: {
    alert: "alert";
    payment: "payment";
    process: "process";
    info: "info";
    message: "message";
    lease: "lease";
};
export type OccupancyStatus = keyof typeof ocStatus;
export type Utilities = keyof typeof utilities;
export type PaymentFrequency = keyof typeof frequency;
export type PaymentStatus = keyof typeof paymentStatus;
export type NotificationType = keyof typeof notificationType;
export type TransactionType = keyof typeof transactionType;
export type BillingPlans = keyof typeof plans;
export type BusinessType = keyof typeof businessType;
export type DashboardRoles = keyof typeof roles;
export type EnvironmentType = keyof typeof environmentType;
export type AuthenticationProvider = keyof typeof authProvider;
export type ProcessStatus = keyof typeof pStatus;
export type PaymentMethod = keyof typeof methods;
export type NotificationRestriction = keyof typeof notificationRestrictions;
export {};
