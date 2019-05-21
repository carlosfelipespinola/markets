import { Document } from 'mongoose';

export default interface Market extends Document {
    loginEmail: string;
    password: string;
    tradingName: string;
    companyName: string;
    companyIdentificationNumber: string;
    commercialPhone: string;
    commercialEmail: string;
}
