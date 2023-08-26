import { type SchemaTypeDefinition } from "sanity";

const products = {
  name: "Shirts",
  title: "Products",
  type: "document",
  price: 200,
  fields: [
    {
      id: "1",
      name: "Blackshirt",
      title: "Brushed Reaglan Sweat shirt",
      type: "string",
      price: 200,
    },

    { name: "shirt", title: "Shirt discription", type: "string" },

    { name: "image", title: "product Image", type: "image" },

    {
      name: "price",
      price: "200",
      type: "number",
    },
    {
      name: "priceLink",
      title: "Stripe Price",
      type: "string",
    },
  ],
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products],
};
