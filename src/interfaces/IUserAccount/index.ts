import { Buyer } from "../IBuyer";
import { Seller } from "../ISeller";

export interface UserAccount {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  avatar: string | null;
  sellerAccount?: Seller | null;
  buyerAccount?: Buyer | null;
}
