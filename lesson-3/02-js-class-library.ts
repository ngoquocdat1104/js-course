class Book {
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
     
}



class Library {
    name: string;
    location: string;
    books: Book[] = [];

    constructor(name: string, location: string, books: Array<string>) {
        this.name = name;
        this.location = location;
        this.books = [];
    }

    addBook(newBook: Book): void {
        this.books.push(newBook);
    }

    findBook() {
        
    }
}