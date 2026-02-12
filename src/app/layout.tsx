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
  metadataBase: new URL("https://dealoraapp.com"),
  title: "Dealora — Deal Discovery & Price Comparison",
  description,
  verification: {
    other: {
      verification: "30c3660d755f908546bd31be81fbc80e"
    }
  },
  openGraph: {
    title: "Dealora — Deal Discovery & Price Comparison",
    description,
    url: "https://dealoraapp.com",
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

