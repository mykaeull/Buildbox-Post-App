import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggleButton from "./components/theme-toggle-button";
import { Toaster } from "./components/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Buildbox Posts",
    description: "Buildbox posts list app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider>
                    <Toaster />
                    <ThemeToggleButton />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
