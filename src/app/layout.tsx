import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const description =
  "Dealora is a deal discovery and comparison platform that aggregates offers from multiple online merchants.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dealora.app"),
  title: "Dealora — Deal Discovery & Price Comparison",
  description,
  openGraph: {
    title: "Dealora — Deal Discovery & Price Comparison",
    description,
    url: "https://dealora.app",
    siteName: "Dealora",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
