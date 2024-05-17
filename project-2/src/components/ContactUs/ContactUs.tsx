import React from 'react'
import Message from "../../assets/message.svg"
import BlackThemeMessage from "../../assets/message2.svg"
import Phone from "../../assets/phone.svg"
import Service from "../../assets/Service.svg"
import Button from '../Button/Button'

type Props = {}

const ContactUs = (props: Props) => {
  return (
    <div className='flex flex-wrap items-center gap-20 py-4'>
          <section className='flex flex-col gap-7'>
            <div className='flex gap-4'>
                  <Button image={Message} text="VIA SUPPORT CHAT" />
                  <Button image={Phone} text="VIA CALL" />
            </div>
              <Button image={BlackThemeMessage} text="VIA EMAIL FORM " btnClasses={"bg-white text-gray-800  w-[472px] border border-black"} />
              <form className='flex flex-col gap-7'>
                <div className='flex flex-col relative'>
                <label className='absolute left-5 -top-3 bg-white px-2'>Name</label>
                <input className='border-2  border-gray-500 h-10 px-2' />
                </div>

                <div className='flex flex-col relative'>
                    <label className='absolute left-5 -top-3 bg-white px-2'>Email</label>
                      <input className='border-2  border-gray-500 h-10 px-2' />
                </div>

                  <div className='flex flex-col relative'>
                      <label className='absolute left-5 -top-3 bg-white px-2'>Email</label>
                      <textarea rows={4} className='border-2  border-gray-500 px-2 py-2'></textarea>
                  </div>

                  <div className='flex justify-end'>
                  <Button text="SUBMIT"/>
                  </div>
              </form>
          </section>

          <section>
            <img src={Service}/>
          </section>
    </div>
  )
}

export default ContactUs