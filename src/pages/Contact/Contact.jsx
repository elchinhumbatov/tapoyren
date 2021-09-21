import React from "react";
import s from "./Contact.module.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import { LocationOn, Phone, Email, Instagram, WhatsApp, FacebookRounded, SubscriptionsRounded } from '@mui/icons-material';

function Contact() {
  const { t } = useTranslation();

  return (
    <div>
      <PageTitle title={t("contact.title")} />
      <section style={{minHeight: '65vh'}}>
        <div className="container">
          <div className={s.wrapper}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <div className={s.contacts}>
                <div className={s.contact}>
                  <LocationOn />
                  <p>{t('contact.adress')}</p>
                </div>
                <div className={s.contact}>
                  <Email />
                  <a href="mailto:support@tapoyren.com">support@tapoyren.com</a>
                </div>
                <div className={s.contact}>
                  <Phone />
                  <a href="tel:+994556670057">(+994 55) 667 00 57</a>
                </div>
                <div className={s.contact}>
                  <Email />
                  <a href="mailto:jamal.alishov@tapoyren.com"><b>CEO:</b> jamal.alishov@tapoyren.com</a>
                </div>
                  <a href="https://www.facebook.com/groups/tapoyrenacca/" target='_blank' rel='noreferrer'><FacebookRounded />ACCA Group of Tapoyren</a>
              </div>
              <div className={s.socIcons}>
                <a href="https://www.facebook.com/tapoyrencom/" target='_blank' rel='noreferrer'><FacebookRounded color='primary' /></a>
                <a href="https://www.instagram.com/tap.oyren/" target='_blank' rel='noreferrer'><Instagram color='primary' /></a>
                <a href="https://www.youtube.com/channel/UCFtfO7-0ERrg9funT6s82Mg" target='_blank' rel='noreferrer'><SubscriptionsRounded color='primary' /></a>
                <a href="whatsapp://send?phone=+994556670057" target='_blank' rel='noreferrer'><WhatsApp color='primary' /></a>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d859.4148432682198!2d49.81152438166508!3d40.37531440496766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d15e7c3572f%3A0x5309395136471845!2sAlishovs%20Education%20MMC!5e0!3m2!1sru!2s!4v1632219956029!5m2!1sru!2s"
                width="100%"
                height="300"
                loading="lazy"
                title="adress"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
