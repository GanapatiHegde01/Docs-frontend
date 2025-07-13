import React from 'react'

const Background = () => {
  return (
    <>
    <div className='fixed w-full h-screen'>
          <div className='absolute w-full py-10 flex justify-center text-zinc-600 font-semibold top-[5%]'>Documents.</div>
      <h1 className='absolute z-[2] text-[13vw] leading-none tracking-tighter top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 font-semibold'>Docs.</h1>
    </div>
    </>
  )
}

export default Background