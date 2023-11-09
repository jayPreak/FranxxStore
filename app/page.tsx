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
  console.log(banners)
  return (
    <>
      <HeroBanner bannerData={banners.length && banners[1]} />

      <div className="products-heading">
        <h2>Best Selling</h2>
        <p>FRANXXフランクス</p>
      </div>
      <div className='flex flex-row gap-8 px-16'>
        {products.map((product: Products, id: Key | null | undefined) => (
          <Product key={id} product={product} />
        ))}
      </div>
      {/* <ul>
        {products.map((product) => (
          <li key={product._id}>
            <a href={product?.slug.current}>{product?.name}</a>
            <p>{product.price}</p>
          </li>
        ))}
      </ul> */}
      {/* <Product /> */}
      <FooterBanner bannerData={banners.length && banners[0]} />
    </>
  )
}


