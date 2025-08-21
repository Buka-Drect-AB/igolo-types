export declare function generateShortCodeFromName(name: string): string;
export declare function generateStaffShortCode(orgShortCode: string, staffData: {
    fullName: string;
    email?: string;
    phone?: string;
}): string;
export declare function unixTimeStampNow(): number;
export declare function createSlug(name: string): string;
export declare function unslug(slug: string, capitalize?: boolean): string;
/**
 * Random string generator helper
 * @param {number} length
 * @return {string} value
 */
export declare function generateRandomAlphaNumeric(length: number): string;
