import type { Metadata } from "next";
import { DM_Mono, Manrope, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-sans", subsets: ["latin"] });
const sourceSerif = Source_Serif_4({ variable: "--font-serif", subsets: ["latin"], style: ["normal", "italic"] });
const dmMono = DM_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "MARL@SUT — Multi-Agent Reinforcement Learning",
  description: "Course website for Multi-Agent Reinforcement Learning at Sharif University of Technology.",
  metadataBase: new URL("https://marl-sut-course.fatemeh-azimmohseni.chatgpt.site"),
  openGraph: { title: "MARL@SUT — Multi-Agent Reinforcement Learning", description: "Learn how intelligent agents cooperate, compete, and communicate.", type: "website", images: [{ url: "/og.png", width: 1740, height: 907, alt: "MARL@SUT course" }] },
  twitter: { card: "summary_large_image", title: "MARL@SUT — Multi-Agent Reinforcement Learning", description: "Learn how intelligent agents cooperate, compete, and communicate.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${sourceSerif.variable} ${dmMono.variable}`}>{children}</body></html>;
}
