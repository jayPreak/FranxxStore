/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Img from 'next/image'
import Link from 'next/link'
import { Banners } from '../franxxstore/types/index';
import { client, urlFor } from '@/lib/client';
import { useNextSanityImage } from 'next-sanity-image';

const HeroBanner = ({ bannerData }: { bannerData: Banners }) => {
    // console.log(urlFor(bannerData.image))
    const divStyle = {
        backgroundImage: `url(${urlFor(bannerData.image).width(700).url()})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // borderRadius: '10px',
    };
    return (
        <div className='hero-banner-container relative' style={divStyle}>
            <div className="absolute inset-0 bg-black opacity-70 rounded-[15px]"></div>
            <div className="relative z-10">
                <p className='beats-solo text-white'>{bannerData.smallText}</p>
                <h3 className="text-white">{bannerData.midText}</h3>
                <h1>{bannerData.largeText1}</h1>

                <div>
                    <Link href={`/product/${bannerData.product}`} passHref>
                        <button type='button' style={{ fontFamily: "MyFont" }} className='minecraft-btn mx-auto pb-2 w-40 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200'>{bannerData.buttonText}</button>
                    </Link>

                    <div className="desc text-white">
                        <h5>Description</h5>
                        <p>{bannerData.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner