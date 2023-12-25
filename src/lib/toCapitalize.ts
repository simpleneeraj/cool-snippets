/**
 * 
 * @param str String You want to convert
 * ```js
 *  console.log(toCapitalize("hello_World")); // HelloWorld
    console.log(toCapitalize("hello world")); // HelloWorld
    console.log(toCapitalize("hello World")); // HelloWorld
    console.log(toCapitalize("Hello-World")); // HelloWorld
    console.log(toCapitalize("hello-world")); // HelloWorld
    console.log(toCapitalize("Hello    World")); // HelloWorld
 * ```
 */

const toCapitalize = (str: string) => {
    let space = "";
    let arr = str.match(/[a-z]+|\d+/gi) as RegExpMatchArray;
    let newWord = arr.map((word) => {
        let w = `${word.charAt(0).toUpperCase()}${word.slice(1)}`
        return w
    })
    return newWord.join(space)
}

export default toCapitalize