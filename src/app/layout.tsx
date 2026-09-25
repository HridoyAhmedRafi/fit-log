import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ExerciesProvider from "@/context/ExerciesContext";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fit Log",
  description: "Workouts Library",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"  
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col ">
        <ExerciesProvider>
          <Navbar></Navbar>
          <main className="min-h-screen">{children}</main>
          <Footer></Footer>
        </ExerciesProvider>
        <Toaster
          toastOptions={{
            style: {
              background: "#15171D",
              color: "#FFFFFF",
              border: "1px solid #2D313B",
            },
          }}
        />
      </body>
    </html>
  );
}
