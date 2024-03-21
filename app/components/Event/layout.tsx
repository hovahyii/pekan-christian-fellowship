import { Metadata } from 'next'
const defaultImageUrl = 'https://media.swncdn.com/cms/CW/faith/47910-church-fellowship-1200.1200w.tn.jpg'; // Replace with your default image URL

export const metadata: Metadata = {
  title: {
    template: '%s | Events',
    default: 'Events', // a default is required when creating a template
    
  },
  description: 'Checkout our latest events, see you there.',
  openGraph: {
    images: defaultImageUrl,
  },

}

export default function Page() {}
