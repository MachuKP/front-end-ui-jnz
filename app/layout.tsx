import type { Metadata } from "next";
import { Cabin } from "next/font/google";

import "@/app/globals.css";

import { ReduxProvider } from "@/store/provider";
import Footer from "@/components/footer";

const inter = Cabin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FrontEnd JNZ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        <ReduxProvider>
          <main>
            {children}
            <Footer />
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
