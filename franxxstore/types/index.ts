import { PortableTextBlock } from "sanity";

export type Products = {
  _id: string,
  name: string,
  price: number,
  image: {
    alt: string,
    image: string
  },
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
};
