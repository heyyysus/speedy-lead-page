import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./Header";
import Reviews from "../data/reviews.json"
import { InfoSection1, InfoSection2 } from "./InfoSections";
import { CEOSection } from "./CEOSection";

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

export interface ReviewBoxProps {
    title: string,
    content: string,
    name: string,
    href: string,
};

export const Star = () => {
    return (
        <svg className="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
    );
}

export const ReviewBox = ({ title, content, name, href }: ReviewBoxProps) => {
    return(
        <div className="mx-10 my-5 min-w-[200px] md:min-w-[400px] rounded-sm border-slate-400 border border-solid p-4 flex flex-col align-center">
            <a href={href} target="_blank">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row text-yellow-500">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
            <Image  src="/google_icon.png" alt="Google Review" width={50} height={50} />
            </div>
            
            <h1 className="text-lg md:text-xl font-bold my-2">{title}</h1>
            <p className="text-slate-500 w-5/6 md:w-[400px] text-sm md:text-base">{content}</p>
            <p className="flex flex-row items-center text-base font-semibold mt-2">
                - {name}
            </p>
            </a>
        </div>
    );
}

export const ReviewsComponent = () => {
  return (
    <div className="py-20 w-screen bg-white mt-5 md:mt-10 flex flex-col items-center justify-items-center place-content-center">
      <h1 className="text-nowrap mb-10 text-xl md:text-3xl font-bold">What Our Clients Think About Us</h1>
      
      <div className="w-full overflow-hidden hidden md:block">
        <div className="flex flex-row animate-marquee">
          {[...Reviews.reviews, ...Reviews.reviews].map((r, i) => (
            <div key={i} className="mx-4 flex-shrink-0">
              <ReviewBox title={r.title} content={r.content} name={r.name} href={r.href} />
            </div>
          ))}
        </div>
      </div>
        

      <div className="flex flex-col md:hidden items-center justify-center">
        {Reviews.reviews.map((r, i) => <ReviewBox key={i} title={r.title} content={r.content} name={r.name} href={r.href} />)}
      </div>
      
    </div>
    
  );
}

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
        
        <Header />

        {children}

        <ReviewsComponent />

        <InfoSection1 />

        <InfoSection2 />

        <CEOSection />

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
