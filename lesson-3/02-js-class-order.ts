class Item {
    name: string;
    price: number;
    amount: number;
    discount: number;

    constructor(name: string, price: number, amount: number, discount: number) {
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.discount = discount
    }

    getTotal(): number {
        return this.price * this.amount * (1 - this.discount/100)
    }
}

class Order {
    orderId: string;
    customerName: string;
    items: Item[];
    totalAmount: number;

    constructor(
        orderId: string,
        customerName: string,
        items: Item[] = []
    ) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = items;
        this.totalAmount = this.calculateTotal();
    };

    addItem(newItem: Item): void  {
        this.items.push(newItem);
        this.totalAmount = this.calculateTotal();
        
    };

    calculateTotal(): number {
        return this.items.reduce((sum, item) => sum + item.getTotal(), 0);
    }

    displayOrder(): void {
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Customer: ${this.customerName}`);
        console.log("Items:");
        this.items.forEach((item, index) => {
            console.log(
                `${index + 1}. ${item.name}: ${item.amount} x ${item.price} (-${item.discount}%) = ${item.getTotal()}`
            );
        });
        console.log(`Total Amount: ${this.totalAmount}`);
    }
}



const item1 = new Item("Laptop", 1000, 1, 10); // 10% discount
const item2 = new Item("Phone", 500, 2, 5); // 5% discount
const item3 = new Item("WC", 1200, 2, 12); // 5% discount

const order = new Order("1", "Nguyễn Văn A", [item1, item2]);
order.displayOrder();


order.addItem(item3);
order.displayOrder();