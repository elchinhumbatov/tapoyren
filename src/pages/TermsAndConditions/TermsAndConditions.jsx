import React from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import { useTranslation } from 'react-i18next';
import VPlayer from '@u-wave/react-vimeo';

let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo(process.env.REACT_APP_CLIENT_ID, process.env.REACT_APP_CLIENT_SECRET, process.env.REACT_APP_ACCESS_TOKEN);

client.request({
  method: 'GET',
  path: '/videos/612927466'
}, function (error, body, status_code, headers) {
  if (error) {
    console.log(error);
  }

  console.log(body);
});


function TermsAndConditions() {
  const {t} = useTranslation();
  return (
    <div>
      <PageTitle title={t('terms.title')} />
      <section>
        <div className="container">
          terms
        </div>
        <VPlayer video='612927466' allowFullscreen />
      </section>
    </div>
  )
}

export default TermsAndConditions
