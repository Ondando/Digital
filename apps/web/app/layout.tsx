import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
// import '../styles/output.css';
import 'ui/styles.css';
import React, { Suspense } from 'react';
import Loading from './loading';
import Header from '../components/Header';
/* eslint-disable jsx-a11y/label-has-associated-control */

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head />
            <body className="drawer m-2">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" key={1} />

                <div className="drawer-content">
                    <Header />
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>

                    <ul className="menu bg-base-100 text-base-content w-80 p-4">
                        <li>
                            <p>Sidebar Item 1</p>
                        </li>
                        <li>
                            <p>Sidebar Item 2</p>
                        </li>
                    </ul>
                </div>
            </body>
        </html>
    );
}
