export declare class Model<T extends Record<string, unknown>> {
    protected readonly data: T;
    constructor(data: T);
    toJsonString(): string;
    toMap(): Record<string, unknown>;
    /**
     * Returns a map containing only properties that are defined in the schema
     * Subclasses should override getSchemaProperties() to define their allowed properties
     */
    toSchemaOnlyMap(): Record<string, unknown>;
    /**
     * Override this method in subclasses to define which properties are allowed in the schema
     * Return null or empty set to disable filtering (returns all properties)
     */
    protected getSchemaProperties(): Set<string> | null;
    get schema(): T;
    static fromJson<T extends Record<string, unknown>>(this: new (data: T) => any, obj: T): any;
}
