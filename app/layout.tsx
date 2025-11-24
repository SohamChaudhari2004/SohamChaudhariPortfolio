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
  title: "SOHAM CHAUDHARI | Portfolio",
  description: "A modern, minimal portfolio showcasing creative work and services.",
};

import SmokeBackground from "@/components/ui/SmokeBackground";
import SplashCursor from "@/components/ui/SplashCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <SmokeBackground />
        <SplashCursor />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
