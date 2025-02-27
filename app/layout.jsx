import "./globals.css";
import { Inter } from "next/font/google";
import { AppProvider } from "@/components/context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AppProvider>
  );
}
