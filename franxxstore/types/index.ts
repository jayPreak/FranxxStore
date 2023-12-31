import { PortableTextBlock } from "sanity";

export type Products = {
  _id: string,
  name: string,
  _rev: string,
  _type: string,
  _createdAt: string,
  _updatedAt: string,
  price: number,
  image: any,
  details: string,
  slug: {
    current: string
  }
};

export type Banners = {
  _id: string,
  name: string,
  image: {
    alt: string,
    image: string
  },
  slug: {
    current: string
  }
  buttonText: string,
  product: string,
  smallText: string,
  largeText1: string,
  largeText2: string,
  saleTime: string,
  discount: string,
  midText: string,
  desc: string,
};

