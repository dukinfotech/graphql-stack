"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import { Layout } from "@/components/admin/layout/layout";
import { Providers } from "../providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} dark`}>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
