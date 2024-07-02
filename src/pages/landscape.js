import React, { useEffect, useState } from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import CategoryHero from '../components/ctegoryHero';
import LandscapeGallery from '../components/landscapeGallery';

function LandscapePhotography() {
    document.title = "A-codes | Landscape Photography";
  return (
    <>
    <Navigation />
    <div className='categoryPage'>
        <CategoryHero backgroundImg="/media/images/landscape.jpg" title="Landscape Photography" descriiption="See what nature has to offer in 4k Proffessional Camera"/>
        <h3><a href='/'>Home</a>/ <a href='/#categories'>Categories</a> / Landscape Photography </h3>
        <div className='categoryImagesContainer'>
            <LandscapeGallery />
        </div>
    </div>
    <Footer />
    </>
  )
}

export default LandscapePhotography;
