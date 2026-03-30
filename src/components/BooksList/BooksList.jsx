import React, { use, useState } from 'react'
import ReadBooks from './toggleBook/ReadBooks'
import WishlistBooks from './toggleBook/WishlistBooks'
import { IoIosArrowDown } from "react-icons/io";


const BooksList = ({active, bookPromise}) => {
    const bookLists = use(bookPromise)
    const [WList, setWList]=useState([])
    
    const [toggleMenu, setToggleMenu]=useState('ReadBooks')
    
  return (
    <div className='max-w-[1171px] mx-auto'>
        {
            active==='Listed Books' && <div>
                <h1 className='text-3xl font-bold text-center bg-gray-300 mt-6 py-4'>Book</h1>
                <div className='text-center py-4'>
                    <button className='px-7 mx-auto flex items-center gap-2  rounded-md bg-green-500 text-white py-3'>Sort By <IoIosArrowDown />
</button>
                </div>

                <div className='mt-10 w-full md:mt-7 relative '>
                    <div className='  absolute -bottom-[3px] z-30'>
                    <button onClick={()=> setToggleMenu('ReadBooks')} className={`px-5 ${toggleMenu ==='ReadBooks'? 'border-l-3 border-t-3 bg-white border-r-3  border-black/40  ':''}  py-3  rounded-tl-[15px]  rounded-tr-[15px]`}>Read Books</button>

                    <button onClick={()=> setToggleMenu('WishlistBooks')} className={`px-5 ${toggleMenu ==='WishlistBooks'? 'border-l-3 bg-white border-t-3 border-r-3 rounded-l-t-[10px] border-black/40  ':''} transition-transform duration-900 rounded-tl-[15px] rounded-tr-[15px] py-3`}>Wishlist Books</button>
                    
                </div>
                <div className='w-full h-[3px] absolute z-10  bg-black/40'></div>
                </div>
                {
                    toggleMenu ==='ReadBooks' && <div className=' space-y-3 mt-7'>
                        <ReadBooks bookLists={bookLists} WList={WList} setWList={setWList}></ReadBooks>
                    </div>
                }
                {
                    toggleMenu ==='WishlistBooks' && <WishlistBooks WList={WList} setWList={setWList}></WishlistBooks>
                }
            </div>
        }

    </div>
  )
}

export default BooksList