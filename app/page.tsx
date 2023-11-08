import { Banners, Products } from '@/franxxstore/types'
import { Product, HeroBanner, FooterBanner } from '../components'
import { client } from '../lib/client'

async function getData() {
  const banners = await client.fetch(`*[_type == "banner"]`);
  const products = await client.fetch<Products[]>(`*[_type == "product"]`);

  return {
    props: { products, banners }
  }
}

export default async function Home() {
  const { props } = await getData()
  const { products, banners } = props
  console.log(banners[0])
  return (
    <>
      <HeroBanner bannerData={banners.length && banners[0]} />

      <div className="products-heading">
        <h2>Best Selling</h2>
        <p>FRANXXフランクス</p>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <a href={product?.slug.current}>{product?.name}</a>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
      {/* <Product /> */}
      <FooterBanner />
    </>
  )
}


