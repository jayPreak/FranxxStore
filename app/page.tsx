export const revalidate = 10
import { Banners, Products } from '@/franxxstore/types'
import { Product, HeroBanner, FooterBanner } from '../components'
import { client } from '../lib/client'
import { Key } from 'react';

async function getData() {
  const banners = await client.fetch(`*[_type == "banner"]`);
  const products = await client.fetch(`*[_type == "product"]`);

  return {
    props: { products, banners },
    revalidate: 10,
  }
}

export default async function Home() {
  const { props } = await getData()
  const { products, banners } = props

  return (
    <>
      <HeroBanner bannerData={banners.length && banners[1]} />

      <div className="products-heading">
        <h2>Best Selling</h2>
        <p>FRANXXフランクス</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 px-16'>
        {products.map((product: Products, id: Key | null | undefined) => (
          <Product key={id} product={product} />
        ))}
      </div>
      <FooterBanner bannerData={banners.length && banners[0]} />
    </>
  )
}


