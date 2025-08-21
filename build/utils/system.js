"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateShortCodeFromName = generateShortCodeFromName;
exports.generateStaffShortCode = generateStaffShortCode;
exports.unixTimeStampNow = unixTimeStampNow;
exports.createSlug = createSlug;
exports.unslug = unslug;
exports.generateRandomAlphaNumeric = generateRandomAlphaNumeric;
// Custom function to generate random alphanumeric strings
function generateRandomAlphanumeric(length, charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789') {
    let result = '';
    const charsetLength = charset.length;
    for (let i = 0; i < length; i++) {
        result += charset.charAt(Math.floor(Math.random() * charsetLength));
    }
    return result;
}
// Generate a 4-character random alphanumeric string (replaces nanoid)
const generateShortId = () => generateRandomAlphanumeric(4, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
function generateShortCodeFromName(name) {
    const clean = name
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, '') // remove spaces and special characters
        .slice(0, 3); // take up to first 3 letters (e.g. "AKU" from "Akub Ventures")
    const suffix = generateShortId(); // e.g., "9X2Q"
    return `${clean}-${suffix}`; // e.g., "AKU-9X2Q"
}
function generateStaffShortCode(orgShortCode, staffData) {
    const baseString = `${staffData.fullName}${staffData.email || ''}${staffData.phone || ''}`;
    // Simple hash to number
    let hash = 0;
    for (let i = 0; i < baseString.length; i++) {
        hash = (hash << 5) - hash + baseString.charCodeAt(i);
        hash |= 0; // Convert to 32bit int
    }
    // Convert hash to uppercase alphanumeric
    const suffix = Math.abs(hash).toString(36).toUpperCase().slice(-4);
    return `${orgShortCode}-${suffix}`;
}
function unixTimeStampNow() {
    const now = new Date();
    return Math.floor(now.getTime() / 1000);
}
function createSlug(name) {
    return name
        .toLowerCase() // Convert to lowercase
        .trim() // Remove leading/trailing whitespace
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^a-z0-9-]/g, '') // Remove non-alphanumeric characters except hyphens
        .replace(/-+/g, '-') // Replace multiple consecutive hyphens with single hyphen
        .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}
function unslug(slug, capitalize = true) {
    let result = slug
        .replace(/-/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    if (capitalize) {
        result = result.replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
    }
    return result;
}
/**
 * Random string generator helper
 * @param {number} length
 * @return {string} value
 */
function generateRandomAlphaNumeric(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
//# sourceMappingURL=system.js.map