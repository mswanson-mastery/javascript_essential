/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Book from './Book.js';

const myBook = new Book (
	'matt and the yellow marker',
	100,
	2,
	34
);

console.log(myBook.reverseTitle(myBook.title));


console.log('hello, world');

