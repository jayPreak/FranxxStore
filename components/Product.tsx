import React from 'react';
import { client } from '@/lib/client';
import { Products } from '@/franxxstore/types';
import { GetStaticProps } from 'next';

async function Product() {
    const products = await client.fetch<Products[]>(`*[_type == "product"]`);
    // console.log(products)
    return (
        <ul>
            {products.map((product) => (
                <li key={product._id}>
                    <a href={product?.slug.current}>{product?.name}</a>
                    <p>{product.price}</p>
                </li>
            ))}
        </ul>
    );
}

export default Product;
