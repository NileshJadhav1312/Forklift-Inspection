import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InspectPro - Forklift Inspection Checklist",
  description: "Simple and consistent forklift safety inspections.",
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