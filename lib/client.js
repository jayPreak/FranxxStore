import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
// console.log('sanityClient', process.env.NEXT_PUCLIC_SANITY_TOKEN)

export const client = sanityClient({
    projectId: 'slcfmarb',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-10-31',
    token: process.env.NEXT_PUCLIC_SANITY_TOKEN,

})