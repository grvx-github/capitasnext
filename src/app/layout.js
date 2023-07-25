'use client'

import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import About from './Components/About';
import Services from './Components/Services'
import Portfolio from './Components/Portfolio';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bodyWrapper">{children}</div>
      </body>
    </html>
  );
}
