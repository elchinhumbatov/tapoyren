import React, { useState } from "react";
import s from "../Sidebar.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { PlayCircleOutline } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import {useRouteMatch} from 'react-router-dom';

function SidebarVideos({customToggle}) {
  let { url } = useRouteMatch();
  const [expanded, setExpanded] = useState(false);
  let videos = [1, 2, 3, 4];

  const handleCB = () => {
    if(customToggle) customToggle();
  }

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={s.sidebarVideos}>
      {videos.map(video => {
        return (
          <Accordion
          key={video}
          expanded={expanded === `panel${video}`}
          onChange={handleAccordionChange(`panel${video}`)}
        >
          <AccordionSummary
            style={{ width: "100%", padding: "0 10px", borderRadius: 5 }}
            className={expanded === `panel${video}` ? s.active : null}
          >
            <div className={s.moduleInfo}>
              <p>3 - The Qualitative Characteristics of Financial İnformation</p>
              <p>1.43<br /><span>saat</span></p>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className={s.videoInfo}>
              <NavLink to={url + '/video/' + video} onClick={handleCB}>
                <p><PlayCircleOutline color="primary" /> <br /> 11:00</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </NavLink>
            </div>
            <div className={s.videoInfo}>
              <NavLink to={url + '/video/' + video} onClick={handleCB}>
                <p><PlayCircleOutline color="primary" /> <br /> 11:00</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </NavLink>
            </div>
            <div className={s.videoInfo}>
              <NavLink to={url + '/video/' + video} onClick={handleCB}>
                <p><PlayCircleOutline color="primary" /> <br /> 11:00</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </NavLink>
            </div>
          </AccordionDetails>
        </Accordion>
        )
      })}
    </div>
  );
}

export default SidebarVideos;
