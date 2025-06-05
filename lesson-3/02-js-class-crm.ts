class Customer {
    id: string;
    name: string;
    email: string;
    phone: string;

    constructor(
        id: string,
        name: string,
        email: string,
        phone: string) {

        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    displayInfo() {
        console.log(`
- Your ID: ${this.id}
- Your Name: ${this.name} 
- Your Email: ${this.email} 
- Your Phone: ${this.phone}
`);

    }

    updateEmail(newEmail?: string) {
        if (newEmail) {
            this.email = newEmail
        }
    }
    
};

let cus_01 = new Customer("1", "Dat", "123@gmail.com", "0011");
cus_01.updateEmail("yolo@yahoo.com");
cus_01.displayInfo();