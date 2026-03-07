import type { Metadata } from "next";
import Image from "next/image";
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
  title: "Compare and Save on Auto Insurance",
  description: "Looking for affordable auto insurance in California? Get a quick quote online and see how much you can save.",
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
        <div className="text-base font-sans font-medium bg-red-600 w-full text-white flex flex-row items-center px-5 py-1 relative">
          <div><a href="tel:+19516951500">+1 (951) 695-1500</a></div>
          <div className="absolute left-1/2 -translate-x-1/2"><p>Lic. #0K72267</p></div>
          <div className="ml-auto"><a href="https://maps.app.goo.gl/SixWxgyAGXbkdm3c6" target="_blank">Directions</a></div>
        </div>

        {children}

        <div className="w-full py-20 px-20 text-white bg-slate-600">
          <p>Speedy Insurance Agency</p>
          <p>2995 Van Buren Blvd.</p>
          <p>Riverside, CA 92503</p>
          <p>Tel: +1 (951) 695-1500</p>
          <p>Email: info@speedyins.com</p>
          
          <Image src="/banner.png" alt="Google Review" width={449} height={153} className="mt-10" />
        </div>
      </body>
    </html>
  );
}
