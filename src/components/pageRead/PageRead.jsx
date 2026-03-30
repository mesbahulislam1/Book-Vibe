import React from 'react'

const PageRead = ({active}) => {
  return (
    <div className='max-w-[1171px] mx-auto'>
        {
            active==='Pages to Read' && <div>
               <h2 className='text-center text-3xl mt-31'>Page Not Found</h2>
            </div>
        }
    </div>
  )
}

export default PageRead