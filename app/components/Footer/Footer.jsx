'use client';
import Styles from './Footer.module.css'
import { usePathname } from "next/navigation";
import Link from 'next/link';
export const Footer = () => {
  const pathname = usePathname();
    return (
        <footer className={Styles['footer']}>
          { 
          pathname === "/" ? <a className={Styles['logo']}><img
          className={Styles['footer__logo']}
          src="/images/logo.svg"
          alt="Логотип Pindie"
        /></a> : <Link href="/" className={Styles['logo']}>
              <img
            className={Styles['footer__logo']}
            src="/images/logo.svg" 
            alt="Логотип Pindie"/>
            </Link>
            }
        <span className={Styles["footer__logo-name"]}>pindie</span>
        <span className={Styles["footer__logo-copy"]}>, XXI век</span>
      <ul className={Styles["social-list"]}>

        <li className={Styles["button social-list__item"]}>
          <a href="" className={Styles["social-list__link"]}>YT</a>
        </li>
        <li className={Styles["button social-list__item"]}>
          <a href="" className={Styles["social-list__link"]}>ВК</a>
        </li>
        <li className={Styles["button social-list__item"]}>
          <a href="" className={Styles["social-list__link"]}>TG</a>
        </li>
        
      </ul></footer>
    )
}
