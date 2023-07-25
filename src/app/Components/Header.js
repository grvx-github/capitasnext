'use client'

import Image from "next/image";
import styles from "@/app/styles/header.module.css"
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [navbarBgColor, setNavbarBgColor] = useState("transparent");

  // Add an event listener to change the background color on scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Set the background color to white when the user scrolls down more than 100 pixels
      if (scrollY > 100) {
        setNavbarBgColor("rgb(33, 37, 41)");
      } else {
        setNavbarBgColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={styles.headerWrappper}>
      <div className={styles.nav} style={{ backgroundColor: navbarBgColor }}>
        <div className={styles.logo}>
          <Image src="/logo.png" height={50} width={100} alt=""></Image>
        </div>
        <div className={styles.collapseableMenu}>
          <ul>
            <li className={styles.navItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/services">Services</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.socials}>
          <Link href="#">Call Us: +1 (514) 022-8419</Link>
          <Link href="#">Log In</Link>
          <button className={styles.signUp} >Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Header