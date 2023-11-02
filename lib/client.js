import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { UseNextSanityImageBuilder } from 'next-sanity-image'
import { useNextSanityImage } from 'next-sanity-image'
// console.log('sanityClient', process.env.NEXT_PUCLIC_SANITY_TOKEN)

export const client = createClient({
    projectId: 'slcfmarb',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-10-31',
    // token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  
  })

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
