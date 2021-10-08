import React from "react";
import s from "./Course.module.scss";
import Sidebar from "./Sidebar/Sidebar";
import CourseMainPage from "./CourseMainPage/CourseMainPage";
import SidebarDrawer from './SidebarDrawer/SidebarDrawer';

function Course() {
  return (
    <section className={s.section}>
      <div className={s.sidebarWrap}><Sidebar /></div>
      <SidebarDrawer />
      <CourseMainPage />
    </section>
  );
}

export default Course;
