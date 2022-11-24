import React from 'react';
import { Header } from '../../components';

const showcase = () => {
  return (
    <div className='mt-10'>
      <div>
        <h2 className='text-[100px] text-center text-white font-[Brightwall]'>
          The World of <br /> {" "} Arts
        </h2>
      </div>
      <div className='flex items-center justify-center text-white mt-20'>
        <h3>Love</h3>
        <h3 className='pl-5'>Express</h3>
        <h3 className='pl-5'>Share</h3>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div className='bg-gradient-to-b from-[#B97BF4] to-[#212121]'>
      <Header />

      { showcase() }

    </div>
  )
}

export default Home;