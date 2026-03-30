import React from 'react'

const MainBookList = ({book}) => {
  return (
    <div className='border border-black/10 p-5 rounded-2xl space-y-2'>
       <div className='bg-black/10 p-10 rounded-2xl'>
         <img src={book.image} alt="" className='h-[166px] w-[134px] rou mx-auto'/>
       </div>
        
        <div className='flex gap-3 mt-3'>
          <h4 className='text-[#23BE0A] rounded-full px-5 bg-[#23BE0A]/10 py-2'>Young Adult</h4>
          <h4 className='text-[#23BE0A] rounded-full px-5 bg-[#23BE0A]/10 py-2'>Identity</h4>
        </div>
        <h2 className='PlayfairDisplay text-2xl font-bold '>{book.bookName}</h2>
        <h3 className='text-black/80'>By: {book.author}</h3>

        <div className='flex justify-between items-center border-t border-dashed pt-2'>
          <h3>{book.category}</h3>
          <h3>{book.rating}*</h3>
        </div>
    </div>
  )
}

export default MainBookList