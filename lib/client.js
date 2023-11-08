import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'

export const client = createClient({
    projectId: 'slcfmarb',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2023-10-31',
    // token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  
  })

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
