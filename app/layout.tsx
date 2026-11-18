import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kavya Labs — Build Smarter",
  description:
    "Kavya Labs builds intelligent software for modern teams and ambitious ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}