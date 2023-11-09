import React from 'react'
import { Banners } from '@/franxxstore/types'
import Link from 'next/link'
import { urlFor } from '@/lib/client'

const FooterBanner = ({ bannerData }: { bannerData: Banners }) => {
    const divStyle = {
        backgroundImage: `url(${urlFor(bannerData.image).width(700).url()})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // borderRadius: '10px',
    };
    return (
        <div className='footer-banner-container relative' style={divStyle}>
            <div className="absolute inset-0 bg-black opacity-70 "></div>
            <div className="banner-desc relative z-10">
                <div className="left">
                    <p>{bannerData.discount}</p>
                    <h3>{bannerData.largeText1}</h3>
                    <h3>{bannerData.largeText2}</h3>
                    <p>{bannerData.saleTime}</p>
                </div>
                <div className="right">
                    <p>{bannerData.smallText}</p>
                    <h3>{bannerData.midText}</h3>
                    <p className=''>{bannerData.desc}</p>
                    <Link href={`product/${bannerData.product}`}>
                        <button type='button' >{bannerData.buttonText}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FooterBanner