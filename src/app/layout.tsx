import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Ta - Builder",
  description: "Portfolio and projects by Michael Ta, a passionate builder and developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
