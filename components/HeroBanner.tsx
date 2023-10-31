import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroBanner = () => {
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