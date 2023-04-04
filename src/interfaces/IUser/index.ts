import { Document, Types } from "mongoose";

// Define the User interface by extending the Mongoose Document interface
export interface IUser extends Document {
  // The user's email address (required)
  email: string;
  // The user's password (required)
  password: string;
  // The user's first name (optional)
  firstName?: string;
  // The user's last name (optional)
  lastName?: string;
  // The user's roles (optional, defaults to 'user')
  roles?: ("user" | "admin" | "vendor")[];
  // The ID of the vendor associated with the user (optional)
  vendor?: Types.ObjectId;
  // An array of order IDs associated with the user (optional)
  orders?: Types.ObjectId[];
}
