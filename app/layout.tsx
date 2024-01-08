import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The First application i wrote with next Js.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Toaster } from '@/components/ui/sonner';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
