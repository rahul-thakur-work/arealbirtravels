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

export const metadata = {
  title: "Aerial Bir Travel - Adventure Travel Agency in Bir Billing",
  description: "Experience the magic of Bir Billing with Aerial Bir Travel. Paragliding adventures, mountain trekking, cultural tours, and unforgettable Himalayan experiences. Book your adventure today!",
  keywords: "Bir Billing, paragliding, travel agency, Himachal Pradesh, adventure travel, trekking, mountain tours",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
