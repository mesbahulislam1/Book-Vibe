import { IoIosArrowDown } from "react-icons/io";



const Modal = ({selectedBook, WList,setWList }) => {
    
    
    const whiteList=(wList)=>{
      setWList([...WList, wList])
      alert('Added')
    }
  return (
    <dialog id="my_modal_2" className="modal ">
          <div className="modal-box max-w-[1171px] mx-auto ">
            <div className='flex flex-col md:flex-row text-center md:text-left items-center gap-5'>
                <img src={selectedBook?.image} alt="" className='w-[425px] h-[564px]' />
                <div className=''>
                    <h1 className='text-[40px] PlayfairDisplay font-bold'>{selectedBook?.bookName}</h1>
                    <h3 className="text-black/80">By : {selectedBook?.author}</h3>

                    <p className=" ">{selectedBook?.category} </p>

                    <p>Review: {selectedBook?.review}</p>
                    <div className="flex items-center gap-2 flex-col md:flex-row">
                                  <span>Tag</span>
                    
                                  {selectedBook?.tags?.map((tag, i) => (
                                    <p
                                      key={i}
                                      className="text-[#23BE0A] rounded-full px-5 bg-[#23BE0A]/10 py-1.5"
                                    >
                                      #{tag}
                                    </p>
                                  ))}
                    
                                  
                                </div>

                                <div>
                                    <h2> <span className='pr-10'>Number of Pages:</span>{selectedBook?.totalPages}</h2>
                                    <h2><span className='pr-25'>Publisher:</span>{selectedBook?.publisher}</h2>
                                    <h2><span className='pr-9'>Year of Publishing:</span>{selectedBook?.yearOfPublishing}</h2>
                                    <h2><span className='pr-30'>Rating:</span>{selectedBook?.rating}</h2>

                                </div>
                                <div className='justify-center md:justify-start mx-auto flex gap-3'>
                                    <button className='btn '>Read</button>
                                    <button onClick={()=> whiteList(selectedBook)} className='btn bg-[#50B1C9] text-white'>Wishlist</button>
                                </div>
                </div>
                
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
  )
}

export default Modal
