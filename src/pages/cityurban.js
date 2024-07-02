import React from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import CityGallery from '../components/cityGallery';
import CategoryHero from '../components/ctegoryHero';

function CityUrbanPhotography() {
    document.title = "A-codes | City/Urban Photography";
  return (
    <>
    <Navigation />
    <div className='categoryPage'>
        <CategoryHero backgroundImg="/media/images/city.jpg" title="City/Urban Photography" descriiption="See these cities in the lens of a 4k Proffessional Camera"/>
        <h3><a href='/'>Home</a>/<a href='/#categories'>Categories</a>/ City/Urban Photography </h3>
        <div className='categoryImagesContainer'>
            <CityGallery/>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default CityUrbanPhotography;
