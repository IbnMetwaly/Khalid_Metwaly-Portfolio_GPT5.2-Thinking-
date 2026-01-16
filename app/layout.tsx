import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khalid Metwaly | Educational Leader & Ed-Tech Expert",
  description: "Portfolio of Khalid Metwaly: Strategic Educational Leader, Arabic Language Educator, and Ed-Tech Expert with extensive experience transforming educational experiences through innovation and technology.",
  keywords: ["Educational Leader", "Arabic Language", "Ed-Tech Expert", "Educational Technology", "Digital Literacy"],
  authors: [{ name: "Khalid Metwaly" }],
  openGraph: {
    title: "Khalid Metwaly | Educational Leader & Ed-Tech Expert",
    description: "Strategic Educational Leader transforming education through innovation and technology",
    type: "website",
  },
  icons: {
    icon: '/logo_dark.png',
    shortcut: '/logo_dark.png',
    apple: '/logo_dark.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
