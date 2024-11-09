import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar"; // Adjust the path based on your project structure

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Navbar component */}
        {children}
      </body>
    </html>
  );
}
