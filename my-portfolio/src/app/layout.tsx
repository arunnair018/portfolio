import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./global.css";
import SidebarLayout from "./components/sidebar";

const poppins = Poppins({
  // Specify the font weights you want to use
  weight: ['400', '500', '600', '700'],
  // Choose the font subset
  subsets: ['latin'],
  // Define a CSS variable for the font
  variable: '--font-poppins',
  // Configure font swapping for smooth loading
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Arun Nair",
  description: "Portfolio of Arun Nair.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-black text-white flex min-h-screen dark:bg-gray-900 flex-col`}
      >
        {/* sidebar layout */}
        <SidebarLayout />

        {/* pages layout */}
        <main className="text-white w-full md:pl-64 flex flex-col justify-between h-dvh">
          <div className="p-8 md:m-8">{children}</div>
          <footer className="w-full p-4 flex justify-center text-sm text-gray-400 border-t border-gray-700">
            Made by Arun Nair | &copy; 2025
          </footer>
        </main>
      </body>
    </html>
  );
}
