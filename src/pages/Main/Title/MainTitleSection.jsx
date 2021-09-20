import React from "react";
import s from './MainTitleSection.module.scss'
import bg from '../../../assets/images/main/hero-particles.png';
import { useTranslation } from 'react-i18next';


function MainTitleSection() {
const {t} = useTranslation();

  return (
    <section
      className={s.titleWrap}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className={s.container + " container"}>
        <div className={s.title}>
          <h1>{t('main.title.title')}</h1>
          <p>{t('main.title.text')}</p>
        </div>
        <div className={s.img}>
          <img
            src={require("../../../assets/images/main/hero-splash.png").default}
            alt="hero splash"
          />
        </div>
      </div>
    </section>
  );
}

export default MainTitleSection;
