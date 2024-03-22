import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://pekan-christian-community.vercel.app/'),
  applicationName: 'Pekan Chrisitian Community',
  referrer: 'origin-when-cross-origin',
  keywords: ['PCC', 'Pekan Chrisitian Community', 'Pekan Christian', 'Christian in Pekan'],
  authors: [{ name: 'Hovah', url: 'https://hovahyii.vercel.app/'}],
  creator: 'Hovah Yii',
  title: 'Pekan Christian Community',
  description: "Explore upcoming events at Pekan Christian Community. Join us for worship services, Bible studies, community outreach, and fellowship gatherings. Everyone is welcome!",
  openGraph: {
      title: {
        default: 'Pekan Christian Community', // a default is required when creating a template
      },
      description:
      'Established in 2023, Pekan Christian Community is a vibrant community of Christian students united by faith. We are dedicated to connecting, supporting, and growing together in our shared journey with Christ. Join us, regardless of your denomination, and be part of an inclusive and faith-strengthening fellowship.',
      images: ['/logo.png'],
    },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`text-black ${inter.className}`}>{children}</body>
    </html>
  );
}
