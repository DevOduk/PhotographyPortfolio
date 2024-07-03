import React, { useState, useEffect } from 'react';

function Navigation() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if(window.innerWidth >= 800){
      setOpen(true)
    } else {
      setOpen(false)
    }

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos < currentScrollPos || currentScrollPos === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const navStyle = {
    position: isTop ? 'absolute' : 'fixed',
    top: isTop ? '0' : 'auto',
    backgroundColor: isTop ? 'transparent' : 'whitesmoke',
    color: isTop ? 'white' : 'black',
    boxShadow: isTop ? 'none' : '1px 1px 15px rgba(102, 51, 153, 0.558)'
  };
  const color = {
    color: isTop ? 'white' : 'black'
  };


  function toggleMenu() {
    setOpen(!open);
    if (!open) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

  function handleMenuItemClick() {
    setOpen(false);
    document.body.classList.remove('menu-open');
  }


  function explore() {
    window.location.href = "/#contact";
    window.location.reload()
  }

  return (
    <nav className='NavigationBar' style={navStyle}>
    <div className='navWrapper'>
        <div className='socialsDiv'>
              <a style={color} href='https://www.instagram.com/' target='_blank'><i className="fa-brands fa-instagram"></i></a>
              <a style={color} href='https://www.facebook.com/profile.php?id=100069487444055' target='_blank'><i className="fa-brands fa-facebook-f"></i></a>
              <a style={color} href='https://www.youtube.com/' target='_blank'><i className="fa-brands fa-youtube"></i></a>
              <a style={color} href='https://spoti.fi/3UgKthL' target='_blank'><i className="fa-brands fa-spotify"></i></a>
              <a style={color} href='https://bit.ly/3Q0NW1q' target='_blank'><i className="fa-solid fa-blog"></i></a>
        </div>
        <div className='centerNav'>
          <a href='/home' style={color}><h2 className='logo'>A-codes</h2></a>
          {open && (
          <ul className='navItems'style={{display: open && window.innerWidth <= 800 ? 'none' : 'block' }}>
              <a style={color} onClick={handleMenuItemClick} href='/#' className='active'> <li>home.</li></a>
              <a style={color} onClick={handleMenuItemClick} href='/#categories'> <li>categories.</li></a>
              <a style={color} onClick={handleMenuItemClick} href='/#about'> <li>about.</li></a>
              <a style={color} onClick={handleMenuItemClick} href='/#contact'> <li>contacts.</li></a>
              <a style={color} onClick={handleMenuItemClick} href='/#blogs'> <li>blogs.</li></a>
            </ul>
            )}
        </div>
        <div className='rightWrapper'>
              <button className='btn' onClick={explore}>Explore</button>
              <button className='menuBars' onClick={toggleMenu}>{!open ? <ion-icon name="menu-outline"></ion-icon> : <ion-icon name="close-outline"></ion-icon>}</button>
        </div>
      </div>
  </nav>
  )
}

export default Navigation;
