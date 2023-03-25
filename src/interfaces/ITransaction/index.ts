import { Buyer } from "../IBuyer";
import { Sell } from "../ISeller";

export interface Transaction {
  sell: Sell;
  buyer: Buyer;
  status: TransactionStatus;
  data: string;
}
export enum TransactionStatus {
  ACTIVE = "ACTIVE",
  IN_ACTIVE = "IN_ACTIVE",
  AWAIT_PAYMENT = "AWAIT_PAYMENT",
  UNDER_REVIEW = "UNDER_REVIEW",
}
