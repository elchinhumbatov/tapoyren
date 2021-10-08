import { Button } from "@mui/material";
import s from "../CourseMainPage.module.scss";
import React from "react";
import { Link } from "react-router-dom";
import img from "../../../../assets/images/courses/course.jpeg";

function PopularCourses() {
  let arr = [1, 2, 3, 4];
  return (
    <div className={s.popularCoursesWrap}>
      <h4>Populyar kurslar</h4>
      <div className={s.popularCourses}>
        {arr.map((item) => {
          return (
            <div className={s.popularCourse} key={item}>
              <div className={s.popularCourseImg}>
                <img src={img} alt="course" />
              </div>
              <div className={s.popularCourseText}>
                <Link to="/course/123">
                  <h4>ACCA FA - Financial Accounting (F3)</h4>
                  <p>ACCA FA</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className={s.btn}>
        <Link to="/">
          <Button variant="contained">Butun Kurslar</Button>
        </Link>
      </div>
    </div>
  );
}

export default PopularCourses;
