import type { Metadata } from "next";
import localFont from "next/font/local";
import { Raleway, Marcellus, Lato } from "next/font/google";
import "./globals.css";

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

const nourd = localFont({
  src: "./fonts/nourd_bold.ttf",
  variable: "--font-nourd",
  weight: "100 900",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-raleway",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Amparo del Sol",
  description: "Experiencia única en la naturaleza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nourd.variable} ${raleway.variable} ${marcellus.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
