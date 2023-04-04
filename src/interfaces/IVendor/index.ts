import { Document, Types } from "mongoose";

// Define the Vendor interface by extending the Mongoose Document interface
export interface IVendor extends Document {
  // The ID of the user associated with the vendor (required)
  user: Types.ObjectId;
  // The name of the vendor (required, unique)
  vendorName: string;
  // The contact email address for the vendor (optional)
  contactEmail?: string;
  // The phone number for the vendor (optional)
  phoneNumber?: string;
  // An array of vendor product IDs associated with the vendor (optional)
  vendorProducts?: Types.ObjectId[];
  // The ID of the vendor bank account associated with the vendor (optional)
  vendorBankAccount?: Types.ObjectId;
  // The vendor's balance (required)
  balance: number;
}
