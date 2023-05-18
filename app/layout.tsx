import { Analytics } from "@vercel/analytics/react";
import "../lib/styles/globals.scss";
import { Inter, Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const metadata = {
  title: "Emberiségellenes Kártyák",
  description: "Magyar Emberiségellenes Kártyák",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <Analytics />
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
