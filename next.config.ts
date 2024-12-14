import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    sassOptions: {
        includePaths: ['src/assets/styles'],
    },
    redirects: async () => {
        return [
            {
                source: '/bandcamp',
                destination: 'https://loafymage.bandcamp.com',
                permanent: false,
            },
            {
                source: '/github',
                destination: 'https://github.com/nullgato',
                permanent: false,
            },
            {
                source: '/facebook',
                destination: 'https://www.facebook.com/loafymage',
                permanent: false,
            },
            {
                source: '/instagram',
                destination: 'https://instagram.com/loafymage',
                permanent: false,
            },
            {
                source: '/ko-fi',
                destination: 'https://ko-fi.com/loafymage',
                permanent: false,
            },
            {
                source: '/soundcloud',
                destination: 'https://soundcloud.com/loafymage',
                permanent: false,
            },
            {
                source: '/threads',
                destination: 'https://threads.net/@loafymage',
                permanent: false,
            },
            {
                source: '/tiktok',
                destination: 'https://www.tiktok.com/@loafymage',
                permanent: false,
            },
            {
                source: '/twitch',
                destination: 'https://twitch.com/nullmoggi',
                permanent: false,
            },
            {
                source: '/youtube',
                destination: 'https://youtube.com/@BR4TC4T',
                permanent: false,
            },
        ]
    },
}

export default nextConfig
