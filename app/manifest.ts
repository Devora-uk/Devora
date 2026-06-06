import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Devora | Business Website Design & Development',
    short_name: 'Devora',
    description: 'Business web design and website development business building bespoke websites from the ground up',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/devora-bw.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/devora-bw.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['business', 'technology', 'productivity'],
    lang: 'en-GB',
    dir: 'ltr',
  }
}
