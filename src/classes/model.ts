import { generateRandomAlphaNumeric } from "../utils/system";

export class Model<T extends Record<string, unknown>> {
  constructor(protected readonly data: T) { }

  toJsonString(): string {
    return JSON.stringify(this.data);
  }

  toMap(): Record<string, unknown> {
    return { ...this.data };
  }

  /**
   * Returns a map containing only properties that are defined in the schema
   * Subclasses should override getSchemaProperties() to define their allowed properties
   */
  toSchemaOnlyMap(): Record<string, unknown> {
    const allowedProperties = this.getSchemaProperties();

    if (!allowedProperties || allowedProperties.size === 0) {
      // If no schema properties are defined, return all data (fallback behavior)
      return { ...this.data };
    }

    const filteredData: Record<string, unknown> = {};

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
  protected getSchemaProperties(): Set<string> | null {
    return null;
  }

  get schema() {
    return this.data;
  }

  static fromJson<T extends Record<string, unknown>>(this: new (data: T) => any, obj: T) {
    return new this(obj);
  }

  public static generateID({ prefix, length }: { prefix?: string, length?: number }) {
    return `${prefix ?? ''}_${generateRandomAlphaNumeric(length ?? 10)}`;
  }
}