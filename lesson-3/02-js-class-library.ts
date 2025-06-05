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
    books: Book[];

    constructor(name: string, location: string) {
        this.name = name;
        this.location = location;
        this.books = [];
    }

    addBook(newBook: Book): void {
        this.books.push(newBook);
        console.log(`Đã thêm "${newBook.title}" vào ${this.name}`);
    }

    findBook(title: string): Book | void {
        const foundBook = this.books.find(i => i.title.toLowerCase() === title.toLowerCase());
        if (foundBook) {
            return console.log(`At ${this.name}: "${foundBook.title}" của tác giả ${foundBook.author}.`);
        } else {
            return console.log(`At ${this.name}: Sách không tìm thấy.`);
        };
    }
}

const lib_hcm = new Library("Thu vien HCM", "HCM");
const lib_hn = new Library("Thu vien HN", "HN");

const book1 = new Book("Sach 1","Jane", 2000);
const book2 = new Book("Toan lop 12", "NXB HH", 2019);
const book3 = new Book("Toan lop 11", "NXB HH", 2019);

lib_hcm.addBook(book1);
lib_hcm.addBook(book2);
lib_hn.addBook(book3);
lib_hn.addBook(book1);

lib_hcm.findBook("sach 1");
lib_hn.findBook("toan lop 12");