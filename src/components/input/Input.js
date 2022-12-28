import React from 'react';

const Input = ({ inputType, otherProps }) => {
  return (
    <div className='w-full'>
        <input { ...otherProps } className="p-4 bg-[#D8AEFF] mb-5 w-full placeholder-[#12121273]" />
    </div>
  )
}

Input.defaultProps = {
    inputType: ""
}

export default Input;