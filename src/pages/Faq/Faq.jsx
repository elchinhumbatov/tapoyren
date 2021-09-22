import React from "react";
import s from "./Faq.module.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Faq() {
  const { t } = useTranslation();
  const arr = ["first", "second", "third", "fourth", "fifth"];

  return (
    <div>
      <PageTitle title={t("faq.title")} />
      <section>
        <div className="container">
          <div className={s.faqs}>
            {arr.map((item) => {
              return (
                <Accordion className={s.faq} key={item}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={s.icon} />}
                    // aria-controls="panel1a-content"
                    style={{ width: "100%", padding: "0 20px" }}
                  >
                    <p style={{fontWeight: 'bold'}}>{item}</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>{item}</p>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
