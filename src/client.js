import { createClient } from '@sanity/client'
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: '4f9mo8p1',
    dataset: 'production',
    apiVersion: '2023-04-06',
    useCdn: true,
    token: "skP1lxRbWKRH4AD9rNB4AHBkBkzO0ARa9z5MjPgfcEh3nSpyYv4YNhxuIlX8s01Xn8vcNRyDHcngX21PWqRUn3Viz8Rg0IQUFJ6Gt4xTUuHtBJTtMt6qoPGFYFa071m1lBJtLPTLdXJScOl6yUACa5h9wkqbQDL0O7SunocrEUCxT3fhNww1",
})

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source); 