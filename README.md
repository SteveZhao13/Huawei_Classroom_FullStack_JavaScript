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

* JS Input an Output statements
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

* JS Variables
    * How to declare a variable in JS: Use `var` key word
        ```javascript
        var name = 'Steve Zhao';
        console.log(name);
        var age = 24；
        console.log(age);
        ```
> **Notes:** 
>
> * If a variable is <u>declared but NOT initialized</u>, then it will show `undefined` in the console log. However, if a variable is <u>NOT declared and initialized</u> directly, it will pass and show `the correct value`
>
> * Dollar Sign (`$`) and Underscore (`_`) can be used in the beginning of an variable

* JS Data Types
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
    
    > **Notes:** We can use `\` as Escape Character in JS. For example, `\n` means a new line, `\t` means a indentation, `\b` means a blank
    
    // chapter 26
    
    * Undefined - undefined (default value: undefined)
    * Null - null (default value: null)
    * Object
    
> **Note:** JS has dynamic data types, which means that the same variable can be used to hold different data types
