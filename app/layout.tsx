import type React from "react";
import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Germania_One,
  Oswald,
  Bebas_Neue,
} from "next/font/google";

import "./globals.css";
import { SEO } from "./constants";

import { Navbar } from "@/components/navbar";
import { BackgroundPattern } from "@/components/background-pattern";
import { ThemeScript, AfterHydration } from "@/components/theme";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
const germaniaOne = Germania_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-germania",
});
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  ...SEO,
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`min-h-screen font-sans antialiased overflow-y-auto ${geist.variable} ${geistMono.variable} ${germaniaOne.variable} ${oswald.variable} ${bebasNeue.variable}`}
      >
        <AfterHydration />
        <BackgroundPattern />
        <Navbar />
        <main className="pt-14">{children}</main>
      </body>
    </html>
  );
}
