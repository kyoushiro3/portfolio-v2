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
  title: "Kim Darren | WebDev & Automations",
  description:
    "I design and develop scalable websites, automation systems, and funnels using modern technologies.",
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon-32x32.png",
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    title: "Kim Darren | WebDev & Automations",
    description:
      "Web development and automation systems built with modern technologies.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Kim Darren",
            "url": "https://kimdarren.com",
            "jobTitle": "Web Developer & Automation Specialist",
            "image": "https://kimdarren.com/icons/logo.png",
            "email": "mailto:kimdarren@gmail.com",
            "sameAs": [ 
              "https://www.linkedin.com/in/kim-darren-peralta/",
              "https://github.com/kyoushiro3"
            ]
          }`}}
        />
      </head>
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
