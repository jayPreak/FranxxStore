import React from 'react';
import { urlFor } from '@/lib/client';
import { Products } from '@/franxxstore/types';
import Link from 'next/link';

async function Product({ product }: { product: Products }) {
    console.log(product.name)
    const u = urlFor(product.image[0]).url()
    // console.log('hii', urlFor(product.image[0]).url())
    return (
        <div className=''>
            <Link href={`product/${product.slug.current}`}>
                <div className="product-card ">
                    <img
                        src={u}
                        alt={product.name}
                        className='product-image p-4 w-full h-[350px]'
                    />
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">Rs. {product.price}</p>
                </div>
            </Link>
        </div>
    );
}

export default Product;
