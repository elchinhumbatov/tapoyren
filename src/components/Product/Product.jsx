import React from "react";
import s from "./Product.module.scss";
import { Link } from "react-router-dom";
import {FavoriteBorder, Favorite} from "@material-ui/icons";


function Product({ data }) {
  return (
    <div className={s.products}>
      {data && data.map((item) => {
        return (
          <div className={s.productWrap} key={item.id}>
            <div className={s.product}>
              <Link to={item.url}>
                <img
                  src={require("../../assets/images/courses/course.jpeg").default}
                  alt="course"
                />
              </Link>
              <div className={s.name}>
                <Link to={item.url}>{item.title}</Link>
                {item.isFavorite ? <Favorite color="primary" /> : <FavoriteBorder />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
