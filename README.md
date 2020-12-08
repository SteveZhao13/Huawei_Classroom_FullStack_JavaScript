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
> * There are other methods of string variables. Use `.search()` and `.indexOf()` to find the index of certain substring
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
        var arr_3 = new Array(5); // create an array of length 5 but with empty elements
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
    
* How to determine whether a var is an array or not
    1. `instanceof` key-word
        ```javascript
        var arr = [];
        console.log(arr instanceof Array); // will return true
        ```

    2. `Array.isArray()` method
        ```javascript
        var arr = [];
        console.log(Array.isArray(arr)); // will return true
        ```
    
* Array methods
    * `.toString()`: convert an array to a string of (comma separated) array values
    * `.join('sep')`: similar to `toString()` method, but can specify the separator
    * `.push('value')`: add an element to the end of an array (return value is the array length after adding new elements)
    * `.unshift('value')`: add an element to the beginning of an array
    * `.pop()`: remove the last element of an array (return value is the deleted element)
    * `.shift()`: remove the first element of an array
    * `.concat(arr2)`: return a new array by concatenating existing arrays
    * `.forEach(fun)`: call the specified function (callback function) once for each array element to iterate through the array
    * `.sort()`: sort an array alphabetically
    * `.reverse()`: reverse the order of the elements in an array
    * `.indexOf('value')`/`.lastIndexOf('value')`: return the index of a giving element in an array (the first index or the last one corresponding to method name; if the element not exists, return -1)

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
    
### 3-3: JS Object

Code directory: [javascript3-3.html](https://github.com/SteveZhao13/Huawei_Classroom_FullStack_JavaScript/blob/master/javascript3-3.html)

An object consists of `properties` and `methods`. Objects can contain many values which have different types.

* How to create(define) an object
    1. Using `{}` (object literal 对象字面量)
        ```javascript
        /* define an object */
        var obj_sample = {
            // properties - key:value
            userName: 'steve',
            userAge: 25,
            // method - key:anonymous function
            sayHi: function() {
                console.log('Hi');
            }
        };
        /* accessing an object */
        console.log(obj_sample.userName); // obj.key
        console.log(obj_sample['userAge']); // obj['key']
        obj_sample.sayHi();
        ```
    
    2. Using the JS Keyword `new`
        ```javascript
        var obj_sample = new Object(); // create an empty object
        /* initialize object properties and methods*/
        obj_sample.userName = 'steve';
        obj_sample.userAge = 25;
        obj_sample.sayHi = function() {
            console.log('Hi');
        };
        ```
    
    3. Using an object `constructor`(构造函数)
        ```javascript
        // create a constructor
        function ObjTemp(para_1, para_2) {
            this.userName = para_1;
            this.userAge = para_2;
            this.sayHi = function(para_3) {
                console.log(para_3)
            };
        }
        // initial objects using the above constructor
        var obj_1 = new ObjTemp('steve', 25);
        var obj_2 = new ObjTemp('sophie', 24);
        // call methods
        obj_1.sayHi('Hi from Steve');
        obj_2.sayHi('Hi from Sophie');
        ```
    > **Note:** Usually constructors start with **Upper Case**
    
    > **Note:** `this` refers to a object itself. `this` will become the actual values when `new` is called to create a new object
    
* How to **traverse** properties/methods in an object: `for ... in ...`
    ```javascript
    for (var key in obj_sample) {
        console.log(key); // print out keys in an object
        console.log(obj_sample[key]); // print out values for corresponding keys
    }
    ```
    
### 3-4: JS Standard Build-in Objects

**Reference:** [MDN Document on build-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

Code directory: [javascript3-4.html](https://github.com/SteveZhao13/Huawei_Classroom_FullStack_JavaScript/blob/master/javascript3-4.html)

* `Math`: `Math` is not a constructor, so we don't need to use `new` to create it, just use it directly
    ```javascript
    Math.PI // π value 
    Math.E // exp value
    Math.max(value_1, value_2, value_3); // 最大值
    Math.abs(value) // 绝对值
    Math.floor(value) // 向上取整
    Math.ceil(value) // 向下取整
    Math.round(value) // 四舍五入
    Math.random() // return a random value x ∈ [0,1)
    ```

    > **Note:** if we want to return a random value between two values, we can use the following `getRandomArbitrary()` function; if we want to return a random integer between two values inclusively, we can use the following  `getRandomIntInclusive()` function
    > ```javascript
    > function getRandomArbitrary(min, max) {
    >     return Math.random() * (max - min) + min;
    > }
    > function getRandomIntInclusive(min, max) {
    >     return Math.floor(Math.random() * (max - min + 1) + min);
    > }
    > ```

* `Date`: use `new` to create a date object before using it
    ```javascript
    var date = new Date();
    var date_1 = new Date('1995-12-10 03:24:05');
    var date_2 = new Date(1995, 12, 10, 3, 24, 5); // the month is 0-indexed
    date.getFullYear(); // getMonth(), getDate(), getDay()
    date.getHours(); // getMinutes(), getSeconds()
    date.getTime(); // or Date.now() 得到时间戳
    ```
    
    > **Note:** `.getMonth()` method will return month from 0-11; `getDay()` method will return weekdays where Sun is 0 and Sat is 6

* `Array`: refer to [3-1 JS Array](https://github.com/SteveZhao13/Huawei_Classroom_FullStack_JavaScript#3-1-js-array)

* `String`: when creating a string using `''`, JS will automatically change it to a `String` object
    * `.indexOf('value', strat_index)`: return the index of the value in a string, starting at start_index(if not provided, starting from index 0)
    * `charAt(index)`: return the character which is at the index place of a string (same as str[i])
    * `.charCodeAt(index)`: return the ASCII code of the character at index
    * `.concat(str1, str2)`: concatenate strings
    * `.substr(start_index, substring_length)`: get a sub-string from the first parameter and the sub-string length is the second parameter
    * `.replace(src_char, dest_char)`: replace the first appearance of the src_char character with dest_str in a string
    * `.split('sep')`: change a string separated by 'sep' into an array
    * `.toUpperCase()`/`.toLowerCase()`: change lower/upper case

    > **Note:** When we change the content of a string, JS will **create a new memory place** to store the new content of a string, and still keep the old string in memory. Therefore, don't always change string content or concatenate strings

> **Note:** JS has two data types, simple data type (like string, number, boolean, etc.) and complex data type (like `Object`, `Array`, `Date`, etc.)
> * simple data types: directly store as values in stack
> * complex data types: store as addresses in stack, where the addresses are pointing to actual values stored in heap 

> **Note:** Base on the last "Note", when pass a complex data type variable into a function, the address of the variable is passed into the function. Therefore, <b><i>any changes made by the function will take effect on the variable even outside the function</i></b>. However, a simple data type variable won't be changed by function actions