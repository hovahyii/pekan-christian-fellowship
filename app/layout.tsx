import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  applicationName: 'Pekan Chrisitian Community',
  referrer: 'origin-when-cross-origin',
  keywords: ['PCC', 'Pekan Chrisitian Community', 'Pekan Christian', 'Christian in Pekan'],
  authors: [{ name: 'Hovah', url: 'https://hovahyii.vercel.app/'}],
  creator: 'Hovah Yii',
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
