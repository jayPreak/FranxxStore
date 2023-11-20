import React from 'react';
import { urlFor } from '@/lib/client';
import { Products } from '@/franxxstore/types';
import Link from 'next/link';

async function Product({ product }: { product: Products }) {
    const u = urlFor(product.image[0]).url() || '';
    return (
        <Link href={`product/${product.slug.current}`}>
            <div className="product-card h-auto">
                <img
                    src={u}
                    alt={product.name}
                    className='product-image p-4 h-[500px] max-w-full'
                />
                <p className="product-name">{product.name}</p>
                <p className="product-price">Rs. {product.price}</p>
            </div>
        </Link>
    );
}

export default Product;
