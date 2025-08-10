import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Include multiple weights
  display: "swap", // Better font loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Include multiple weights
  display: "swap", // Better font loading
});

// Separate viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
}

// Main metadata configuration
export const metadata: Metadata = {
  title: "Health Solutions Demo",
  description: "Advanced healthcare solutions and medical technology demo",
  keywords: ["healthcare", "medical", "health solutions", "telemedicine"],
  authors: [{ name: "Health Solutions Team" }],
  creator: "Health Solutions Demo",
  publisher: "Health Solutions Demo",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Health Solutions Demo',
    description: 'Advanced healthcare solutions and medical technology demo',
    siteName: 'Health Solutions Demo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health Solutions Demo',
    description: 'Advanced healthcare solutions and medical technology demo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}