import Navbar from "@/components/Navbar/Navbar";
import Providers from "@/lib/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Doctor Portal",
    description:
        "Doctor Portal. A reliable source of information and solutions.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Providers>
            <html lang="en" className="max-w-[1920px] mx-auto">
                <body className={inter.className}>
                    <nav className="bg-slate-950">
                        <Navbar />
                    </nav>
                    {children}
                </body>
            </html>
        </Providers>
    );
}
