import { Product } from "../IProduct";
import { UserAccount } from "../IUserAccount";

export interface Seller {
  userAccount: UserAccount;
  sells: Sell[];
}

export interface Sell {
  seller: Seller;
  product: Product;
  price: number;
}
