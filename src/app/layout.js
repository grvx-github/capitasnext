'use client'

import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bodyWrapper">{children}</div>
      </body>
    </html>
  );
}
