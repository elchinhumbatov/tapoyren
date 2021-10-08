import React from "react";
import s from "./MainTopCourses.module.scss";
import { Link } from "react-router-dom";
import Product from '../../../components/Product/Product';
import { dummyData } from '../Main';

function MainTopCourses() {
  return (
    <section className={s.top}>
      <div className="container">
        <div className="mainPageTitle">
          <h2>Top kurslar</h2>
        </div>
        <div className={s.topLinks}>
          <Link to="/">MS Excel</Link>
          <Link to="/">Veb İnkişafı</Link>
          <Link to="/">İngiliscə</Link>
          <Link to="/">İnsan resursları</Link>
        </div>
        <Product data={dummyData} />
        <div className="mainPageTitle" style={{ paddingTop: "25px" }}>
          <h2>
            <Link to="/">Bütün Kurslar</Link>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default MainTopCourses;
