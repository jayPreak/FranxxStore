import { Product, HeroBanner, FooterBanner } from '../components'

export default function Home() {
  return (
    <>
      <HeroBanner />

      <div className="products-heading">
        <h2>Best Selling</h2>
        <p>FRANXXフランクス</p>
      </div>

      <div className="products-container">
        {['Prod 1', 'Prod 2', 'Prod 3'].map(
          (prod, key) => <p key={key}>{prod}</p>
        )}
      </div>

      <FooterBanner />
    </>
  )
}
