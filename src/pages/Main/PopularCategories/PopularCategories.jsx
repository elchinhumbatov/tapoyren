import React from "react";
import s from './PopularCategories.module.scss';
import { Link } from "react-router-dom";

function PopularCategories() {
  return (
    <section className={s.popular}>
      <div className="container">
        <div className="title">
          <h2>Populyar kateqoriyalar</h2>
        </div>
        <div className={s.popularCourses}>
          <div className={s.popularCourse}>
            <div className={s.card}>
              <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, debitis!</h3>
              <Link to="/">KATEQORİYAYA GET</Link>
            </div>
          </div>
          <div className={s.popularCourse}>
            <div className={s.card}>
              <h3>CFA</h3>
              <Link to="/">KATEQORİYAYA GET</Link>
            </div>
          </div>
          <div className={s.popularCourse}>
            <div className={s.card}>
              <h3>CFA</h3>
              <Link to="/">KATEQORİYAYA GET</Link>
            </div>
          </div>
          <div className={s.popularCourse}>
            <div className={s.card}>
              <h3>CFA</h3>
              <Link to="/">KATEQORİYAYA GET</Link>
            </div>
          </div>
          <div className={s.popularCourse}>
            <div className={s.card}>
              <h3>CFA</h3>
              <Link to="/">KATEQORİYAYA GET</Link>
            </div>
          </div>
          <div className={s.popularCourse}>
            <div className={s.card}>
              <h3>CFA</h3>
              <Link to="/">KATEQORİYAYA GET</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularCategories;
