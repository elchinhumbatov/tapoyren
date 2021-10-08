import React from 'react'
import s from '../CourseMainPage.module.scss'
import { Rating } from '@mui/material';


function CourseRating() {
  const rates = [5, 4, 3, 2, 1];

  return (
    <div className={s.courseRating}>
      <h4>Tələbələrin fikirləri</h4>
      <div className={s.ratingSummary}>
        <h2>5</h2>
        <Rating name="read-only" value={5} readOnly size='large' color='primary' />
        <p>4 ses</p>
      </div>
      <div className={s.rateDetails}>
        {rates.map(item => {
          return (
            <div className={s.rates} key={item}>
              <div className={s.rateBar}>
                <div className={s.ratePercent} style={{width: item*20+'%'}}></div>
              </div>
              <div className={s.stars}>
                <Rating name="read-only" value={item} readOnly style={{color: 'gray'}} />
              </div>
              <div className={s.percent}>{item*20+'%'}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CourseRating
