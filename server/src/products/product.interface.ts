import { Document } from 'mongoose';

interface Stock {
    quantity: number;
    unit: string;
}

export default interface Product extends Document {
    name: string;
    stock: Stock;
    price: number;
    images: Array<string>;
}
