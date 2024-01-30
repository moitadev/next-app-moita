import type { Metadata } from 'next';
import PPNeueMontreal from 'next/font/local';
import { ThemeProvider } from '@/context/ThemeContext';

const neueMontreal = PPNeueMontreal({
  src: [
    {
      path: '../assets/PPNeueMontreal-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/PPNeueMontreal-Medium.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/PPNeueMontreal-Bold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
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
    <body className={neueMontreal.className}>
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
