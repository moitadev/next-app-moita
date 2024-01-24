import type { Metadata } from 'next';
import { Sarabun } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';

const sarabun = Sarabun({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'moita · web developer',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={sarabun.className}>
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
