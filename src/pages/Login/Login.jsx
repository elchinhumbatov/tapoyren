import React from "react";
import s from "./Login.module.scss";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import LoginForm from './LoginForm/LoginForm';
import RegistrForm from './RegistrForm/RegistrForm';

function Login(props) {
  const {t} = useTranslation();

  return (
    <section className={s.sec}>
      <div className="container">
        <div className={s.content}>
          <div className={s.titleWrap}>
            <img src={require('../../assets/images/logo-white.png').default} alt="logo" />
            <h1>TAPÖYRƏN</h1>
            <p>{t('login.text')}</p>
          </div>
          <div className={s.formBox}>
            <div className={s.toggleBtns}>
              <button className={!props.showRegistr ? s.active : null}>
                <Link to='/login'>{t('login.form.login')}</Link>
              </button>
              <button className={props.showRegistr ? s.active : null}>
                <Link to='/registration'>{t('login.form.registration')}</Link>
              </button>
            </div>
            <div className={s.formWrap}>
              {!props.showRegistr ? <LoginForm /> : <RegistrForm /> }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
