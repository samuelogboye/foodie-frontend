import React from 'react';
import heroImg from './assets/heroImg.png';


function Hero () {

  return(
    <div className='flex justify-center items-center max-w-screen ml-10 mr-10 gap-5'>
      <div>
        <img src={ heroImg } alt="hero-pix" />
      </div>
      <div>
        <div className='max-w-lg'>
          <h1 className='text-7xl font-karla tracking-tighter'>Healthy <span className='text-brandColor'>Food</span> Wealthy <span className='text-brandColor'>Lifestyle</span></h1>
          <p className='text-md mt-9 font-spectral'>Discover culinary excellence at Foodie and explore a diverse menu, from hearty meals to fresh salads and delightful desserts, all with seamless online ordering and swift delivery.</p>    
        </div>
        <div className='mt-9'>
          <button className='bg-brandColor hover:bg-slate-400 text-white font-bold py-2 px-4 rounded-full'>Order Now</button>
        </div>
      </div>
    </div>
  )
}


export default Hero;