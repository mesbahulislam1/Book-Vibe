import React from 'react'

const Navlinks = ({link}) => {
    const clickHandel=(event)=>{
       
    }
  return (
    <button  onClick={()=> clickHandel(link)} className='border border-[#23BE0A] text-'>{link}</button>
  )
}

export default Navlinks