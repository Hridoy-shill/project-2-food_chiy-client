import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats.png'

const Navbar = () => {

    const user = {
        name:"hridoy"
    }

    return (
        <div className='flex justify-between items-center px-8 py-3 border-b-2 border-orange-400 mb-4'>
            <p><span className='text-5xl font-bold'>F<span className='font-extrabold text-orange-400'>oo</span>d</span> <span className='text-2xl'>City</span></p>
            <div className='flex space-x-4 items-center'>
                <Link to={'/'} className='font-bold text-lg hover:text-orange-400 duration-300 hover:underline hover:text-xl'>Home</Link>
                <Link className='font-bold text-lg hover:text-orange-400 duration-300 hover:underline hover:text-xl'>links</Link>
                <Link to={'/blog'} className='font-bold text-lg hover:text-orange-400 duration-300 hover:underline hover:text-xl'>Blog</Link>
            </div>
            <div className='flex items-center'>
                {user.name ? <img className='w-10 h-10 rounded-full  me-5' src={img} alt="" title={user.name}/> : <p>nai</p>}
                {user.name ?
                    <button className='bg-orange-400 font-bold text-black btn border-none text-lg rounded hover:bg-orange-400'>logOut</button> :
                    <Link to={'/login'}>
                        <button className='bg-orange-400 font-bold text-black btn border-none text-lg rounded hover:bg-orange-400'>login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;