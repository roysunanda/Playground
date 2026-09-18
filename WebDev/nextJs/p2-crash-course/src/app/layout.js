import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | Test App",
    default: "Test App",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' data-theme='acid'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav>
          <Link className='btn btn-neutral mr-2' href={`/`}>
            Home
          </Link>
          <Link className='btn btn-neutral mr-2' href={`/contact`}>
            Contact
          </Link>
          <Link className='btn btn-neutral mr-2' href={`/about`}>
            About
          </Link>
          <Link className='btn btn-neutral mr-2' href={`/blogs`}>
            Blogs
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
