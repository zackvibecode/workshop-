import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZAQONE — We Make Cars Hard To Ignore | Premium Vehicle Wraps & Branding",
  description:
    "Premium vehicle wraps, automotive branding and custom graphics designed to make every vehicle stand out. Professional printing and precision installation by ZAQONE.",
  keywords: [
    "vehicle wrap Malaysia",
    "vehicle branding",
    "custom vehicle graphics",
    "automotive printing",
    "car wrap installation",
    "Zaqone Automotive",
  ],
  openGraph: {
    title: "Zaqone Automotive — Professional Vehicle Branding",
    description:
      "Professional vehicle wrap, branding, printing and installation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
