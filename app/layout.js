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
  title: "Driving School West London | Manual Lessons | TM Drive",
  description: "Get expert manual driving lessons in West London. High pass rates and affordable tuition in Notting Hill & Chelsea. Book your first driving lesson now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header title={"Usman"}/> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
