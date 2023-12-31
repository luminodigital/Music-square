import React from 'react';
import './AboutArtistBuyer.css';
import video from '../../../Images/video.png';
import guitarChild from '../../../Images/guitarChild.png';
import cup from '../../../Images/cup.png';
import star from '../../../Images/star.png';
import dollar from '../../../Images/dollar.png';

const AboutArtistBuyer = () => {

    const handleClick = () => {
        
      }

  return (
    // <div>
    //   <div className='about-container'>
    //       <div left-container>
    //           <p style={{color: 'yellow', marginBottom: 0, fontWeight: 'bold'}}>About</p>
    //           <h1 style={{marginTop: 0, marginBottom: 0}}>Music Square</h1>
    //           <p>At Music Square, we believe that music has the extraordinary power to connect hearts, 
    //               transcend borders, and inspire change. Our platform was born from the vision of creating 
    //               a revolutionary space where talented musicians like you can thrive, collaborate, 
    //               and shine like never before. <br/>
    //               We understand the challenges musicians face in reaching a wider audience and 
    //               finding the right opportunities. <br/>
    //               Music Square harnesses the cutting-edge potential of blockchain technology to 
    //               revolutionize the music industry's freelance landscape. Our platform is built 
    //               on the pillars of transparency, security, and fair compensation, giving musicians 
    //               the confidence they deserve in their creative journey.
    //               </p>
    //               <button className='read-more-btn' onClick={handleClick} type='submit'> Read more</button>
    //       </div>
    //       <div className='right-container'>
    //       <img className='video-container'
    //           src = {video}
    //             alt="video"
    //           />
    //       </div>
    //   </div>

    //   <div className='artist-container' style={{display: 'flex'}}>
    //   <div className='artist-left-container'>
    //       <img className='child-container'
    //           src = {guitarChild}
    //             alt="guitarChild"
    //           />
    //       </div>
    //       <div className='artist-right-container'>
    //           <p style={{color: 'yellow', marginBottom: 0, fontWeight: 'bold'}}>For Artists</p>
    //           <h1 style={{marginTop: 0, marginBottom: 0}}>Reason you should
    //           <br/>choose Music Square</h1>
    //           <div className='point'>
    //             <img className='point-icon'
    //             src = {dollar}
    //               alt="dollar"
    //             />
    //             <p style={{fontWeight: 'bold'}}>Secure and Transparent Payments</p>
    //           </div>
    //           <p style={{marginBottom: 0, marginTop:0}}>Music Square utilizes cutting-edge b
    //           lockchain technology to ensure 
    //             prompt and transparent transactions</p>

    //             <div className='point'>
    //             <img className='point-icon'
    //             src = {cup}
    //               alt="cup"
    //             />
    //             <p style={{fontWeight: 'bold'}}>Global Exposure for Your Talent</p>
    //           </div>
    //           <p style={{marginBottom: 0, marginTop:0}}>Break free from geographic 
    //           constraints and make your music resonate worldwide.</p>

    //           <div className='point'>
    //             <img className='point-icon'
    //             src = {star}
    //               alt="star"
    //             />
    //             <p style={{fontWeight: 'bold'}}>Future of Music Freelancing</p>
    //           </div>
    //           <p style={{marginBottom: 0, marginTop:0}}>Embrace the future of music 
    //           freelancing with us, where creativity, innovation, and passion converge.</p>
    //           <button className='read-more-btn' onClick={handleClick} type='submit'
    //           style={{marginTop:20}}>
    //              Get Started</button>
    //   </div>
    //   </div>

    //   <div className='about-container'>
    //       <div left-container>
    //           <p style={{color: 'yellow', marginBottom: 0, fontWeight: 'bold'}}>For Buyers</p>
    //           <h1 style={{marginTop: 0, marginBottom: 0}}>Discover your <br/>
    //           Perfect Sound</h1>
    //           <p>Join our vibrant platform to collaborate with some of 
    //             <br/>the most exceptional minds in the music industry.
    //               </p>
    //       </div>
    //   </div>

    // </div>

    <div className="container pt-5 mt-5">
      <div className="d-flex about">
        <div className="row col-md-6">
          <div className="col-md-10">
          <p className="fs-5 " style={{color: '#ffe500', fontFamily:'GilroyBold', marginBottom: 0}}>About</p>
          <h1 style={{fontFamily:'GilroyBold'}}>Music Square</h1>
          <p className="fs-8 pr-5" style={{fontFamily:'GilroyLight', marginBottom: 0}}>
            At Music Square, we believe that music has the extraordinary power to connect hearts, 
                   transcend borders, and inspire change. Our platform was born from the vision of creating 
                   a revolutionary space where talented musicians like you can thrive, collaborate, 
                   and shine like never before. </p>
            <p className="fs-8 pr-5" style={{fontFamily:'GilroyLight'}}>We understand the challenges musicians face in reaching a wider audience and 
                   finding the right opportunities. </p>
            <p className="fs-8 pr-5" style={{fontFamily:'GilroyLight'}}>Music Square harnesses the cutting-edge potential of blockchain technology to 
                   revolutionize the music industry's freelance landscape. Our platform is built 
                   on the pillars of transparency, security, and fair compensation, giving musicians 
                   the confidence they deserve in their creative journey.
            </p>
            <button className="read-more-btn mt-2" onClick={handleClick} type='submit'> Read more</button>
            </div>
        </div>

        <div className="col-md-6 p-4">
          <div className="col-md-11">
            <div className="d-flex">
              <img className="video-container"
                  src = {video}
                  alt="video"
                  />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex pt-5 artist">
      <div className="col-md-6">
            <div className="col-md-10">
              <img className="child-container"
                  src = {guitarChild}
                  alt="guitarChild"
                  />
            </div>
        </div>
        <div className="row col-md-6" style={{marginLeft: 30}}>
          <div className="col-md-12">
            <p className="fs-5 " style={{color: '#ffe500', fontFamily:'GilroyBold', marginBottom: 0}}>For Artists</p>
            <h2 style={{fontFamily:'GilroyBold', marginBottom:20}}>Reason you should
               <br/>choose Music Square</h2>
            <div className="container">
              <div className="d-flex">
                <img className="point-icon" src={dollar} alt=""/>
                <p style={{fontFamily:'GilroyBold', marginBottom:0}}>Secure and Transparent Payments</p>
              </div>
              <p className='point'>Music Square utilizes cutting-edge blockchain technology to ensure 
                prompt and transparent transactions</p>
            </div>

            <div className="container">
              <div className="d-flex">
                <img className="point-icon" src={cup} alt=""/>
                <p style={{fontFamily:'GilroyBold', marginBottom:0}}>Global Exposure for Your Talent</p>
              </div>
              <p className='point'>Break free from geographic
               constraints and make your music resonate worldwide.</p>
            </div>

            <div className="container">
              <div className="d-flex">
                <img className="point-icon" src={star} alt=""/>
                <p style={{fontFamily:'GilroyBold', marginBottom:0}}>Future of Music Freelancing</p>
              </div>
              <p className='point'>Embrace the future of music freelancing with us, 
              where creativity, innovation, and passion converge.</p>
            </div>
            <button className='read-more-btn' onClick={handleClick} type='submit'
               >
                  Get Started</button>
          </div>
        </div>
      </div>

        <div className="container" style={{marginTop: 90}}>
          <div className="d-flex row md-col-6">
            <p className="fs-5 " style={{color: '#ffe500', fontFamily:'GilroyBold', marginBottom: 0}}>For Buyers</p>
            <h2 style={{fontFamily:'GilroyBold'}}>Discover your <br/>Perfect Sound</h2>
            <p style={{fontFamily:'GilroyLight'}}>Join our vibrant platform to collaborate with some of <br/> the
               most exceptional minds in the music industry.</p>
          </div>
        </div>
    </div>
  );
};

export default AboutArtistBuyer;