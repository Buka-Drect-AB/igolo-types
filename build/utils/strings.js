"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringHelper = void 0;
const stringify = require('string-it-on');
class StringHelper {
    /**
     * i.e hello world to Hello World
     * @param value string value
     */
    static capitalizeWords(value) {
        return stringify.capitalizeWords(value);
    }
    /**
     * i.e hello to HELLO
     * @param value string value
     */
    static allCaps(value) {
        return stringify.allCaps(value);
    }
    /**
     * i.e Amazing bongo drums to #amazing #bongo #drums
     * @param value string value
     */
    static makeHashTag(value) {
        return stringify.makeHashTag(value);
    }
    /**
     * i.e the hello in for the world to The Hello in for the World
     * @param value string value
     */
    static headlineOnly(value) {
        return stringify.capitalizeHeadline(value);
    }
    /**
     * i.e hello world to Hello world
     * @param value string value
     */
    static capitalizeSentence(value) {
        return stringify.capitalizeSentence(value);
    }
    /**
     * i.e hello world to hello_world
     * @param value string value
     */
    static snakeCase(value) {
        return stringify.snakeCase(value);
    }
    /**
     * i.e hello world to hello-world
     * @param value string value
     */
    static kebabCase(value) {
        return stringify.kebabCase(value);
    }
    /**
     * i.e hello world to helloWorld
     * @param value string value
     */
    static camelCase(value) {
        return stringify.camelCase(value);
    }
    /**
     * i.e hello world to HelloWorld
     * @param value string value
     */
    static pascalCase(value) {
        return stringify.pascalCase(value);
    }
}
exports.StringHelper = StringHelper;
//# sourceMappingURL=strings.js.map