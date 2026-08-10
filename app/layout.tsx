import type { Metadata } from "next";
import type { ReactNode } from "react";
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
  title: "Aman Hussain | MERN & WordPress Developer",
  description:
    "Professional portfolio of Aman Hussain, a MERN Stack and WordPress Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
  suppressHydrationWarning
  className={`${geistSans.variable} ${geistMono.variable}`}
>
  {children}
</body>
    </html>
  );
}

