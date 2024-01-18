/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', "source.unsplash.com"],
    },
    env: {
        API_BASE_URL_DEV: 'https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/',
        BEARER_TOKEN: 'Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
       
    },
}

module.exports = nextConfig
