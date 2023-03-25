import { Product } from "../IProduct";
import { UserAccount } from "../IUserAccount";

export interface Seller {
  sellerName: string;
  userAccount: UserAccount;
  sells: Sell[];
}

export interface Sell {
  seller: Seller | string;
  product: Product | string;
  price: number;
}
