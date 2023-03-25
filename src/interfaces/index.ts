interface UserAccount {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  avatar?: string;
  sellerAccount?: Seller;
  buyerAccount: Buyer;
}

interface Transaction {
  seller: Sell;
  buyer: Buyer;
  data: Date;
  status: TransactionStatus;
  completedAt?: Date;
}

enum TransactionStatus {
  PENDING = "PENDING",
  DECLINED = "DECLINED",
  COMPLETED = "COMPLETED",
  REFUNDED = "REFUNDED",
  UNDER_REVIEW = "UNDER_REVIEW",
}

interface Seller {
  storeName: string;
  userAccount: UserAccount;
  sells: Sell[];
}

interface Sell {
  seller: Seller;
  product: Product;
  price: number;
  status: SellStatus;
  createdAt: Date;
}

enum SellStatus {
  DRAWN = "DRAWN",
  ACTIVE = "ACTIVE",
  UNDER_REVIEW = "UNDER_REVIEW",
  UNDER_TRANSACTION = "UNDER_TRANSACTION",
}

interface Product {
  name: string;
  longDescription: string;
  shortDescription: string;
  assets: string[];
  videosLink: string[];
  activeSales: Sell[];
  platform: Platforms;
}

enum Platforms {
  PS4 = "PS4",
  PS5 = "PS5",
  PC = "PC",
  NINTENDO = "NINTENDO",
}

interface Buyer {
  userAccount: UserAccount;
  transactions: Transaction[];
  wishList: Product[];
  shopCartList: Sell[];
}

//

// A game review
interface GameReview {
  author: UserAccount;
  game: Product;
  rating: number; // Rating out of 5 stars
  body: string; // The written review text
  helpfulCount: number; // The number of users who found the review helpful
  notHelpfulCount: number; // The number of users who found the review not helpful
}

// A software license key
interface SoftwareLicense {
  software: Product;
  licenseKey: string; // The unique license key for the software
  activationDate: Date; // The date the license was activated
  expirationDate: Date; // The date the license expires
}

// A message between two users
interface Message {
  sender: UserAccount;
  recipient: UserAccount;
  body: string; // The text of the message
  timestamp: Date; // The date and time the message was sent
}

// A game genre
enum GameGenre {
  ACTION = "Action",
  ADVENTURE = "Adventure",
  RPG = "Role-playing game",
  FPS = "First-person shooter",
  SPORTS = "Sports",
  SIMULATION = "Simulation",
  STRATEGY = "Strategy",
  HORROR = "Horror",
  PUZZLE = "Puzzle",
}

// A product tag
enum ProductTag {
  HOT = "Hot", // Indicates a product is popular or trending
  NEW = "New", // Indicates a product is recently added or released
  SALE = "Sale", // Indicates a product is on sale or has a discount
  TOP_RATED = "Top rated", // Indicates a product has received high ratings from users
  RECOMMENDED = "Recommended", // Indicates a product is recommended by the platform based on user preferences
}
