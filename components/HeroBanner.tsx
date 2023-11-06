import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/lib/client'
import { Banners } from '@/franxxstore/types';

async function HeroBanner() {
    const posts = await client.fetch<Banners[]>(`*[_type == "banner"]`);
    // console.log(posts)
    return (
        <div className='hero-banner-container'>


            <div>
                <p className='beats-solo'>small Text</p>
                <h3>mid text</h3>



                <div>
                    <Link
                        href='/product/ID'
                        passHref
                    // className='flex'
                    >
                        <button type='button'>button</button>
                    </Link>

                    <div className="desc">
                        <h5>Description</h5>
                        <p>description</p>
                    </div>

                </div>

            </div>

        </div>
    )
}


export default HeroBanner