import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { toast } from 'react-toastify';


const WishlistBooks = ({WList,setWList}) => {
  

  const filterList = (event)=>{
    console.log(event)
    const filterBook= WList.filter((item)=> event.bookId !== item.bookId)
    setWList(filterBook)
    toast.success('Removed Successfully')
  }
  return (
    <div className=' space-y-2 mt-7'>
      {
        WList.length === 0 ?
        <div>
          <h1 className='text-3xl text-center pt-17 font-bold'>Not Added</h1>
        </div>
         :
        WList.map((list)=> {
          return <div
                    key={list.bookId}
                    className="border border-black/20 rounded-2xl flex flex-col md:flex-row p-5 gap-7 items-center text-center md:text-left"
                  >
                    <div className="py-5 px-15 rounded-2xl bg-black/10">
                      <img src={list.image} alt="" className="w-[129px] h-[172px]" />
                    </div>
          
                    <div>
                      <h2 className="text-[#131313] PlayfairDisplay text-2xl font-bold">
                        {list.bookName}
                      </h2>
          
                      <h3 className="text-black/80">By : {list.author}</h3>
          
                      <div className="flex items-center gap-2 flex-col md:flex-row">
                        <span>Tag</span>
          
                        {list.tags.map((tag, i) => (
                          <p
                            key={i}
                            className="text-[#23BE0A] rounded-full px-5 bg-[#23BE0A]/10 py-1.5"
                          >
                            #{tag}
                          </p>
                        ))}
          
                        <p className="flex items-center gap-2 text-black/60">
                          <CiLocationOn className="text-[20px]" />
                          Year: {list.yearOfPublishing}
                        </p>
                      </div>
          
                      <div className="flex gap-3 text-black/60 flex-col md:flex-row">
                        <span className="flex items-center gap-1 ">
                          <FiUsers />
                          Publisher: {list.publisher}
                        </span>
          
                        <span className="flex items-center gap-1">
                          <IoDocumentTextOutline />
                          Page {list.totalPages}
                        </span>
                      </div>
          
                      <div className="flex border-t border-black/40 gap-2 pt-3 mt-4 flex-col md:flex-row">
                        <p className="bg-[#328EFF]/10 text-[#328EFF] px-5 py-1.5 rounded-full">
                          Category: {list.category}
                        </p>
          
                        <p className="bg-[#FFAC33]/10 text-[#FFAC33] px-5 py-1.5 rounded-full">
                          Rating: {list.rating}
                        </p>
          
                        <button onClick={()=> filterList(list)} className='btn btn-success'>Remove</button>
                      </div>
                    </div>
                  </div>
        })
      }
    </div>
  )
}

export default WishlistBooks
