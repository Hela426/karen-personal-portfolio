import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Manrope,
} from "next/font/google";

import Providers from "./components/providers";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CatCompanion from "./components/cat-companion";

import "devicon/devicon.min.css";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Karen — Personal Portfolio",
    template: "%s | Karen Portfolio",
  },
  description:
    "Personal portfolio of Karen, frontend developer and creative web designer.",
  applicationName: "Karen Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${cormorant.variable} ${manrope.variable}`}
    >
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <CatCompanion />
        </Providers>
      </body>
    </html>
  );
}