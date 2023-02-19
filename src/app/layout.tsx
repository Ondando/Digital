
import "./globals.css";
import React, { Suspense } from "react";
import Loading from "./loading";
import Header from "../components/Header";
import Sidebar from "./SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="drawer m-2">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          key={1}
        />

        <div className="drawer-content">
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
        <Sidebar />
      </body>
    </html>
  );
}
