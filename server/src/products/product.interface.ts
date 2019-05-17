import { Document } from 'mongoose';

export default interface Product extends Document {
    name: string;
    stock: number;
}
