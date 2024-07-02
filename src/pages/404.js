import React from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

function Error404() {
  return (
    <>
    <div className='page404'>
      <div className='error'>
           <span>404!</span><span>This page could not be found.</span>
      </div>
      <div className='goHome'><a href='/'>Home</a></div>
    </div>
    
    <Footer />
    </>
  )
}

export default Error404;
