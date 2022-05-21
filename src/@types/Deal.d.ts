//address from;
// uint256 timestamp;
// uint256 price;
// string email;
// string description;
// string imageUrl;

export interface Deal {
  address: string;
  timestamp: number;
  id: number,
  price: number;
  email: string;
  item: string;
  description: string;
  imageUrl: string;
}
