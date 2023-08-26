import { StaticImageData } from "next/image";

export type Productdetail = {
  id: string | number ;
  name: string;
  category ? : string;
  price: number;
  image?: string | StaticImageData;
};
