import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className='lg:flex lg:justify-between lg:items-center lg:px-8 p-3 lg:p-0 lg:py-3 border-b-2 border-orange-400 mb-4'>
            <Link to={'/'}>
                <p><span className='text-5xl font-bold'>F<span className='font-extrabold text-orange-400'>oo</span>d</span> <span className='text-2xl'>City</span></p>
            </Link>
            <div className='lg:flex space-x-6 lg:items-center my-4 lg:my-0'>
                <Link to={'/'} className='font-bold text-lg hover:text-orange-400 duration-300 hover:underline hover:text-xl'>Home</Link>
                <Link to={'/about'} className='font-bold text-lg hover:text-orange-400 duration-300 hover:underline hover:text-xl'>About-Us</Link>
                <Link to={'/blog'} className='font-bold text-lg hover:text-orange-400 duration-300 hover:underline hover:text-xl'>Blog</Link>
            </div>
            <div className='flex items-center'>
                {user ? <img className='w-10 h-10 rounded-full  me-5' src={user.photoURL} alt="" title={user.displayName} /> : <></>}
                {user ?
                    <button onClick={handleLogOut} className='bg-orange-400 font-bold text-black btn border-none text-lg rounded hover:bg-orange-400'>logOut</button> :
                    <Link to={'/login'}>
                        <button className='bg-orange-400 font-bold text-black btn border-none text-lg rounded hover:bg-orange-400'>login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;