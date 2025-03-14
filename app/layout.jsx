import "./globals.css";
import { Inter } from "next/font/google";
import { AppProvider } from "@/components/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://not-coolors.vercel.app"),
  title: "Not Coolors",
  description: "You know...Not Coolors.",
  applicationName: "Not Coolors",
  referrer: "origin-when-cross-origin",
  keywords: ["nextjs", "react", "javascript", "color", "palette"],
  openGraph: {
    title: "Not Coolors",
    description: "You know...Not Coolors.",
    url: "https://not-coolors.vercel.app",
    siteName: "Not Coolors",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Not Coolors",
    description: "You know...Not Coolors.",
    creator: "@eg__xo",
    site: "@eg__xo",
  },
  appleWebApp: {
    capable: true,
    title: "Not Coolors",
    startupImage: "/opengraph-image.png",
    statusBarStyle: "white-translucent",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AppProvider>
  );
}
