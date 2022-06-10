# javaScript Methods
## 1. Array.prototype.slice()
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

* slice(start)
* slice(start, end)

## 2. String.prototype.split()
The split() method divides a `String` into an ordered list of substrings, puts these substrings into an `array`, and returns the array. The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

* split(separator)
* split(separator, limit)

## 3. Array.prototype.join()
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

* join(separator)

## 4. instanceof
The `instanceof` operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.

* object `instanceof` constructor

## 5. typeof
The `typeof` operator returns a string indicating the type of the unevaluated operand.

## 6. Math.floor()
The Math.floor() function returns the largest integer less than or equal to a given number.

## 7. Math.sqrt()
The Math.sqrt() function returns the square root of a number. Math.sqrt() 函数返回数字的平方根。

## 8. Math.random()
The Math.random() method generates the random number between 0 and 1.

## 9. Math.pow()
The Math.pow() static method, given two arguments, base and exponent, returns baseexponent.
* Math.pow(base, exponent)

## 10. arguments.callee
The arguments.callee property contains the currently executing function.

callee is a property of the arguments object. It can be used to refer to the currently executing function inside the function body of that function. This is useful when the name of the function is unknown, such as within a function expression with no name (also called "anonymous functions").

