import React from 'react'
import s from './PageTitle.module.scss'


function PageTitle({title}) {
  return (
    <div className={s.div}>
      <h2>{title}</h2>
    </div>
  )
}

export default PageTitle
