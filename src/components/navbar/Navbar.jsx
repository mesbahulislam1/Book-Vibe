import { useEffect } from "react";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";





const Navbar = ({NavLink, active, setActive}) => {
  

  const [showMenu, setShowMenu]=useState(false)
  const clickHandel = (link) => {
    setActive(link);
    
  }
  useEffect(() => {

    const resizeHandel=()=>{
      if (window.innerWidth >= 700) {
        setShowMenu(false)
      }
    }
    window.addEventListener('resize', resizeHandel)
    document.getElementById("resw").addEventListener('click', ()=>{
      setShowMenu(false)
    })
    
    return () => {
      window.removeEventListener('resize', resizeHandel)
      
    };
  }, [])

  return (
    <div className='max-w-[1171px] mx-auto flex justify-between items-center'>
      <div className="flex items-center gap-3">
        <h2 onClick={()=> setShowMenu(true)} className="text-2xl font-bold cursor-pointer md:hidden"><CiMenuBurger />

</h2>
        <h1 className='text-2xl font-bold'>Book Vibe</h1>
      </div>

      <div className='md:flex gap-3 mt-4 hidden'>
        
        {
          NavLink.map((link, index) => (
            <button
              key={index}
              onClick={() => clickHandel(link)}
              className={` px-4 py-3 rounded 
                ${active === link ? 'border border-[#23BE0A] text-[#23BE0A]' : ''}
              `}
            >
              {link}
            </button>
          ))
        }
      </div>
      <div id="resw" className={`w-full ${showMenu? 'left-0':'-left-1550'} transition-all duration-200 z-20 absolute top-0 h-screen bg-black/70 `}></div>
      <div className={`flex z-50 flex-col gap-3 ${showMenu ? 'left-0':'-left-1200'} transition-all duration-500 top-0 absolute px-3 w-[50%] h-screen bg-green-100`}>
        <button onClick={()=> setShowMenu(false)} className="bg-red-600 w-fit px-3 py-1 text-2xl text-white rounded-[5px]">X</button>
        {
          NavLink.map((link, index) => (
            <button
              key={index}
              onClick={() => clickHandel(link)}
              className={` px-4 py-3 rounded 
                ${active === link ? 'border border-[#23BE0A] text-[#23BE0A]' : ''}
              `}
            >
              {link}
            </button>
          ))
        }
      </div>

      <div className='flex gap-2'>
        <button className='px-5 bg-[#23BE0A] text-[18px] text-white py-3 rounded-[8px]'>Sign In</button>
        <button className='px-5 bg-[#59C6D2] text-[18px] text-white py-3 rounded-[8px]'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar;