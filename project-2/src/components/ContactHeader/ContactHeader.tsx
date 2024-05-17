import React from 'react'

type Props = {}

const ContactHeader = (props: Props) => {
  return (
    <div className='flex flex-col gap-4'>
          <h2 className='font-extrabold text-5xl'>CONTACT US</h2>
          <p className='font-semibold text-base text-[#5A5959] w-auto lg:w-[875px]'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
    </div>
  )
}

export default ContactHeader