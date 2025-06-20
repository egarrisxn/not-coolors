import "./globals.css";
import { Geist } from "next/font/google";
import { AppProvider } from "@/components/context";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://not-coolors.vercel.app"),
  title: "Not Coolors",
  description: "Insanely fast color palette generator!",
  applicationName: "Not Coolors",
  referrer: "origin-when-cross-origin",
  keywords: [
    "nextjs",
    "react",
    "javascript",
    "tailwindcss",
    "color",
    "palette",
  ],
  openGraph: {
    title: "Not Coolors",
    description: "Insanely fast color palette generator!",
    url: "https://not-coolors.vercel.app",
    siteName: "Not Coolors",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Not Coolors",
    description: "Insanely fast color palette generator!",
    creator: "@eg__xo",
    site: "@eg__xo",
  },
};

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="en">
        <head><meta name='apple-mobile-web-app-title' content='Not Coolors' /></head>
        <body className={geist.className}>{children}</body>
      </html>
    </AppProvider>
  );
}
