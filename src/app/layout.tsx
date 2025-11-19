import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elliot Lindberg - Developer",
  description: "18 y/o Developer building the future. Currently Software Engineer @ Lovable",
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
