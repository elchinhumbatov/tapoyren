import React from "react";
import s from "./MainTopCourses.module.scss";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";

function MainTopCourses() {
  return (
    <section className={s.top}>
      <div className="container">
        <div className="title">
          <h2>Top kurslar</h2>
        </div>
        <div className={s.topLinks}>
          <Link to="/">MS Excel</Link>
          <Link to="/">Veb İnkişafı</Link>
          <Link to="/">İngiliscə</Link>
          <Link to="/">İnsan resursları</Link>
        </div>
        <div className={s.topCourses}>
          <div className={s.topCourse}>
            <Link to="/about">
              <img
                src={
                  require("../../../assets/images/courses/course.jpeg").default
                }
                alt="course"
              />
            </Link>
            <div className={s.name}>
              <Link to="/">
                Vergi Uçotu: Vergi Məcəlləsi və Praktiki Nümunələr
              </Link>
              <FavoriteBorderIcon />
            </div>
          </div>
          <div className={s.topCourse}>
            <Link to="/about">
              <img
                src={
                  require("../../../assets/images/courses/course.jpeg").default
                }
                alt="course"
              />
            </Link>
            <div className={s.name}>
              <Link to="/">
                Vergi Uçotu: Vergi Məcəlləsi və Praktiki Nümunələr
              </Link>
              <FavoriteBorderIcon />
            </div>
          </div>
          <div className={s.topCourse}>
            <Link to="/about">
              <img
                src={
                  require("../../../assets/images/courses/course.jpeg").default
                }
                alt="course"
              />
            </Link>
            <div className={s.name}>
              <Link to="/">
                Vergi Uçotu: Vergi Məcəlləsi və Praktiki Nümunələr
              </Link>
              <FavoriteBorderIcon />
            </div>
          </div>
          <div className={s.topCourse}>
            <Link to="/about">
              <img
                src={
                  require("../../../assets/images/courses/course.jpeg").default
                }
                alt="course"
              />
            </Link>
            <div className={s.name}>
              <Link to="/">
                Vergi Uçotu: Vergi Məcəlləsi və Praktiki Nümunələr
              </Link>
              <FavoriteBorderIcon />
            </div>
          </div>
          <div className={s.topCourse}>
            <Link to="/about">
              <img
                src={
                  require("../../../assets/images/courses/course.jpeg").default
                }
                alt="course"
              />
            </Link>
            <div className={s.name}>
              <Link to="/">
                Vergi Uçotu: Vergi Məcəlləsi və Praktiki Nümunələr
              </Link>
              <FavoriteBorderIcon />
            </div>
          </div>
        </div>
        <div className="title" style={{ marginTop: "25px" }}>
          <h2>
            <Link to="/">Bütün Kurslar</Link>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default MainTopCourses;
