import type { Metadata } from "next";
import "./globals.css";
import { PostHogProvider } from "@/contexts/posthogContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pronest",
  description: "AI tools subscription bundling service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PostHogProvider>
          <Navbar />
          {children}  
          <Footer/>
        </PostHogProvider>
      </body>
    </html>
  );
}
