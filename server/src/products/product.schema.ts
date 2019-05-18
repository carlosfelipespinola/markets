import * as mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
    quantity: {type: Number, required: true},
    unit: {
        type: String,
        required: [true, 'é necessário definir uma unidade de medida'],
        enum: ['kg', 'l', 'unit']
    }
});

export const ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'nome é obrigatório para o produto']},
    category: {type: String, required: [true, 'é necessário estabelecer uma categoria para o produto']},
    stock: stockSchema,
    price: {type: Number, required: [true, 'é necessário definir um preço para o produto']},
    images: Array
}, {timestamps: true});

