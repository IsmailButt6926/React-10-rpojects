import React from 'react'
import Shoes from "../../assets/images/shoe_image.png"
import Facebooks from "../../assets/images/flipkart.svg"
import Amazon from "../../assets/images/amazon.svg"
type Props = {}

const Hero = (props: Props) => {
  return (
    <main className='flex flex-wrap items-center justify-center gap-10 w-11/12 mx-auto  min-h-screen'>
      <div className='flex flex-col gap-10'>
        <h2 className='font-extrabold text-8xl uppercase'>your FEET <br/>DESERVE <br/>THE BEST</h2>
        <p className='font-semibold text-base w-96'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className='flex gap-4'>
          <button className='w-44 h-10 bg-[#D01C28] text-white font-semibold text-2xl'>Shop now</button>
          <button className='w-36 h-10 bg-white text-gray-600 border border-black font-semibold text-2xl'>Category</button>
        </div>
        <span>Also Available on</span>
        <div className='flex gap-4 items-center'>
        <img src={Facebooks} alt='facebook'/>
        <img src={Amazon} alt='amazon'/>
        </div>

      </div>

      <div>
        <img src={Shoes} alt='shoes'/>
      </div>


    </main>
  )
}

export default Hero