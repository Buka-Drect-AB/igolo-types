const stringify = require('string-it-on');

export class StringHelper {
  /**
   * i.e hello world to Hello World
   * @param value string value
   */
  public static capitalizeWords(value: string): string {
    return stringify.capitalizeWords(value);
  }
  
  /**
   * i.e hello to HELLO
   * @param value string value
   */
  public static allCaps(value: string): string {
    return stringify.allCaps(value);
  }
  
  
  /**
   * i.e Amazing bongo drums to #amazing #bongo #drums
   * @param value string value
   */
  public static makeHashTag(value: string): string {
    return stringify.makeHashTag(value);
  }
  
  
  /**
   * i.e the hello in for the world to The Hello in for the World
   * @param value string value
   */
  public static headlineOnly(value: string): string {
    return stringify.capitalizeHeadline(value);
  }
  
  
  /**
   * i.e hello world to Hello world
   * @param value string value
   */
  public static capitalizeSentence(value: string): string {
    return stringify.capitalizeSentence(value);
  }
    
  
  /**
   * i.e hello world to hello_world
   * @param value string value
   */
  public static snakeCase(value: string): string {
    return stringify.snakeCase(value);
  }
  

  /**
   * i.e hello world to hello-world
   * @param value string value
   */
  public static kebabCase(value: string): string {
    return stringify.kebabCase(value);
  }
        
  
  /**
   * i.e hello world to helloWorld
   * @param value string value
   */
  public static camelCase(value: string): string {
    return stringify.camelCase(value);
  }
  

  /**
   * i.e hello world to HelloWorld
   * @param value string value
   */
  public static pascalCase(value: string): string {
    return stringify.pascalCase(value);
  }
  
}