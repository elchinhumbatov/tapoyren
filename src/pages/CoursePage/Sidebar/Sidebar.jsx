import React from 'react'
import s from './Sidebar.module.scss';
import courseImg from '../../../assets/images/courses/course.jpeg';
import SidebarVideos from './SidebarVideos/SidebarVideos';

function Sidebar({toggleSidebarDrawer}) {

  return (
    <div className={s.sidebar}>
      <div className={s.imgBox}>
        <img src={courseImg} alt="course_image" />
      </div>
      <div className={s.shortInfo}>
        <div className={s.duration}>
          <p><b>SAAT</b></p>
          <p>20.53</p>
        </div>
        <div className={s.divider}></div>
        <div className={s.level}>
          <p><b>Seviyye</b></p>
          <p>Beginner</p>
        </div>
        <div className={s.divider}></div>
        <div className={s.studentCount}>
          <p><b>Telebe</b></p>
          <p>1102</p>
        </div>
        <div className={s.divider}></div>
        <div className={s.lang}>
          <p><b>Dil</b></p>
          <p>Azerbaycan</p>
        </div>
      </div>
      <div className="content">
        <h4>Mündəricat</h4>
        <SidebarVideos customToggle={toggleSidebarDrawer} />
      </div>
    </div>
  )
}

export default Sidebar
