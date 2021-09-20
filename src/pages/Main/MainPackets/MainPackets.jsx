import React from "react";
import s from '../MainTopCourses/MainTopCourses.module.scss'
import ss from './MainPackets.module.scss'
import { Link } from "react-router-dom";

function MainPackets() {
  return (
    <section className={ss.packets}>
      <div className="container">
        <div className="title">
          <h2>Paketlər</h2>
        </div>
        <div className={s.topCourses}>
          <div className={s.topCourse}>
            <Link to="/about">
              <img
                src={require("../../../assets/images/courses/course.jpeg").default}
                alt="course"
              />
            </Link>
            <div className={s.name}>
              <Link to="/">
                Vergi Uçotu: Vergi Məcəlləsi və Praktiki Nümunələr
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPackets;
