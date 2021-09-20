import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SearchIcon from "@material-ui/icons/Search";
import s from "./Header.module.scss";
import Search from "./Search/Search";


function Header() {
  const { t, i18n } = useTranslation();
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow((prev) => !prev);
  };

  const handleClose = (lang) => {
    i18n.changeLanguage(lang);
    setIsShow(false);
  };

  return (
    <header className={s.header}>
      <div className={s.left}>
        <div className={s.logo}>
          <Link to="/">
            <img src={require('../../assets/images/logo.png').default} alt="logo" />
          </Link>
        </div>
        <div className={s.coursesBtn}>
          <img src={require('../../assets/images/courses-logo.png').default} alt="courses logo" />
          <p>{t("header.courses")}</p>
        </div>
        <div className={s.webSearch}><Search /></div>
        <div className={s.mobSearch}><Link to='/search'><SearchIcon color='primary' /></Link></div>
      </div>
      <div className={s.right}>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName={s.active} to="/about">{t("header.about")}</NavLink>
            </li>
            <li>
              <NavLink activeClassName={s.active} to="/contact">{t("header.contact")}</NavLink>
            </li>
            <div className={s.divider}></div>
            <li>
              <Link to="/login">{t("header.login")}</Link>
            </li>
            <li>
              <Link to="/registration">{t("header.registration")}</Link>
            </li>
          </ul>
        </nav>
        <div className={s.langBtn}>
          <Button onClick={handleClick}>{i18n.language}</Button>
          <div className={s.langs} style={{ display: !isShow && "none" }}>
            <button
              disabled={i18n.language === "az" && true}
              onClick={handleClose.bind(null, "az")}
            >
              Azərbaycan
            </button>
            <button
              disabled={i18n.language === "en" && true}
              onClick={handleClose.bind(null, "en")}
            >
              English
            </button>
            <button
              disabled={i18n.language === "ru" && true}
              onClick={handleClose.bind(null, "ru")}
            >
              Pусский
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
