import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section style={{textAlign: 'center'}} className='minH'>
      <h1 style={{fontSize: '3em'}}>Ooops...</h1>
      <p>Page Not Found, <Link to='/' style={{textDecoration: 'underline'}}>click to go back</Link></p>
    </section>
  )
}

export default NotFound
