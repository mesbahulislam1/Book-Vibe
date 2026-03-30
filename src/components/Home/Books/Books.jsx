import React, { use } from 'react'
import MainBookList from './MainBookList'

const Books = ({active, bookPromise}) => {
  const bookData = use(bookPromise)
  return (

    active === 'Home' && <div className='max-w-[1171px] mx-auto'>
      <h1 className=' text-[40px] font-bold PlayfairDisplay text-center mb-5'>Books</h1>
        
             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7'>
                {
                  bookData.map((book)=>{
                    
                    return <MainBookList key={book.bookId} book={book}></MainBookList>
                  })
                }
            </div>
        
    </div>
  )
}

export default Books