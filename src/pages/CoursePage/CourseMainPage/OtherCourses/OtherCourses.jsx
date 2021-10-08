import React from 'react'
import Product from '../../../../components/Product/Product';
import { dummyData } from '../../../Main/Main';

function OtherCourses() {
  return (
    <div>
      <h4>Digər kurslar</h4>
      <Product data={dummyData} />
    </div>
  )
}

export default OtherCourses
