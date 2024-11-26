import React from 'react';
import { CarImages } from './carImagesData';
import Lightbox from "yet-another-react-lightbox";
import Download from "yet-another-react-lightbox/plugins/download";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


function Gallery() {

    
  //const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(-1);
  const captionsRef = React.useRef(null);

  const showImg = (index)=>{
    //setOpen(true);
    console.log(index);
    setIndex(index)
  }

  return (
    <>
    <Lightbox
    index={index}
        //open={open}
        open={index >= 0}
        //close={() => setOpen(false)}
        close={() => setIndex(-1)}
        plugins={[Captions, Download, Fullscreen, Slideshow, Thumbnails ]}
        captions={{
             showToggle: true,
             descriptionTextAlign: 'start'
            }}
        slides={CarImages}
      />
            <div className='galleryContainer'>
            {CarImages.map((image, index)=>{
                return (
                    <div className='pics' key={index} onClick={() => showImg(index)}>
                        <img src={image.src} alt={image.alt} />
                        <div><button><ion-icon name="heart-outline"></ion-icon></button><span>0</span></div>
                    </div>
                )
            })}
         </div>
    </>
  )
}

export default Gallery;
