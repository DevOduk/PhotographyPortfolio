import React from 'react'

function Footer() {
  
  function acceptCookies() {
    document.cookie = "acceptCookies=True;";
    //alert("You accepted cookies");
    window.location.reload();
  };
  function rejectCookies() {
    //alert("You rejected cookies");
    document.cookie = "acceptCookies=False;";
    window.location.reload();
  };

  function getCookies() {
    const cookies = document.cookie.split("; ");
    const cookiesObject = {};

    cookies.forEach(function(cookie) {
        const parts = cookie.split("=");
        const key = parts[0];
        const value = parts.slice(1).join("="); // Join remaining parts as the value may contain "="
        cookiesObject[key] = value;
    });
    return cookiesObject;
}
const cookies = getCookies();
const CookieBanner = () => {
  if (!cookies.acceptCookies) {
    return (
      <>
          <div className='cookies'>
            <p>By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run effectively.</p>
            <div>
              <button className='accept' onClick={acceptCookies}>Accept</button>
              <button className='reject' onClick={rejectCookies}>Reject All</button>
            </div>
          </div>
      </>
    );
  } else {
    return null; // Render nothing if the acceptCookies value is not "False" or "True"
  }
}


  return (
    <div>
        <footer className='p-2 text-center d-flex flex-column gap-2'>
            <div className='d-flex flex-row justify-content-center gap-3'>
                  <a href=''><i className="fa-brands fa-instagram"></i></a>
                  <a href=''><i className="fa-brands fa-facebook-f"></i></a>
                  <a href=''><i className="fa-brands fa-youtube"></i></a>
                  <a href=''><i className="fa-brands fa-spotify"></i></a>
                  <a href=''><i className="fa-solid fa-blog"></i></a>
            </div>
          <p>Copyright ©2024 All Rights Reserved <br />
          Designed & Developed by Austine Codes <a href='https://github.com/DevOduk'>See Portfolio</a></p>
        </footer>
        <CookieBanner />
    </div>
  )
}

export default Footer
