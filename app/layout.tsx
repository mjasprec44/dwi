import type { Metadata } from "next";
import { Geist, Cormorant_Garamond, Mea_Culpa } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const meaCulpa = Mea_Culpa({
  variable: "--font-mea-culpa",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ron & Pam",
  description: "Ron & Pam Wedding Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/ron-pam-book-cover.png"
          as="image"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${geistSans.variable} ${cormorant.variable} ${meaCulpa.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
