import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css"; // Karena sekarang globals.css sudah di folder yang sama dengan layout.tsx

// Setup font Playfair untuk Judul
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  style: ['italic', 'normal'],
  weight: ['400', '700']
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#8b7355',
};

export const metadata = {
  title: 'Undangan Pernikahan Kevin & Wulan',
  description: 'Digital Wedding Invitation of Kevin & Wulan',
  appleMobileWebAppCapable: 'yes',
  appleMobileWebAppStatusBarStyle: 'black-translucent',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${playfair.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}