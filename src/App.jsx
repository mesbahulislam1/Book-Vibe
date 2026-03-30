import React, { Suspense, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Books from './components/Home/Books/Books'
import BooksList from './components/BooksList/BooksList';
import Hero from './components/Home/hero/Hero';
import { ToastContainer } from 'react-toastify';
import PageRead from './components/pageRead/PageRead';



const boodData =async()=>{
  const res = await fetch('/booksData.json');
  return res.json()
}
const App = () => {
  const NavLink = ['Home', 'Listed Books', 'Pages to Read'];
  const [active, setActive] = useState('Home');
  
  const bookPromise =boodData()

  return (
    <div className='px-5 mb-20'>
      <Navbar NavLink={NavLink} active={active} setActive={setActive}></Navbar>
      <Hero active={active}></Hero>
      <Suspense fallback={<h2 className='text-3xl text-center'>Loding.......</h2>}>
        <Books bookPromise={bookPromise} active={active} setActive={setActive}  NavLink={NavLink}></Books>
      </Suspense>
      <Suspense fallback={<></>}>
        <BooksList active={active} bookPromise={bookPromise}></BooksList>
      </Suspense>
      <PageRead active={active}></PageRead>

      <ToastContainer />
    </div>
  )
}

export default App