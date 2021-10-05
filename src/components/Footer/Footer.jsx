import s from "./Footer.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Phone, LocationOn, MailOutline } from "@mui/icons-material";

function Footer() {
  const { t } = useTranslation();
  const catList = t("footer.categories.list", { returnObjects: true });
  const links = t("footer.links.list", { returnObjects: true });
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footerInfos}>
          <div className={s.footerInfo}>
            <img
              src={require("../../assets/images/logo-white.png").default}
              alt="logo"
            />
            <p>{t("footer.info")}</p>
          </div>
          <div className={s.categories}>
            <h3>{t("footer.categories.title")}</h3>
            <ul>
              {catList.map((item) => {
                return (
                  <li key={item.text}>
                    <Link to={item.url}>{item.text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={s.links}>
            <h3>{t("footer.links.title")}</h3>
            <ul>
              {links.map((item) => {
                return (
                  <li key={item.text}>
                    <Link to={item.url}>{item.text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={s.contacts}>
            <h3>{t("footer.contacts.title")}</h3>
            <ul>
              <li>
                <LocationOn />
                {t("footer.contacts.adress")}
              </li>
              <li>
                <Phone />
                <a href="tel:+994556670057">+99455 667 00 57</a>
              </li>
              <li>
                <MailOutline />
                <a href="mailto:SUPPORT@TAPOYREN.COM">SUPPORT@TAPOYREN.COM</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={s.footerCopy}>
        <p>
          {" "}
          © 2021. Bütün hüquqları "ALİSHOVS EDUCATİON" MMC tərəfindən qorunur{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
