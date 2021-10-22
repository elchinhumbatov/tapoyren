import React from "react";
import s from "./CourseMainPage.module.scss";
import Summary from "./Summary/Summary";
import AboutCourse from "./AboutCourse/AboutCourse";
import OtherCourses from "./OtherCourses/OtherCourses";
import CourseRating from "./CourseRating/CourseRating";
import PopularCourses from "./PopularCourses/PopularCourses";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

function CourseMainPage() {
  const { url } = useRouteMatch();
  return (
    <div className={s.mainCoursePage}>
      <div className={s.wrapper}>
        <Summary />
      </div>
      <Switch>
        <Route path={url} component={() => null} exact />
        <Route
          path={url + "/video/:id"}
          component={() => (
            <div className={s.wrapper}>
              <VideoPlayer url={url} />
            </div>
          )}
        />
      </Switch>
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
