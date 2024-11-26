import React, { useEffect, useState } from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import CategoryHero from '../components/ctegoryHero';
import HumanityGallery from '../components/humanityGallery';

function HumanityPhotography() {
    document.title = "A-codes | People/Humanity Photography Photography";
  return (
    <>
    <Navigation />
    <div className='categoryPage'>
        <CategoryHero backgroundImg="/media/images/background.jpg" title="Events, Weddings and Couples Photography" descriiption="Share the love  in 4k Proffessional Camera. I can feel the joy!"/>
        <h3><a href='/'>Home</a>/ <a href='/#categories'>Categories</a> / People/Humanity Photography </h3>
        <div className='categoryImagesContainer'>
            <HumanityGallery />
        </div>
    </div>
    <Footer />
    </>
  )
}

export default HumanityPhotography;