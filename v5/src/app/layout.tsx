import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from '../components/Nav';
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PerSIsst Labs",
  description: "The Pervasive Sensing & Intelligent Assistive Systems (PerSIsst) Lab develops intelligent, assistive solutions using advanced sensing to address challenges in cognition and smart living.",
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
        <div className="relative w-full flex items-center"><Nav /></div>
        
        {children}
        <Footer />
        
      </body>
      
    </html>
  );
}

//  Readonly<{ children: React.ReactNode;}> typescript stuff type defien
// not allow faltu components