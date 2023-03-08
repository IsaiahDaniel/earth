import Navbar from '../../components/Navbar/Navbar';
import Input from '../../components/input/Input';
import React from 'react';

const Contact = () => {
  return (
    <div className='bg-'>
        <Navbar />
        <main className="container mx-auto">
            <h2>We'd Love to here from you</h2>
            <div>
                <div className="flex items-center justify-between">
                    <form action="#" method="post">
                        <div>
                            <label htmlFor="full_name">Full Name</label>
                            <Input inputType="" />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Contact;