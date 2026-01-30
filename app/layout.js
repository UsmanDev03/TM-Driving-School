import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TM Driving School",
  description: "TM Driving School offers high-quality driving tuition with over 20+ years of experience. Affordable lessons to help you pass your test with confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header title={"Usman"}/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
