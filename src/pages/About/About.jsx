import React from "react";
import s from "./About.module.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

function About() {
  const { t } = useTranslation();
  const advantages = t("about.advantages.text", { returnObjects: true });

  return (
    <div>
      <PageTitle title={t("about.title")} />
      <section>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.summary}>
              <p>{t("about.summary")}</p>
            </div>
            <div className={s.statistics}>
              <h5>{t("about.statistics.title")}</h5>
              <p>{t("about.statistics.text")}</p>
            </div>
            <div className={s.advantages}>
              <h5>{t("about.advantages.title")}</h5>
              <ul>
                {advantages.map((item, idx) => {
                  return <li key={idx}>{item}</li>;
                })}
              </ul>
            </div>
            <div className={s.b2b}>
              <p>{t("about.b2b.info")} <Link to='/'>(https://tapoyren.com/)</Link></p>
              <p>
                Açıqlamalı video linkə{" "}
                <a
                  href="https://www.youtube.com/watch?v=vpOPevcV5qA"
                  target="_blank"
                  rel='noreferrer'
                  style={{textDecoration: 'underline'}}
                >
                  tıklayın.
                </a>
              </p>
              <p>{t('about.b2b.partners')}</p>
              <div className={s.imgs}>
                <div><img src={require('../../assets/images/partner.png').default} alt="parntner" /></div>
                <div><img src={require('../../assets/images/partner.png').default} alt="parntner" /></div>
                <div><img src={require('../../assets/images/partner.png').default} alt="parntner" /></div>
                <div><img src={require('../../assets/images/partner.png').default} alt="parntner" /></div>
              </div>
            </div>
            <div className={s.cerf}>
              <p>{t('about.b2b.cerf')}</p>
              <img src={require('../../assets/images/cerf.png').default} alt="certification" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
