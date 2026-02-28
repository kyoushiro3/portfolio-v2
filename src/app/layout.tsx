import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav";
import Footer from "@/components/footer";
import Loader from "@/components/loader";
import ScreenReveal from "@/components/loader";
import LoaderWrapper from "@/components/loader/loader-wrapper";
import CustomCursor from "@/components/animations/customCursor";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  weight: "400",
  variable: "--font-sora",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Kim Darren | Hire Me",
  description: "Kim Darren's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.className} antialiased`}
                // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <LoaderWrapper/> */}
        {/* <CustomCursor/> */}
        <NavBar/>
        {children}
        <Footer/>
        <Analytics/>
      </body>
    </html>
  );
}
