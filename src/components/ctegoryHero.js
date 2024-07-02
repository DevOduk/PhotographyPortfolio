import React from 'react'

function CategoryHero(props) {
  return (
    <div className='categoryHeroSection' style={{backgroundImage: `url(${props.backgroundImg})`}}>
      <div className='heroOverlay'>
        <h1>{props.title}</h1>
        <h6>{props.descriiption}</h6>
      </div>
    </div>
  )
}

export default CategoryHero;
