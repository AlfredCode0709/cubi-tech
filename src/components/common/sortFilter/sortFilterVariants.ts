export interface SortFilterConfig {
  label: string;
  id: keyof SortFilterState;
  size: number;
  options?: { value: string; label: string }[];
  dynamic?: boolean;
}

export interface SortFilterState {
  sortBy: string;
  price: string;
  cuisine: string;
  dietaryChoice: string;
  group: string;
  shippingFrom: string;
  shippingOption: string;
}

export const sortFilterVariant1 = (): SortFilterConfig[] => [
  {
    label: "Sort by",
    id: "sortBy",
    size: 2,
    options: [
      { value: "preparationTime", label: "Preparation Time" },
      { value: "distance", label: "Distance" },
    ],
  },
  {
    label: "Price",
    id: "price",
    size: 2,
    options: [
      { value: "0to10", label: "$0 - $10" },
      { value: "10to20", label: "$10 - $20" },
      { value: "above20", label: "$20+" },
    ],
  },
  {
    label: "Cuisine",
    id: "cuisine",
    size: 2,
    dynamic: true,
  },
  {
    label: "Dietary Choice",
    id: "dietaryChoice",
    size: 2,
    options: [
      { value: "halal", label: "Halal" },
      { value: "healthierChoice", label: "Healthier Choice" },
      { value: "vegetarian", label: "Vegetarian" },
    ],
  },
];

export const sortFilterVariant2 = (): SortFilterConfig[] => [
  {
    label: "Sort by",
    id: "sortBy",
    size: 2,
    options: [
      { value: "bestMatch", label: "Best Match" },
      { value: "lowToHighPrice", label: "Low to High Price" },
      { value: "highToLowPrice", label: "High to Low Price" },
    ],
  },
  {
    label: "Group",
    id: "group",
    size: 2,
    dynamic: true,
  },
  {
    label: "Shipping From",
    id: "shippingFrom",
    size: 2,
    options: [
      { value: "Singapore", label: "Singapore" },
      { value: "Malaysia", label: "Malaysia" },
      { value: "Indonesia", label: "Indonesia" },
      { value: "Vietnam", label: "Vietnam" },
      { value: "Thailand", label: "Thailand" },
      { value: "Taiwan", label: "Taiwan" },
      { value: "Korea", label: "Korea" },
      { value: "Japan", label: "Japan" },
    ],
  },
  {
    label: "Shipping Option",
    id: "shippingOption",
    size: 2,
    options: [
      { value: "selfCollection", label: "Self Collection" },
      { value: "doorstepDelivery", label: "Doorstep Delivery" },
      { value: "storePickUp", label: "Seller Store Pick Up" },
    ],
  },
];
