import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.scss';
import { Header } from './components/common/Header/index';
const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Главная',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
