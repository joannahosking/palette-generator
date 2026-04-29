import type { Metadata } from "next";
import Script from 'next/script';
import { Familjen_Grotesk } from "next/font/google";
import "./globals.css";

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata = {
  title: "Hue Shift Palette Tool for Pixel Art",
  description:
    "Generate hue shifted palettes for pixel art instantly. Create primary, complementary, and triadic color schemes with adjustable hue shift.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${familjen.className}`}>
      <body>
        <div className="container">
          {children}
          <footer className="copyright">
            <p>
              &copy; {new Date().getFullYear()}
            </p>
          </footer>
        </div>
        <Script data-goatcounter="https://joannahosking.goatcounter.com/count"
        async src="//gc.zgo.at/count.js" />
      </body>
    </html>
  );
}
