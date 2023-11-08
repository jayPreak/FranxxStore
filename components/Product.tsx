import React from 'react';
import { urlFor } from '@/lib/client';
import { Products } from '@/franxxstore/types';
import Link from 'next/link';

async function Product({ product }: { product: Products }) {
    console.log('hii', urlFor(product.image).url())
    return (
        <div className='flex justify-center'>
            <Link href={`product/${product.slug.current}`}>
                <div className="product-card ">
                    {/* <img
                        src={urlFor(product.image[0]).url()}
                        width={250}
                        height={250}
                        alt={product.name}
                        className='product-image'
                    /> */}
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">Rs. {product.price}</p>
                </div>
            </Link>
        </div>
    );
}

export default Product;
