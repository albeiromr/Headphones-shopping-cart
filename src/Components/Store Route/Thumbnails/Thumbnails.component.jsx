import React, {useState} from 'react';
import Proptypes from 'prop-types';
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';

const Thumbnails = ({productSelected, changePicture,thumbnail, setView, picture, show, setShow}) => {

    const firstPic = () => {
      // with this switch we change the big picture for the one that we choose from the this thumbnail
      switch (thumbnail[0]) {
        case productSelected.thumbnailfirstColor[0].img1:
          changePicture(productSelected.firstColor[0].img1);
          break;
        case productSelected.thumbnailsecondColor[0].img1:
          changePicture(productSelected.secondColor[0].img1);
          break;
        case productSelected.thumbnailthirdColor[0].img1:
          changePicture(productSelected.thirdColor[0].img1);
          break;
        default:
      }
  
      if(thumbnail[0] === 
        // eslint-disable-next-line
        productSelected.thumbnailfirstColor[0].img1 && picture === productSelected.firstColor[0].img1 ||
        // eslint-disable-next-line
        productSelected.thumbnailsecondColor[0].img1 && picture === productSelected.secondColor[0].img1 ||
        // eslint-disable-next-line
        productSelected.thumbnailthirdColor[0].img1 && picture === productSelected.thirdColor[0].img1
        ) {
          return;
        } else {
          setView(false)
        }
      
    };

    const secondPic = () => {
      // with this switch we change the big picture for the one that we choose from the this thumbnail
      switch (thumbnail[1]) {
        case productSelected.thumbnailfirstColor[1].img2:
          changePicture(productSelected.firstColor[1].img2);
          break;
        case productSelected.thumbnailsecondColor[1].img2:
          changePicture(productSelected.secondColor[1].img2);
          break;
        case productSelected.thumbnailthirdColor[1].img2:
          changePicture(productSelected.thirdColor[1].img2);
          break;
        default:
      }
      if(thumbnail[1] === 
        // eslint-disable-next-line
        productSelected.thumbnailfirstColor[1].img2 && picture === productSelected.firstColor[1].img2 ||
        // eslint-disable-next-line
        productSelected.thumbnailsecondColor[1].img2 && picture === productSelected.secondColor[1].img2 ||
        // eslint-disable-next-line
        productSelected.thumbnailthirdColor[1].img2 && picture === productSelected.thirdColor[1].img2
        ) {
          return;
        } else {
          setView(false)
        }
    };

    // we use the following state and function to show the spiner or the thumbnail image, depending
    // of is it is loaded or not
    const [ showImage2, setShowImage2] = useState(false)

    const handleLoad = () => {
      setTimeout(() => {
        setShow(true)
      }, 200)
    }

    

    return (
        <div className='thumbnail'>

          

            <div onClick={firstPic} className='thumbnail__img1'>

            <img  className='thumbnail__picture-signal' src={thumbnail[0]} alt="Product" onLoad={() => {setShowImage2(true)}}/> 

              {show === true && showImage2 === true ?
              <img className='thumbnail__picture' src={thumbnail[0]} alt="Product"/> :
              
              <div class="st-circle">
                <div class="st-circle1 sk-child"></div>
                <div class="st-circle2 sk-child"></div>
                <div class="st-circle3 sk-child"></div>
                <div class="st-circle4 sk-child"></div>
                <div class="st-circle5 sk-child"></div>
                <div class="st-circle6 sk-child"></div>
                <div class="st-circle7 sk-child"></div>
                <div class="st-circle8 sk-child"></div>
                <div class="st-circle9 sk-child"></div>
                <div class="st-circle10 sk-child"></div>
                <div class="st-circle11 sk-child"></div>
                <div class="st-circle12 sk-child"></div>
              </div>
            }
   

            </div>

            <div onClick={secondPic} className='thumbnail__img2'>

            <img  className='thumbnail__picture-signal' src={thumbnail[1]} alt="Product" onLoad={handleLoad}/> 

            {show === true && showImage2 === true? 
            <img  className='thumbnail__picture' src={thumbnail[1]} alt="Product"/> :
            
            <div class="st-circle">
             <div class="st-circle1 sk-child"></div>
             <div class="st-circle2 sk-child"></div>
             <div class="st-circle3 sk-child"></div>
             <div class="st-circle4 sk-child"></div>
             <div class="st-circle5 sk-child"></div>
             <div class="st-circle6 sk-child"></div>
             <div class="st-circle7 sk-child"></div>
             <div class="st-circle8 sk-child"></div>
             <div class="st-circle9 sk-child"></div>
             <div class="st-circle10 sk-child"></div>
             <div class="st-circle11 sk-child"></div>
             <div class="st-circle12 sk-child"></div>
           </div>

          }
            
             

             
          

             

                

            </div>

        </div>
    )
};

// component documentation

Thumbnails.propTypes = {
  productSelected: Proptypes.object.isRequired,
  changePicture: Proptypes.func.isRequired,
  thumbnail: Proptypes.array.isRequired,
  picture: Proptypes.string.isRequired,
  show: Proptypes.bool.isRequired,
  setShow: Proptypes.func.isRequired,
};

export default Thumbnails;
