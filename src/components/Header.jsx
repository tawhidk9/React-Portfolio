import React from 'react'

const header = () => {
  return (
    <div id='about' className='flex items-center justify-center flex-col text-center pt-10 pb-6'>
        <h1 className='text-4xl md:text-6xl mb-1 md:mb-3 font-bold'>Tawhid Kamal</h1>
        <p className='text-lg md:text-2xl mb-3 font-medium'>Full Stack Web Developer</p>
        <p className='text-base max-w-xl mb-6 font-medium'>Make yourself at '/home'... (sorry) </p>
        <p className='text-base max-w-xl mb-6 font-medium'>
          NYC born and raised, I am a personal trainer turned web developer and am looking to hit the ground running in the development field! Little bit about myself, I am a nerd inside and out whether it's aboout eSports, TTRPGs, or LoTR! Feel free to contact me by filling out the contact form.
        </p>
         
    </div>
  )
}

export default header