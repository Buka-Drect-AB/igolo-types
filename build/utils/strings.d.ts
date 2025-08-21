export declare class StringHelper {
    /**
     * i.e hello world to Hello World
     * @param value string value
     */
    static capitalizeWords(value: string): string;
    /**
     * i.e hello to HELLO
     * @param value string value
     */
    static allCaps(value: string): string;
    /**
     * i.e Amazing bongo drums to #amazing #bongo #drums
     * @param value string value
     */
    static makeHashTag(value: string): string;
    /**
     * i.e the hello in for the world to The Hello in for the World
     * @param value string value
     */
    static headlineOnly(value: string): string;
    /**
     * i.e hello world to Hello world
     * @param value string value
     */
    static capitalizeSentence(value: string): string;
    /**
     * i.e hello world to hello_world
     * @param value string value
     */
    static snakeCase(value: string): string;
    /**
     * i.e hello world to hello-world
     * @param value string value
     */
    static kebabCase(value: string): string;
    /**
     * i.e hello world to helloWorld
     * @param value string value
     */
    static camelCase(value: string): string;
    /**
     * i.e hello world to HelloWorld
     * @param value string value
     */
    static pascalCase(value: string): string;
}
