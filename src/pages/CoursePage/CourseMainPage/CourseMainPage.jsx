import React from "react";
import s from "./CourseMainPage.module.scss";
import Summary from "./Summary/Summary";
import AboutCourse from "./AboutCourse/AboutCourse";
import OtherCourses from "./OtherCourses/OtherCourses";
import CourseRating from './CourseRating/CourseRating';
import PopularCourses from './PopularCourses/PopularCourses';

function CourseMainPage() {
  return (
    <div className={s.mainCoursePage}>
      <div className={s.wrapper}>
        <Summary />
      </div>
      <div className={s.wrapper}>
        <AboutCourse />
      </div>
      <div className={s.wrapper}>
        <OtherCourses />
      </div>
      <div className={s.rateAndPopular}>
        <div className={s.wrapper}>
          <CourseRating />
        </div>
        <div className={s.wrapper}>
          <PopularCourses />
        </div>
      </div>
    </div>
  );
}

export default CourseMainPage;
