import React from 'react';
import { Form, Link } from 'react-router-dom';
import Navbar from '../sharePages/Navbar/Navbar';

const RegisterPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Form className='w-2/4 mx-auto p-4'>
                <p className='text-3xl font-bold border-black pb-6 text-center '>Register your account</p>
                <hr />
                <div className='flex flex-col my-3'>
                    <label htmlFor="" className='font-bold text-xl'>Your Name</label>
                    <input className='bg-gray-100 p-3 mt-3' type="text" name="name" id="" placeholder='Enter your name' required/>
                </div>
                <div className='flex flex-col my-3'>
                    <label htmlFor="" className='font-bold text-xl'>Photo URL</label>
                    <input className='bg-gray-100 p-3 mt-3' type="file" name="photo" id="" placeholder='' />
                </div>
                <div className='flex flex-col my-3'>
                    <label htmlFor="" className='font-bold text-xl'>Email address</label>
                    <input className='bg-gray-100 p-3 mt-3' type="email" name="email" id="" placeholder='Enter your email address' required/>
                </div>
                <div className='flex flex-col my-3'>
                    <label htmlFor="" className='font-bold text-xl'>Password</label>
                    <input className='bg-gray-100 p-3 mt-3' type="password" name="password" id="" placeholder='Enter your password' required/>
                </div>
                <div className='flex'>
                    <input type="checkbox" className='checkbox' name="checkbox" id="" required/>
                    <p className='ms-2'>Accept Term & Conditions</p>
                </div>
                <div className='text-center'>
                    <button className='btn w-full bg-orange-400 font-bold hover:bg-orange-400 border-none mt-5'>Register</button>
                    <p className='font-bold text-xl'>or</p>
                    <p className='font-bold'>Already have an Account? <Link to={'/login'} className='text-orange-400 underline'>Login</Link></p>
                </div>
            </Form>
        </div>
    );
};

export default RegisterPage;