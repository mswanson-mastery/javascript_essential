/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Yeti from './Yeti.js';

const myYeti = new Yeti (
    "matt's yeti",  
    100, 
    10, 
    true,
    5, 
    0,
    false
);

console.log(myYeti);