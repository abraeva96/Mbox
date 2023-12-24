import React from 'react';
import next from '../assets/Img/left.svg';
import  img7 from '../assets/Img/7.png';
import  img8 from '../assets/Img/8.png';
import  img9 from '../assets/Img/9.png';
import  img10 from '../assets/Img/10.png';
import  img11 from '../assets/Img/11.png';
import  img12 from '../assets/Img/12.png';
import actors from '../assets/actors.png';
import soon from '../assets/2021 Coming soon.png';
// import mainImg from '../assets/pexels-anni-roenkae-3109816 1.png'



function Main({images,genres}) {
  return (
   
<React.Fragment>
    <div className="main">
        <div className="container">
            <div className="main__box">
                <div className='main__info'>
                <div className='item'></div>
                <h3>Trending TV Shows  </h3>
                <img  className='near' src={next} alt="" />
                </div>

             
                <div className="main__cards">
                            {
                                images.map((img, i) => {
                                    // console.log(img);
                                    return (
                                        <img className='images' key={i} src={img.src} alt="" />
                                                                               
                                    )
                                })
                            }
                           <img className='next' src={next} alt="" /> 
                </div>
            </div>
            <div className="main__box">
                <div className='main__info'>
                <div className='item'></div>
                <h3>Trending Movies    </h3>
                <img  className='near' src={next} alt="" />
                </div>

             
                <div className="main__cards">
               <img className='images' src={img7} alt="" />
               <img className='images' src={img8} alt="" />
               <img className='images' src={img9} alt="" />
               <img className='images' src={img10} alt="" />
               <img className='images' src={img11} alt="" />
               <img className='images' src={img12} alt="" />
                           <img className='next' src={next} alt="" /> 
                </div>
                <button className='btn2'>See more</button>
            </div>
            <div className="main__box">
                <div className='main__info'>
                <div className='item'></div>
                <h3>Popular Genres  </h3>
                <img  className='near' src={next} alt="" />
                </div>

             
                <div className="main__genres">
                    <div className="genres__box">
                            {
                                genres.map((img, i) => {
                                    return (
                                        <img className='genres' key={i} src={img.src} alt="" />
                                                                               
                                    )
                                })
                            }
                    </div>            
                </div>
            </div>
            <div className="main__box">
                
                <div className="main__cards">
                    <img className='actors' src={actors} alt="" />
                </div>
             
                
            </div>
            <div className="main__box">
                
                <div className="main__cards">
                    <img className='soon' src={soon} alt="" />
                </div>
             
                
            </div>
            <div className="main__box">
                
                <div className="main__card">
                    <div className='txt__info'>
                    <h2 className='txt'> Are You New Here ?</h2>
                    <h2 className='txt'> Don’t wait, Register Now.</h2>
                    </div>
                    <div>
                    <button>Register Now</button>
                    </div>
                </div>
                
             
                
            </div>
        </div>
    </div>
</React.Fragment>
  )
}

export default Main
