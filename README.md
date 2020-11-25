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
        
* After ECMAScript 2015 (ES6), a new key-word to declare a variable in JS: `let` key-word
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

### 3-1: JS Array

* How to create an array:
    1. Using `[]`
        ```javascript
        var arr_1 = []; // create an empty array
        var arr_2 = ['test1', 2, true]; // create an array with initial values
        ```
    2. Using the JS Keyword `new`
        ```javascript
        var arr_1 = new Array(); // create an empty array
        var arr_2 = new Array('test1', 2, true); // create an empty array with initial values
        ```
        
> **Note:** To get the length of an array, use `.length` property
> ```javascript
> var arr = new Array(1, 2, 3);
> console.log(arr.length); // will return 3 which is the length of the array
> ```

* How to add new elements in an array
    1. Change `.length` to a larger value, and then assign new elements
    2. Add new elements directly using `[]` with a unused index
        ```javascript
        var fruits = ['Apple', 'Mango'];
        fruits[fruits.length] = 'Lemon';
        ```
    3. Use array `.push()` method

* Array methods
    * `.toString()`: convert an array to a string of (comma separated) array values
    * `.join('sep')`: similar to `toString()` method, but can specify the separator
    * `.push('value')`: add an element to the end of an array
    * `.unshift('value')`: add an element to the beginning of an array
    * `.pop()`: remove the last element of an array
    * `.shift()`: remove the first element of an array
    * `.concat(arr2)`: return a new array by concatenating existing arrays
    * `.forEach(fun)`: call the specified function (callback function) once for each array element to iterate through the array
    * `.sort()`: sort an array alphabetically

> **Note:** `.sort()` method sort an array alphabetically, not numerically. If we want to use `.sort()` method to perform numeric sort, we should use the following trick:
> ```javascript
> var points = [40, 100, 1, 5, 25, 10];
> // will sort points array numerically (ascending order)
> points.sort(function(a, b){return a - b});
> // will sort points array numerically (descending order)
> points.sort(function(a, b){return b - a});
> ```

### 3-2: JS Function

Code directory: [javascript3-2.html](https://github.com/SteveZhao13/Huawei_Classroom_FullStack_JavaScript/blob/master/javascript3-2.html)

* Declare a function
    * Use `function` key word
        ```javascript
        function fun(parm_0, parm_1) {
            // function content
            return ret_value;
        }
        ```
    > **Note:** Don't need to explicitly declare the return type of the function or the types of input parameters like other languages like C/C++

    > **Note:** Counts of parameters(形参) and arguments(实参) could be different. If parameters are more than arguments, then the extra parameters will be the value of `undefined`; if arguments are more than parameters, the extra arguments will be ignored
    
    * Use a function expression (also called `anonymous function`)
        ```javascript
        var ret = function(parm_0, parm_1) {
            return parm_0 + parm_1;
        };
        console.log(ret);
        ```
        
    > **Note:** Anonymous functions stored in variables and they do not need function names; Remember to end with a semicolon (`,`) because it is a part of an executable statement; Often used when a function is only useful at one certain place
    
* Get all the arguments from calling a function: Use `arguments` key word
    * When we don't know how many arguments will be passed into a function, we can ignore the declaration of the parameters. Instead, we can use `arguments` key word to get all arguments
    * `arguments` is a build-in object
    * `arguments` object is a pseudo-array
        1. it has `.length` property
        2. it can be accessed with index
        3. however, it doesn't have array methods like pop() and push()
    * How to use `arguments` object
        ```javascript
        function fun() {
            // within a function, we can use arguments key word
            for (var i = 0; i < arguments.length; i++) {
                console.log(arguments[i]);
                // or do any actions with it
            }
        }
        ```
    
* Local and global variables
    * Local variables are defined within a `function`; global variables are defined outside a function but inside a `<script>` tag or a js file
    * Local variables can not be accessed outside the function
    * Variables declared using `var` key-word don't have block scope(块级作用域)
    * Variables declared using `let` key-word have block scope(in JS ES6 version)
    
* JavaScript Hoisting (提升): Hoisting is JavaScript's default behavior of moving **declarations** to the top
    * JavaScript Hoisting consists of `variable hoisting`(变量提升) and `function hoisting`(函数提升)
    * Because of hoisting in JS, a variable or a function can be declared after it has been used
    * `var` and `function` will be hoisted, function expression won't
    
    ```javascript
    /* use the variable 'x' first, then declare */
    x = 13;
    console.log(x);
    var x;
    /* use the function 'fun' first, then declare*/
    fun();
    function fun() {
        // function content
        return ret;
    }
    ```
    
    > **Note:** only **declaration** will be hoisted, **initialization** won't
    
    > **Tips and Testing Points 面试试题**
    >
    > Question: What will be the result of the following code
    > ```javascript
    > fn1();
    > console.log(c); // output 9
    > console.log(b); // output 9
    > console.log(a); // error because a is a local variable within fn1() function
    > // declaration of function fn1() will be hoisted above to the top
    > function fn1() {
    >     var a = b = c = 9;
    >     // above code is equal to: var a=9; b=9; c=9;
    >     // b and c are global variables cause they are not declared using 'var' key-word
    >     console.log(a); // output 9
    >     console.log(b); // output 9
    >     console.log(c); // output 9
    > }
    > ```
    > Answer: output will be 9, 9, 9, 9, 9, error(variable undefined)
    
    

// chapter 5-18