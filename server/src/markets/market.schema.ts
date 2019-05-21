import * as mongoose from 'mongoose';

const AdressSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  }
});

export const MarketSchema = new mongoose.Schema({
  emailLogin: {
    type: String,
    required: [true, 'é necessário cadastrar um email para login']
  },
  password: {
    type: String,
    required: [true, 'é necessário cadastrar uma senha'],
  },
  tradingName: {
    type: String,
    required: [true, 'é obrigatório o cadastro de um nome fantasia']
  },
  companyName: {
    type: String,
    required: [true, 'é obrigatório o cadastro de um nome fantasia']
  },
  companyIdentificationNumber: {
    type: String,
    required: [true, 'é obrigatório o cadastro de um cnpj']
  },
  commercialPhone: String,
  commercialEmail: String,
  logoUrl: String,
  adress: AdressSchema
});
