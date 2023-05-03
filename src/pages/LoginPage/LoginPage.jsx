import React from 'react';
import Navbar from '../sharePages/Navbar/Navbar';
import { Form, Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Form className='w-2/4 mx-auto mt-32 p-3'>
                <p className='text-3xl font-bold border-black pb-6 text-center '>Login your account</p>
                <hr />
                <div className='flex flex-col my-3'>
                    <label htmlFor="" className='font-bold text-xl'>Email address</label>
                    <input className='bg-gray-100 p-3 mt-3' type="email" name="email" id="" placeholder='Enter your email address' required/>
                </div>
                <div className='flex flex-col my-3'>
                    <label htmlFor="" className='font-bold text-xl'>Password</label>
                    <input className='bg-gray-100 p-3 mt-3' type="password" name="password" id="" placeholder='Enter your password' required/>
                    <p className='font-bold text-red-700'>error</p>
                </div>
                <div className='text-center'>
                    <button className='btn w-full  bg-orange-400 font-bold hover:bg-orange-400 border-none mt-5'>Login</button>
                    <p className='text-lg font-semibold mt-4'>Dont’t Have An Account ? <Link to={'/register'} className='font-bold text-lg text-orange-400 underline'>Register</Link></p>
                </div>
            </Form>
        </div>
    );
};

export default LoginPage;