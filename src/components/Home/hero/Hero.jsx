import React from 'react'
import HeroImg from '../../../assets/pngwing-1.png'
const Hero = ({active}) => {
  return (
   
      active === 'Home' && <div className='flex flex-col-reverse md:flex-row max-w-[1171px] rounded-2xl my-8 mx-auto justify-between items-center bg-black/5 md:p-[110px] p-[50px]'>
      <div className='max-w-[526px] text-center md:text-left'>
        <h1 className=' text-[30px] sm:text-[46px] md:text-[56px] PlayfairDisplay'>Books to freshen up your bookshelf</h1>
        <button className='text-white mt-6 bg-green-500 font-bold px-5 py-3 rounded-md'>View The List</button>
      </div>
      
        <img src={HeroImg} alt="" className=''/>
      
        
        
    </div>
    
    
  )
}

export default Hero