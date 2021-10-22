import React, {useState} from "react";
import s from "../CourseMainPage.module.scss";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import img from "../../../../assets/images/courses/course.jpeg";
import { Button } from "@mui/material";


function Summary() {
  
  const [value, setValue] = useState(0);
  return (
    <>
      <div className={s.summary}>
        <div className={s.imgWrap}>
          <img src={img} alt="instructor" />
        </div>
        <div className={s.text}>
          <h2>Excel üzərində Maliyyə Modelləşdirməsi</h2>
          <div className={s.rateAndInstructor}>
            <div className={s.instructor}>
              <h3>Jamal Alishov</h3>
              <p>Təlimçi</p>
            </div>
            <div className={s.rate}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <p>Kursu Qiymetlendirin</p>
            </div>
          </div>
          <div className={s.actionBtns}>
            <Link to='/'><Button variant='contained'>Bashlayin</Button></Link>
            <Link to='/'><Button variant='contained' style={{background: 'silver'}}>Onizleme</Button></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Summary;
