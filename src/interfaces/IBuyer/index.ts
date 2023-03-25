import { Product } from "../IProduct";
import { Sell } from "../ISeller";
import { Transaction } from "../ITransaction";
import { UserAccount } from "../IUserAccount";

export interface Buyer {
  userAccount: UserAccount;
  transactions?: Transaction[] | null;
  wishList?: Product[];
  shopCart: Sell[];
}
