const data = [
  {
    bookName: "Lord of the ring",
    bookDescription: "super livre",
    bookAmount: 2,
    bookCategorie: "fantastique",
    bookGenre: "roman",
  },
  {
    bookName: "Harry Potter",
    bookDescription: "histoire d'un sorcier",
    bookAmount: 0,
    bookCategorie: "fantastique",
    bookGenre: "roman",
  },
];

const dataRental = [
  { rentalDate: new Date(), userId: 1, bookName: "Harry Potter" },
];

class User {
  constructor(id, name, email, password) {
    this.userId = id;
    this.userName = name;
    this.userEmail = email;
    this.userPassword = password;
    this.books = [];
    this.rental = [];
  }
  getBook() {
    data.forEach((element) => {
      let book = new Book(element);

      this.books.push(book);
    });
    return this.books;
  }
  rent(bookName) {
    this.getBook();
    let result = this.books.filter((element) => element.bookName === bookName);
    let selectedBook = result[0];
    selectedBook.rentBook();
  }
  getRental(userId) {
    dataRental.filter((element) => element.userId === this.userId);
  }
}

class Book {
  constructor(book) {
    this.bookName = book.bookName;
    this.bookDescription = book.bookDescription;
    this.bookAmount = book.bookAmount;
    this.bookCategorie = book.bookCategorie;
    this.bookGenre = book.bookGenre;
  }

  showTitle() {
    return `Le titre du livre est ${this.bookName}`;
  }

  rentBook() {
    if (this.bookAmount === 0) {
      console.log(`${this.bookName} n'est plus en stock`);
    }
    this.bookAmount = this.bookAmount - 1;
  }
}
class Rental {
  rentalDate;
  constructor(userId, bookName) {
    this.userId = userId;
    this.bookName = bookName;
  }
  addRental() {
    this.rentalDate = new Date();
  }
}

let clement = new User(1, "Clement", "Clement@gmail.com", "tutu");

clement.rent("Harry Potter");
