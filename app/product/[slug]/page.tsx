import { client, urlFor } from '@/lib/client'
import { getStaticPaths, getStaticProps } from 'next/dist/build/templates/pages'
import React from 'react'

async function getData({ params: { slug } }: { params: { slug: string } }) {
    const product = await client.fetch(`*[_type == "product" && slug.current == '${slug}']`);
    const products = await client.fetch(`*[_type == "product"]`);

    return {
        props: { products, product },
        revalidate: 10,
    }
}

export default async function page({ params: { slug } }: { params: { slug: string } }) {
    const { props } = await getData({ params: { slug } })
    const { products, product } = props
    console.log(product[0].name)

    // const u = urlFor(product.image).url() || '';
    return (
        <div>
            <div className="product-detail-container">
                <div>
                    {product[0].name}
                    <div className="image-container">
                        <img src='' />
                    </div>
                </div>
            </div>
        </div>
    )
}


// export default page