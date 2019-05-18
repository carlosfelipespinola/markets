import { Document } from 'mongoose';

export default interface Market extends Document {
    tradingName: string;
    companyName: string;
    companyIdentificationNumber: string;
    commercialPhone: string;
    commercialEmail: string;
}
