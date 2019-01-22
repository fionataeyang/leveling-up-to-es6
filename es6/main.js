// ESM syntax is supported.
// import {
//     add as myAddFunction, 
//     substract, 
//     multiple, 
//     division
// } from './add';
import * as myUtilLib from './add';
console.log(myUtilLib)
const value = myUtilLib.add(4,2);
const value1 = myUtilLib.substract(5, 6);
const value2 = myUtilLib.multiply(2, 15);
const value3 = myUtilLib.division(100, 25);
const value4 = myUtilLib.obj;

console.log(value);
console.log(value1);
console.log(value2);
console.log(value3);
console.log(value4);