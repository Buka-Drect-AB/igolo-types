export const collections = {
  users: "users",
  organizations: "organizations", // a landlord is an organization
  leases: "leases",
  logs: "logs",
  properties: "properties",
  units: "units",
  reports: "reports", // maintenance reports
  charges: "charges", // TODO re-scheme this
  accounts: (collection: string, doc: string) => `${collection}/${doc}/accounts`, // sub collection
  inbox: (collection: string, doc: string) => `${collection}/${doc}/inbox`, // sub collection
} as const;

export const plans = {
  basic: "basic",
  scale: "scale",
} as const;

export const roles = {
  manager: "manager",
  viewer: "viewer",
} as const;

export const authProvider = {
  email: "Email address",
  google: "google.com",
  apple: "apple.com",
  pasby: "pasby e-ID (National Identification Number)",
  pasbyMail: "pasby and email authentication"
} as const;

export const businessType = {
  individual: "Individual",
  corporate: "Corporate",
} as const;

const pStatus = {
  pending: "pending",
  cancelled: "cancelled",
  reviewing: "reviewing",
  completed: "completed",
  terminated: "terminated",
} as const;


const frequency = {
  monthly: "monthly",
  yearly: "yearly",
  weekly: "weekly",
  daily: "daily",
  quarterly: "quarterly",
  biannually: "biannually",
  biennial: "biennial",
} as const;

export const paymentStatus = strEnum(['paid', 'pending', 'failed', 'refunded', 'cancelled']);
export const transactionType = strEnum(['credit', 'debit']);
export const environmentType = strEnum(['live', 'test']);
export const notificationRestrictions = strEnum(['owners', 'admin', 'members', 'none']);
export const notificationType = strEnum(["alert", "payment" , "process" , "info" , "message" , "lease"]);

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
export type NotificationRestriction = keyof typeof notificationRestrictions;


function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}