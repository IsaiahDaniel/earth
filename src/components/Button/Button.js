import React from 'react';

const Button = ({ inputType, text }) => {
  return (
    <div>
        <button type={inputType} className="bg-[#D8AEFF] py-4 px-6 text-[#7534B4] outline-none focus:outline-none focus:border-0">
            {text}
        </button>
    </div>
  )
}

Button.defaultProps = {
    inputType: "text"
}

export default Button;