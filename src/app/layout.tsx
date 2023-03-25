import "@/styles/globals.css";
import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/SideBar";
import Footer from "@/components/Footer";

//TODO: MAKE CSS TAIWINDCSS BETTER 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="drawer">
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
            key={1}
          />
          <div className="drawer-content">
            <Header />
            {children}
            <Footer />
          </div>
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
