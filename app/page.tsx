
export default function Home() {
  return (
    <>
      Banner

      <div className="products-heading">
        <h2>Best Selling</h2>
        <p>FRANXXフランクス</p>
      </div>

      <div>
        {['Prod 1', 'Prod 2', 'Prod 3'].map(
          (prod, key) => <p key={key}>{prod}</p>
        )}
      </div>

      Footer
    </>
  )
}
