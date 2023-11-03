import { Products } from '@/franxxstore/types'
import { Product, HeroBanner, FooterBanner } from '../components'
import { client } from '../lib/client'

export default function Home() {
  return (
    <>
      <HeroBanner />

      <div className="products-heading">
        <h2>Best Selling</h2>
        <p>FRANXXフランクス</p>
      </div>

      <Product />
      <FooterBanner />
    </>
  )
}


