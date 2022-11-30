import '@/styles/dist.css';
import Header from '@/ui/Header';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Ondando</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="container mx-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
