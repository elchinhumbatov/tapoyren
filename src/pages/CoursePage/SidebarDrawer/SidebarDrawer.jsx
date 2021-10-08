import { useState } from "react";
import s from '../Course.module.scss'
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Sidebar from "../Sidebar/Sidebar";
import { ArrowForwardIos } from "@mui/icons-material";


export default function SidebarDrawer() {
  const [state, setState] = useState({ left: false });

  const toggleSidebarDrawer = (open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return;
    setState({ ...state, 'left' : open });
  };

  const list = () => (
    <div
      style={{width: 300, padding: '70px 10px'}}
      role="presentation"
      // onClick={toggleSidebarDrawer(false)}
      onKeyDown={toggleSidebarDrawer(false)}
    >
      <Sidebar toggleSidebarDrawer={toggleSidebarDrawer(false)} />
    </div>
  );

  return (
    <div>
      <div onClick={toggleSidebarDrawer(true)} className={s.arrowBtn}>
        <ArrowForwardIos />
      </div>
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleSidebarDrawer(false)}
        onOpen={toggleSidebarDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
