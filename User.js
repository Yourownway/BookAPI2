const data = [
  {
    bookName: "Lord of the ring",
    bookDescription: "super livre",
    bookAmount: 2,
    bookCategorie: "aventure fantastique",
    bookGenre: "roman",
  },
  {
    bookName: "Harry Potter",
    bookDescription: "histoire d'un sorcier",
    bookAmount: 0,
    bookCategorie: "aventure fantastique",
    bookGenre: "roman",
  },
];

const dataRental = [
  { rentalId: 1, rentalDate: new Date(), userId: 1, bookName: "Harry Potter" },
];

const dataCategorie = [
  { categorieId: 1, categorieName: "aventure" },
  { categorieId: 2, categorieName: "fantastique" },
];
const dataGenre = [
  { genreId: 1, genreName: "roman" },
  { genreId: 2, genreName: "poésie" },
];

class User {
  constructor(id, name, email, password) {
    this.userId = id;
    this.userName = name;
    this.userEmail = email;
    this.userPassword = password;
    this.books = [];
    this.rentals = [];
  }
  getBook() {
    data.forEach((element) => {
      let book = new Book(element);

      this.books.push(book);
    });
    return this.books;
  }
  rent(bookName) {
    //louer un livre
    this.getBook();
    let result = this.books.filter((element) => element.bookName === bookName);
    let selectedBook = result[0];
    selectedBook.rentBook();
    let rental = new Rental(this.userId, selectedBook.bookName);
    rental.addRental(rental);
  }
  getRental() {
    //obtenir le tableu des location de l'utilisateur

    let result = dataRental.filter((element) => element.userId === this.userId);

    this.rentals.push(...result);
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
  addBook(book) {
    data.push(book);
  }
}
class Rental {
  rentalDate = new Date();
  constructor(userId, bookName) {
    this.userId = userId;
    this.bookName = bookName;
  }
  addRental(rental) {
    return dataRental.push(rental);
  }
}

class Admin extends User {
  constructor(id, name, email, password, role = "Admin") {
    super(id, name, email, password);
    this.adminRole = role;
  }
  createBook(book) {
    let newBook = new Book(book);
    newBook.addBook(newBook);
  }
  deleteBook(name) {
    let indexToDelete = data.findIndex((element) => element.bookName === name);
    data.splice(indexToDelete, 1);
  }
  editBook(modifiedBook) {
    let indexToEdit, editBook;
    data.forEach((element, index) => {
      if (element.bookName === modifiedBook.bookName) {
        indexToEdit = index;
        for (const property in element) {
          if (element[property] !== modifiedBook[property]) {
            element[property] = modifiedBook[property];
          }
        }
      }
    });
  }
}
let clement = new User(1, "Clement", "Clement@gmail.com", "tutu");
let Yoram = new Admin(2, "Yoram", "Yoram@gmail.com", "tutu");
Yoram.createBook({
  bookName: "Les misérables",
  bookDescription: "super cool",
  bookAmount: 3,
  bookCategorie: "fantastique",
  bookGenre: "roman",
});
console.log("Data", data);
Yoram.editBook({
  bookName: "Harry Potter",
  bookDescription: "histoire d'amour",
  bookAmount: 0,
  bookCategorie: "aventure fantastique",
  bookGenre: "roman",
});
console.log("EDITDATA", data);
//Yoram.deleteBook("Harry Potter");
//clement.rent("Lord of the ring");

//clement.getRental();
