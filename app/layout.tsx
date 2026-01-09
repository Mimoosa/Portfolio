import "../styles/globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { Providers } from "./theme-provider";

import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Providers>
          <NavbarWrapper /> {children} <Footer />
        </Providers>
      </body>
    </html>
  );
}
