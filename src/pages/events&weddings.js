import React, { useEffect, useState } from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import CategoryHero from '../components/ctegoryHero';
import EventsGallery from '../components/eventsGallery';

function EventsPhotography() {
    document.title = "A-codes | Landscape Photography";
  return (
    <>
    <Navigation />
    <div className='categoryPage'>
        <CategoryHero backgroundImg="/media/images/background.jpg" title="Events, Weddings and Couples Photography" descriiption="Share the love  in 4k Proffessional Camera. I can feel the joy!"/>
        <h3><a href='/'>Home</a>/ <a href='/#categories'>Categories</a> / Events, couples & weddings Photography </h3>
        <div className='categoryImagesContainer'>
            <EventsGallery />
        </div>
    </div>
    <Footer />
    </>
  )
}

export default EventsPhotography;