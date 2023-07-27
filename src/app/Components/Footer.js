import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "@/app/styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.footerWrapper} container`}>
        <div className="row">
          <div className={`col-lg-6 col-sm-12 ${styles.footerLeft}`}>
            <Image
              src="/logo.png"
              alt=""
              width={100}
              height={100}
              className="mb-4"
            />
            <p className="t-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              neque animi perferendis, asperiores autem iste inventore a impedit
              dignissimos quis fugiat, sed quisquam non perspiciatis soluta!
              Laudantium ut dolore quasi.
            </p>
            <div className={`${styles.socialLinks} d-flex`}>
              <Link href={"/"}>
                <FaFacebookF />
              </Link>
              <Link href={"/"}>
                <FaInstagram />
              </Link>
              <Link href={"/"}>
                <FaTwitter />
              </Link>
            </div>
            <ul className={`navbar ${styles.footerNav}`}>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/"}>Services</Link>
              </li>
              <li>
                <Link href={"/"}>About Us</Link>
              </li>
              <li>
                <Link href={"/"}>Blog</Link>
              </li>
            </ul>
            <div className="copyright">
              <p className="t-muted">
                © <span className="formula">zerror.</span> All Rights Reserved 2023.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <h3>Get in Touch</h3>
            <div className="container-fluid">
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <label>
                      First Name:
                      <input type="text" name="fName" />
                    </label>
                  </div>
                  <div className="col-lg-6">
                    <label>
                      Last Name:
                      <input type="text" name="lName" />
                    </label>
                  </div>
                  <div className="col-lg-6">
                    <label>
                      Email:
                      <input type="text" name="email" />
                    </label>
                  </div>
                  <div className="col-lg-6">
                    <label>
                      Phone Number:
                      <input type="text" name="pNumber" />
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <label>
                      Message:
                      <textarea name="message" />
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
