import React from 'react'

const s = {
  div: {
    padding: '60px 0',
    background: "#0096ff"
  },
  h2: {
    fontSize: '2em',
    textAlign: 'center',
    color: '#fff'
  }
}

function PageTitle({title}) {
  return (
    <div style={s.div}>
      <h2 style={s.h2}>{title}</h2>
    </div>
  )
}

export default PageTitle
