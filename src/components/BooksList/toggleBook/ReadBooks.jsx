import { CiLocationOn } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import Modal from "../Modal";
import { useState } from "react";

const ReadBooks = ({ bookLists,WList,setWList }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const modalOpen = (book) => {
    setSelectedBook(book);
    document.getElementById("my_modal_2").showModal();
  };

  return (
    <div className=" mt-21 space-y-3">
      {bookLists.map((book, index) => (
        <div
          key={index}
          className="border border-black/20 rounded-2xl flex flex-col md:flex-row p-5 gap-7 items-center text-center md:text-left"
        >
          <div className="py-5 px-15 rounded-2xl bg-black/10">
            <img src={book.image} alt="" className="w-[129px] h-[172px]" />
          </div>

          <div>
            <h2 className="text-[#131313] PlayfairDisplay text-2xl font-bold">
              {book.bookName}
            </h2>

            <h3 className="text-black/80">By : {book.author}</h3>

            <div className="flex items-center gap-2 flex-col md:flex-row">
              <span>Tag</span>

              {book.tags.map((tag, i) => (
                <p
                  key={i}
                  className="text-[#23BE0A] rounded-full px-5 bg-[#23BE0A]/10 py-1.5"
                >
                  #{tag}
                </p>
              ))}

              <p className="flex items-center gap-2 text-black/60">
                <CiLocationOn className="text-[20px]" />
                Year: {book.yearOfPublishing}
              </p>
            </div>

            <div className="flex gap-3 text-black/60 flex-col md:flex-row">
              <span className="flex items-center gap-1 ">
                <FiUsers />
                Publisher: {book.publisher}
              </span>

              <span className="flex items-center gap-1">
                <IoDocumentTextOutline />
                Page {book.totalPages}
              </span>
            </div>

            <div className="flex border-t border-black/40 gap-2 pt-3 mt-4 flex-col md:flex-row">
              <p className="bg-[#328EFF]/10 text-[#328EFF] px-5 py-1.5 rounded-full">
                Category: {book.category}
              </p>

              <p className="bg-[#FFAC33]/10 text-[#FFAC33] px-5 py-1.5 rounded-full">
                Rating: {book.rating}
              </p>

              <button
                onClick={() => modalOpen(book)}
                className="bg-[#23BE0A] text-white px-5 py-1.5 rounded-full"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* ✅ Modal MUST be inside return */}
      <Modal selectedBook={selectedBook} WList={WList} setWList={setWList}/>
    </div>
  );
};

export default ReadBooks;