import { Products } from '@/franxxstore/types'
import { Product, HeroBanner, FooterBanner } from '../components'
import { client } from '../lib/client'

export async function ProductIndex() {
  const products = await client.fetch<Products[]>(`*[_type == "product"]`)


  return (
    <ul>
      {products.map((product) => (
        <li key={product._id}>
          <a href={product?.slug.current}>{product?.name}</a>
          <p>{product.price}</p>
        </li>
      ))}
    </ul>
  )
}

export default function Home() {
  return (
    <>
      <HeroBanner />
      {/* <GetProducts /> */}

      <div className="products-heading">
        <h2>Best Selling</h2>
        <p>FRANXXフランクス</p>
      </div>

      {/* <Product products={undefined} /> */}
      <ProductIndex />
      <FooterBanner />
    </>
  )
}

