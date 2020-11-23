# Huawei_Classroom_FullStack_JavaScript
This repository is to learn javascript programming language in Huawei Classroom for Full Stack programming learning

## Chapter 1

### 1-1: Intro to JavaScript

Code directory: [javascript1-1.html](https://github.com/SteveZhao13/Huawei_Classroom_FullStack_JavaScript/blob/master/javascript1-1.html) and [javascript1-1.js](https://github.com/SteveZhao13/Huawei_Classroom_FullStack_JavaScript/blob/master/javascript1-1.js)

* JavaScript (JS) is a programming language, which is often just-in-time compiled and runs on the agent side (can use Node.js to perform server side work). Apart from HTML and CSS, which are describing language, JS, however, is a programming language. JS code is compiled and executed line by line

* JS is consist with three parts: ECMAScript (JavaScript语法), DOM (Document Object Model 页面文档对象模型) and BOM (Browser Object Model 浏览器对象模型)

* Ways to write JavaScript code
    * Inline JS: Inline JS can be used to control `a single element`
    * Internal JS: Internal JS is used to control `a single HTML page`. Just insert it using **script** element, between `<script>` and `</script>` tags
    * External JS: External JS has the same effect as Internal JS. To use it, add *src* attribute to refer to a external script sheet file inside the **script** element

> **Note:** Usually we would use single quote to write JS code, see example below
> ```javascript
> alert('this is a JS alert function')
> ```

* How to comment out JS code: the same as C/C++ (`//` as single line comment; `/* */` as multiple lines comment)

### 1-2: JS Input an Output statements

* Input: `prompt('Info')`
* Output: `alert('Info')` and `console.log('Info')`
```javascript
/* prompt is used as input statement for JS*/
prompt('Input Statement');
/* alert is used as output statement for JS to show an alert info*/
alert('Alert as an Output Statemtent');
/* console.log is used as output statement for JS to show logs in console*/
console.log('Alert as an Output Statemtent');
```

### 1-3: JS Variables

* How to declare a variable in JS: Use `var` key-word
    ```javascript
    var name = 'Steve Zhao';
    console.log(name);
    var age = 24；
    console.log(age);
    ```
        
* After ECMAScript 2015, a new key-word to declare a variable in JS: `let` key-word
    ```javascript
    for (let i = 0; i < 13; i++) {
        // 'i' is only accessible within this block
    } 
    ```
> **Notes:** 
>
> * If a variable is <u>declared but NOT initialized</u>, then it will show `undefined` in the console log. However, if a variable is <u>NOT declared and initialized</u> directly, it will pass and show `the correct value`
>
> * Dollar Sign (`$`) and Underscore (`_`) can be used in the beginning of an variable
> 
> * `let` key-word is more like a variable in C/C++ language, it has block scope (块级作用域), which means it only takes affect within certain scope, a.k.a within a block defined by `{}`


### 1-4: JS Data Types

* Number - 12, 3.14, etc. (default value: 0)

> **Notes:** 
>
> * Octal numbers are starting with 0; Hexadecimal numbers are starting with 0x
>
> * Maximum number in JS is `Number.MAX_VALUE`; Minimum number in JS is `Number.MIN_VALUE`
>
> * `Infinity` represents gigantic and `NaN` represents Not a Number 
> ```javascript
> var octValue = 010; // will be 8 in decimal
> var hexValue = 0xf; // will be 15 in decimal
> console.log(Number.MAX_VALUE) // will show the maximum value in JS
> console.log(Number.MIN_VALUE) // will show the minimum value in JS
> ```
>
> * `isNaN()` function is used to determine if it's a number data. If it's a number, then it will return "false", if it's not a number, then it will return "true"

* Boolean - false, true (default value: false)
* String - "this is a string" (default value: "")

> **Notes:**
> 
> * Use `\` as Escape Character in JS. For example, `\n` means a new line, `\t` means a indentation, `\b` means a blank
>
> * Use `.length` method to get the length of a string variable
> ```javascript
> var str = 'this is a string variable';
> console.log(str.length); // output the length of the 'str' variable
> ```
> 
> * There are other methods of string variables. Use `.search()` and `.indexOf()` to find the index of certain sub-string
> ```javascript
> var str = 'this is a string variable';
> var pos_1 = str.indexOf('is'); // return 2
> var pos_2 = str.search('string'); // return 10
> ```
> * Use `+` to concatenate two string variables. As long as there is one **String** variable, the other variables will be seen as strings as well when using `+` to concatenate

* Undefined - undefined (default value: undefined)
* Null - null (default value: null)
* Object (Object is **complex data type**, the above 5 data types are all **simple data types**)
    
> **Note:** JS has dynamic data types, which means that the same variable can be used to hold different data types. Actual data type of a variable is defined when the variable is given a certain kind of data

> **Note:** Use `typeof` to get the data type of a certain variable
> ```javascript
> var num = 13, str = 'test', flag = true;
> console.log(typeof num); // output is 'number'
> console.log(typeof str); // output is 'string'
> console.log(typeof flag); // output is 'boolean'
> ```

### 1-5: JS Data Type Conversion

* Convert into `String` data type
    * .toString() method
    ```javascript
    var num = 13;
    /* toString() method converts a number to a string */
    var num_str = num.toString(); 
    ```
    
    * String() function
    ```javascript
    var num = 13;
    /* String() function converts the value of an object to a string */
    var num_str = String(num); 
    ```
    
    * Use `+` to concatenate variables with strings
    ```javascript
    var num = 13;
    /* implicit conversion to a string */
    console.log(num + '');
    ```
    
* Convert into `Number` data type
    * parseInt()/parseFloat() functions
    ```javascript
    var str = '13.15';
    /* parseInt()/parseFloat() parses a string to an number */
    console.log(parseInt(str)); // return 13
    console.log(parseFloat(str)); // return 13.15
    ```
    
    > **Note:**
    >
    > * Only the first number in the string will be returned
    > * If the first character cannot be converted to a number, they will return NaN.
    > * Return values of a `form` or `prompt()` will be strings, so remember to use the functions to convert them into a number if you want to do some calculations
    
    * Number() function
    ```javascript
    var str = '13';
    /* Number() function converts the value of an object to a number */
    console.log(Number(str));
    ```
    
    * Use `-` , `*` to implicitly convert a string to a number
    ```javascript
    /* implicit conversion to a number */
    console.log('13' - 0);
    console.log('13' * 1);
    ```
    
* Convert into `Boolean` data type
    * Boolean() function
    ```javascript
    var str = '13';
    /* Boolean() function converts the value of an object to a boolean value */
    console.log(Boolean(str));
    ```
    
    > **Note:** Only `''`, `0`, `NaN`, `null` and `undefined` will be converted to false, the other values will all be converted to true

## Chapter 2

### 2-1: JS Operators

* Arithmetic Operators (`+`, `-`, `*`, `/`, `%`, `++`, `**`, etc.)

> **Note:** floating numbers are not very accurate (17 bits), so be careful when using floating numbers. Also remember: don't compare two floating numbers directly, which will often cause problems
> ```javascript
> var ret = 0.1 + 0.2 // will be 0.30000000000000004
> var mul = 0.07 * 100 // will be 7.000000000000001
> console.log(0.3 == ret) // will return false
> ```

* Assignment Operators (`=`, `+=`, etc.)
* Comparison Operators (`==`, `>`, `<`, `!=`, `===`, etc.)

> **Note:** `==` will compare two values only; `===` will not only compare two values, but also data types
> ```javascript
> if (18 == '18') {
>     // will be true, because both values are the same
>     // the string will be converted to a number
> }
> if (18 === '18') {
>     // will be false, because a number is comparing to a string
> }
> ```

* Logical Operators (`&&`, `||`, `!`): `&&` has priority than `||` 

> **Note:** When using logical operators `&&` and `||`, there will be short-circuit evaluation (逻辑中断/短路运算), it behaves like the following:
> * expression-1 && expression-2
>   * if expression-1 is true, return expression-2
>   * if expression-1 is false, return expression-1
>   ```javascript
>   if (123 && 456) {
>       // will return 456 since 123 is true
>   }
>   ```
> * expression-1 || expression-2
>   * if expression-1 is true, return expression-1
>   * if expression-1 is false, return expression-2
>   ```javascript
>   if (undefined || 'default_value') {
>       // will return 'default_value' since undefined is false
>       // this is extremely useful when we want to set some default values for a variable, if we don't know if it exists
>    }
>   ```

* Conditional (Ternary) Operator (`condition ? value-1 : value-2`)
* Bit-wise Operators (`&`, `|`, `~`, `^`, `<<`, etc.)

### 2-2: JS Conditions

* `if` condition
* `if... else...` condition
* `if... else if... else...` condition
* `switch` condition

> **Note:** `switch` condition is more efficient than `if.. else...` condition

### 2-3: JS Loop

* `for` loop
* `while` loop
* `do... while` loop

> **Note:** If we want to set break points and debug JS code, we should go to our browser, "F12" and open "source" tab to set break points. Use "F11" to run the next step

## Chapter 3

### 3-1: JS Array and Function

// chapter 4-1