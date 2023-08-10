'use client'

import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from "react";
import AOS from "aos";


export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <html lang="en">
      <body>
        <div className="bodyWrapper">{children}</div>
      </body>
    </html>
  );
}
