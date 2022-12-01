import "@styles/globals.css";

import { Suspense } from "react";
import Header from "../components/Header";
import Loading from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="m-2">
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
