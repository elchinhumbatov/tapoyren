import { useState } from "react";
import s from './Categories.module.scss'
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export default function Categories({localeCategories}) {
  const [state, setState] = useState({ left: false });

  const toggleCategories = (open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return;
    setState({ ...state, 'left' : open });
  };

  const list = () => (
    <div
      style={{width: 300, padding: '50px 20px'}}
      role="presentation"
      // onClick={toggleCategories(false)}
      onKeyDown={toggleCategories(false)}
    >
      <h1>Kateqoriyalar</h1>
      <p>first</p>
      <p>first</p>
      <p>first</p>
      <p>first</p>
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
