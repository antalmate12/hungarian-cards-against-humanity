import "@/styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <Analytics />
      <Component {...pageProps} />
    </div>
  );
}
