import { useState } from "react";
import s from './Categories.module.scss'
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export default function Categories({localeCategories}) {
  const {t} = useTranslation();
  const [state, setState] = useState({ left: false });
  const [expanded, setExpanded] = useState(false);
  const arr = ['first', 'second', 'third', 'fourth', 'fifth'];

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const toggleCategories = (open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return;
    setState({ ...state, 'left' : open });
  };

  const list = () => (
    <div
      style={{width: 300, padding: '70px 20px'}}
      role="presentation"
      // onClick={toggleCategories(false)}
      onKeyDown={toggleCategories(false)}
    >
      <div className={s.loginWrap}>
        <p onClick={toggleCategories(false)}>
          <NavLink activeClassName={s.active} to="/login">{t("header.login")}</NavLink> ve ya 
          <NavLink activeClassName={s.active} to="/registration"> {t("header.registration")}</NavLink>
        </p>
      </div>
      <div className={s.categories}>
        {arr.map((item, idx)=>{
          return (
            <Accordion 
              expanded={expanded === idx} onChange={handleAccordionChange(idx)} style={{padding: '0 10px'}} key={item}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />} style={{width: '100%'}}
              >
                <p>{item}</p>
              </AccordionSummary>
              <AccordionDetails>
                <p>{item}</p>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </div>
    </div>
  );

  return (
    <div>
      <div className={s.coursesBtn} onClick={toggleCategories(true)}>
        <img src={require('../../../assets/images/courses-logo.png').default} alt="courses logo" />
        <p>{localeCategories}</p>
      </div>
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleCategories(false)}
        onOpen={toggleCategories(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
