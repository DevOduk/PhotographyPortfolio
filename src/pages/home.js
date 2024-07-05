import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import { useForm, ValidationError } from '@formspree/react';
import CountUp from 'react-countup';

function ContactForm() {
    const [answer, setAnswer] = useState('');
    const [state, handleSubmit] = useForm("xkndqlgr");

    const checkAnswer = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Check if the answer is correct
        if (parseInt(answer) !== 18) {
            alert("Incorrect answer. Try again!");
        } else {
            // If the answer is correct, proceed with form submission
            handleSubmit(e); // Submit the form
        }
    };
    if (state.succeeded) {
        return <p className='container text-center p-4 p-flex justify-content-center align-content-center' style={{minHeight: "500px", display: "flex", alignItems: "center", color: "green", backgroundColor: "whitesmoke"}}>Congratulations! Your message has been sent successfully!</p>;
    }
    return (
       <form method='POST' className='container contact' id='contact' action='https://formspree.io/f/xkndqlgr' onSubmit={checkAnswer}>
         <div className="row">
           <div className="col">
             <input type="text" className="form-control" name='senderName' placeholder="Full Name" required/>
           </div>
           <div className="col">
             <input type="email" className="form-control" name='senderEmail' placeholder="Email address" />
           </div>
         </div>
         <div className="form-group mt-3 mb-3">
            <textarea className="form-control" required name='typedMessage' id="exampleFormControlTextarea1" rows="6" placeholder='Enter message'></textarea>
          </div>
          
          <div className="col">
            <label htmlFor='service'  className='mt-2 mb-1'>What service are you looking to get?</label>
             <select type="text" className="form-control" name='service' placeholder="Full Name" required >
              <option>Select Service </option>
              <option>Photography Service </option>
              <option>Videography Service </option>
             </select>
           </div>
           
           <div className="col">
            <label htmlFor='service' className='mt-2 mb-1'>What event are you planning on?</label>
             <select type="text" className="form-control" name='service' placeholder="Full Name" required >
              <option>Select Service </option>
              <option>Car </option>
              <option>Event </option>
              <option>Landscape </option>
              <option>People/Family </option>
              <option>City/Urban </option>
             </select>
           </div>
          <div className='btnSend'><span> 13 + 5 = <input type='text' required onChange={(e) => setAnswer(e.target.value)}/></span>  <button type='submit' className='butn'>Send</button> </div>
          <br id='blogs'/>
       </form >
    );
  }


function Home() {
  function startNumberCounter(valueDisplays, interval) {
    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }
  
  function NumberCounterContainer() {
    useEffect(() => {
      const valueDisplays = document.querySelectorAll(".num");
      const interval = 5000;
      startNumberCounter(valueDisplays, interval);
    }, []);
  
    return null; // Render nothing
  }


  return (
    <div className="Home">
      <Navigation />
      <div className='mainHome'>
            <div className='heroPage'>
                    <div className='heading'>
                      <h1>CLASSIC A-LEVEL PHOTOGRAPHY & <br/> FILM PRODUCTION</h1>
                      <h4>
                          You need a skilled photographer and videographer for your
                          epic party with family and friends? I am here for the<br/> 
                          unexpected moments, capturing the joyous of emblems.<br/>
                          You feel the vibe? <a href='#'> Let’s get it! </a>
                      </h4>
                    </div>
                    <div className='hire'>
                          <a href='/'> <button type='' >Hire us <i className="bi bi-arrow-right"></i></button> </a>
                    </div>
            </div>
      </div>

      <div className='container statistics'>
        
        <div>
             <h1><CountUp className='CountUp' start={0} end={38} duration={4} delay={0}/>+</h1>
             <h4>Happy Clients</h4>
        </div>
        <div>
             <h1><CountUp className='CountUp' start={0} end={73} duration={4} delay={0}/>+</h1>
             <h4>Photos cherished for ∞</h4>
        </div>
        <div>
             <h1><CountUp className='CountUp' start={0} end={65} duration={4} delay={0}/>+</h1>
             <h4>Reviews (5 Stars)</h4>
        </div>
        <div>
             <h1><CountUp className='CountUp' start={0} end={99} duration={4} delay={0}/>%</h1>
             <h4>Client satisfaction</h4>
        </div>
      </div>
<br id='categories'/>

        <h1 className='h1'>CATEGORIES</h1>
        <h2 className='h2'>The are some of the top categories in my database</h2>
      <div className='categoriesContainer'>
        <div className='category'>
          <a className='imgWrapperCategory' href='/City-Urban-Photography'>
            <img src='/media/images/city.jpg' loading='lazy' alt=''/>
            <div className='passthrough'>
                 View Gallery
            </div>
          </a>
          <div className='topPanel'>
                <h1>City/Urban Photography</h1>
                <h5>Eye catching Infrastructure</h5>
                <a className='viewGallery' href='/City-Urban-Photography'> View Gallery </a>
          </div>
        </div>
        
        <div className='category'>
          <div className='topPanel'>
                <h1>Landscape Photography</h1>
                <h5>Beautiful Nature</h5>
                <a className='viewGallery' href='/Landscape-Photography'> View Gallery </a>
          </div>
          <a className='imgWrapperCategory' href='/Landscape-Photography'>
            <img src='/media/images/landscape.jpg' loading='lazy' alt=''/>
            <div className='passthrough'>
                 View Gallery
            </div>
          </a>
        </div>


          <div className='category'>
            <a className='imgWrapperCategory' href='/Cars-Vehicles-Photography'>
              <img src='/media/images/wallpaperflare.com_wallpaper.jpg' loading='lazy'  alt=''/>
              <div className='passthrough'>
                   View Gallery
              </div>
            </a>
            <div className='topPanel'>
                  <h1>Cars/Vehicles Photography</h1>
                  <h5>explore the beauty of 4-whellers</h5>
                  <a className='viewGallery' href='/Cars-Vehicles-Photography'> View Gallery </a>
            </div>
          </div>



        <div className='category'>
          <div className='topPanel'>
                <h1>Events/Wedding Photography</h1>
                <h5>Beautiful events & souls tied together ❤️</h5>
                <a className='viewGallery' href='/events-weddings&couples-Photography'> View Gallery </a>
          </div>
          <a className='imgWrapperCategory' href='/events-weddings&couples-Photography'>
            <img src='/media/images/Couples-Photographer-61.jpg' loading='lazy'  alt=''/>
            <div className='passthrough'>
                 View Gallery
            </div>
          </a>
        </div>


          <div className='category'>
            <a className='imgWrapperCategory' href='/people-humanity'>
              <img src='/media/images/adumu-safaris-activities-cultural-excursions-16-821161558.jpg' loading='lazy'  alt=''/>
              <div className='passthrough'>
                   View Gallery
              </div>
            </a>
            <div className='topPanel'>
                  <h1>People/Humanity Photography</h1>
                  <h5>Share the smiles | Appreciate diversity </h5>
                  <a className='viewGallery' href='/people-humanity'> View Gallery </a>
            </div>
          </div>


      </div>


      <h1 className='h1'>TESTIMONIALS</h1>
        <h4 style={{textAlign: "center"}}>Listen to what people have to say about us</h4>
      <div className='videoBackground'>
      <video src="/media/videos/F82-M4-Cinematic-4K.mp4" autoPlay muted loop loading='lazy' />
            <div>
              <h2>"We love their creative and laid back style.<br/> Best duo in the industry.” </h2>
              <p><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon></p>
              <p><i>~ Austine & J Co.</i></p>
            </div>
      <br id='about'/>
      </div>



      <div className='container about'>
        <img src='/media/images/man-7799486_960_720.webp' loading='lazy'  alt='man-7799486_960_720.webp'/>
        <div className='aboutContent'>
          <h3>About</h3>
          <p>
              Greetings! This is A-codes Photography, a passionate photography studio dedicated to immortalizing life's most precious moments. With a knack for storytelling and a keen eye for detail, 
              I specialize in capturing the authentic beauty of urban landscapes, the tranquility of nature, and the heartfelt connections between individuals. 
              <br/> <br/>
              Whether it's documenting milestone events, creating captivating visual narratives, or simply seizing the beauty of everyday life, I strive to craft images that resonate deeply with viewers. 
              Committed to exceeding expectations, I approach each project with creativity, professionalism, and a genuine desire to deliver exceptional results. Let's collaborate and transform your vision 
              into timeless photographs that capture the essence of every moment.
          </p>
        </div>
      </div>
        <br id='contact'/>

      <h1 className='h1'>CONTACT US</h1>
        <h4 style={{textAlign: "center"}}>Send us a message and we will put you in our schedule. et's tak!</h4>


       <ContactForm />
       <h5 className='container text-center bg-danger text-light pt-5 pb-5'>"If you like something, rock it. If you want to rock a cape every day, go for it."<br/><b><i>Post Malone</i></b>
</h5>
    

       <h1 className='h1'>Blog Posts</h1>
        <h4 style={{textAlign: "center"}}>FEATURED</h4>
        <div className='blogs container'>
          <div className='blogItem'>
            <a href='/#'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw6pTCD-ACc3SeluJm_vOKl86cXLBeZr_qsg&usqp=CAU' alt='/media/images/man-7799486_960_720.webp' />
                <div className='overlay d-flex flex-column justify-content-end text-center p-4'>
                  <h3>PHOTOGRAPHY/VIDEOGRAPHY</h3>
                  <p>10 Tips for taking professional level photos for Beginners</p>
                </div>
            </a>
          </div>
          <div className='blogItem'>
            <a href='/#'>
                <img src='https://www.tourmyindia.com/blog//wp-content/uploads/2019/11/Romantic-Honeymoon-Destinations-around-the-World.jpg' alt='/media/images/man-7799486_960_720.webp' />
                <div className='overlay d-flex flex-column justify-content-end text-center p-4'>
                  <h3>WEDDING/COUPLES</h3>
                  <p>Top 7 Most epic honeymoon destination ideas for newly weds (Or not?)</p>
                </div>
            </a>
          </div>

        </div>

        <h1 className='p-4 text-center'>Feeling lovely? Let's find you smething!</h1>
        <div className='calltoAction mt-5 mb-5'>
            <h2>Well, what next,</h2>
            <h1>READY TO MAKE THAT DREAM <br/>A REALITY?</h1>
            <p>Click straight over to my contact page, send me a message, and let's make this happen!</p>
            <a href='#contact'><button >Find Me</button></a>
        </div>
        <Footer />
    </div>
  );
}

export default Home;
