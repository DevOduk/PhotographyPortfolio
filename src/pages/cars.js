import React, { useEffect, useState } from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import CategoryHero from '../components/ctegoryHero';
import Gallery from '../components/gallery';

function CarsPhotography() {
    document.title = "A-codes | Cars/Vehicles Photography";
  return (
    <>
    <Navigation />
    <div className='categoryPage'>
        <CategoryHero backgroundImg="/media/images/wallpaperflare.com_wallpaper.jpg" title="Cars & Vehicles Photography" descriiption="See what nature has to offer in 4k Proffessional Camera"/>
        <h3><a href='/'>Home</a>/ <a href='/#categories'>Categories</a> / Cars/Vehicles Photography </h3>
        <div className='categoryImagesContainer'>
            <Gallery />
        </div>
    </div>
    <Footer />
    </>
  )
}

export default CarsPhotography;
