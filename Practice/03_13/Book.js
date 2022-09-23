/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Book {
  constructor (
	title,
	pageCount,
	chapterCount,
	currentPage
  ) {
    // Define properties:
	this.title = title;
	this.pageCount = pageCount;
	this.chapterCount = chapterCount;
	this.currentPage = currentPage;
  }
	// Add methods like normal functions:
	reverseTitle(title) {
		let splitTitle = title.split("");
		let reversedSplit = splitTitle.reverse();
		let joinedArray = reversedSplit.join("");
		return joinedArray;
	}
}

export default Book;

