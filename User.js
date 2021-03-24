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

class User {
  constructor(id, name, email, password) {
    this.userId = id;
    this.userName = name;
    this.userEmail = email;
    this.userPassword = password;
    this.books = [];
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
    console.log(this.bookAmount, "AMOUNT");
    this.bookAmount = this.bookAmount - 1;
    console.log(this.bookAmount, "AMOUNT2");
    console.log(this, "THIS");
  }
}

let clement = new User(1, "Clement", "Clement@gmail.com", "tutu");

clement.rent("Lord of the ring");
