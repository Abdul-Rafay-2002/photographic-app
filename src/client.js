import { createClient } from '@sanity/client'
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: '4f9mo8p1',
    dataset: 'production',
    apiVersion: '2023-04-06',
    useCdn: true,
    token: process.env.SANITY_CLIENT_API,
})

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source); 