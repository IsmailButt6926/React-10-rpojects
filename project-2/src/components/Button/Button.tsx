import React from 'react'

type Props = {}

const Button = (props: any) => {
    const { image, text, btnClasses } = props
    
  return (
          <button className={`bg-black ${btnClasses ? btnClasses : null } text-white flex items-center justify-center gap-3 w-56 h-11 rounded-md`}>
            {
                image && 
                <img src={image} />
            }
              {text}
          </button>
  )
}

export default Button