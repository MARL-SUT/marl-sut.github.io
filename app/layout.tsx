import type { Metadata } from "next";
import { Red_Hat_Mono, Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({ variable: "--font-text", subsets: ["latin"], weight: ["300", "400", "500", "700"] });
const redHatMono = Red_Hat_Mono({ variable: "--font-code", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome - Multi-Agent RL Course",
  description: "Multi-Agent Reinforcement Learning course at Sharif University of Technology.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${ubuntu.variable} ${redHatMono.variable}`}>{children}</body></html>;
}
