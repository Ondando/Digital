import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
// import '../styles/output.css';
import 'ui/styles.css';
import React, { Suspense } from 'react';
import Loading from './loading';
import Header from '../components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
