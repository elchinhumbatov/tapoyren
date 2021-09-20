import React from "react";
import s from "./MainFeatures.module.scss";
import MainFeaturesTabs from "./MainFeaturesTabs";
import { useTranslation } from "react-i18next";
import {Schedule, School, VideoLibrary} from '@mui/icons-material';

function MainFeatures() {
  const { t } = useTranslation();
  let features = t("main.features", { returnObjects: true });

  return (
    <section className={s.info}>
      <div className="container">
        <div className={s.features}>
          {features.map((item, idx) => {
            return (
              <div key={item.title} className={s.feature}>
                {idx === 0 && <VideoLibrary color='primary'  />}
                {idx === 1 && <School color='primary'  />}
                {idx === 2 && <Schedule color='primary'  />}
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
        <MainFeaturesTabs features={features} />
      </div>
    </section>
  );
}

export default MainFeatures;
