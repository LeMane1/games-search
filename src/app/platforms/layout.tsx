import type { Metadata } from "next";
import "@/styles/globals.css";
import Providers from "@/lib/Providers";
import ContainerLayout from "@/lib/ContainerLayout";

export const metadata: Metadata = {
  title: "Game Search",
  description: "Generated by create next app",
};

export default async function PlatformsLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body>
    <Providers>
      <ContainerLayout>
        {children}
      </ContainerLayout>
    </Providers>
    </body>
    </html>
  );
}