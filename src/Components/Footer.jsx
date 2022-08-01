import React from 'react'

const Footer = () => {
  return (
    <>
      {/* <div className='footer-container'>
        <p className='is-size-3 has-text-weight-bold mt-5'>Bin-Noor</p>
        <p className='is-size-6 '>Online Shoping made Easier</p>
        <p className='is size-5'>For any query please contact 0323-7241891</p>
      </div> */}
      <div className='footer-c'>
        <div className='onSVG'>
          <p className=' ppp is-size-1 has-text-weight-bold mt-5'>Bin-Noor</p>
          <p className='is-size-5 '>Online Shoping made Easier</p>
          <p className='is size-5'>For any query please contact 0323-7241891</p>
          <p className='is-size-7'>web version 1.0.0</p>
        </div>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#0099ff'
            fillOpacity='1'
            d='M0,32L60,48C120,64,240,96,360,96C480,96,600,64,720,42.7C840,21,960,11,1080,53.3C1200,96,1320,192,1380,240L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
          ></path>
        </svg>
      </div>
    </>
  )
}

export default Footer
