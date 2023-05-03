import React, { useContext, useState } from 'react';
import Navbar from '../sharePages/Navbar/Navbar';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const LoginPage = () => {

    const [error, setError] = useState('')
    
    const { user, logInUser, loginWithGoogle, loginWithGitHub } = useContext(AuthContext)
    console.log(user);

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                form.reset();
            })
            .catch(error => setError(error.message))
    }

    const handleGoogleLogIn = () =>{
        loginWithGoogle()

        .then(result => {
            const loggedUser = result.loggedUser;
            console.log(loggedUser);
        })
        .catch(error => setError(error.message))
    }

    const handleGitHubLogIn = () =>{
        loginWithGitHub()
        .then(result => {
            const loggedUser = result.loggedUser;
            console.log(loggedUser);
        })
        .catch(error => setError(error.message))
    }

    return (
        <div>
            <Navbar></Navbar>
            <Form onSubmit={handleLogIn} className='w-2/4 mx-auto mt-32 p-3'>
                <p className='text-3xl font-bold border-black pb-6 text-center '>Login your account</p>
                <hr />
                <div className='flex flex-col my-3'>
                    <label htmlFor="" className='font-bold text-xl'>Email address</label>
                    <input className='bg-gray-100 p-3 mt-3' type="email" name="email" id="" placeholder='Enter your email address' required />
                </div>
                <div className='flex flex-col my-3'>
                    <label htmlFor="" className='font-bold text-xl'>Password</label>
                    <input className='bg-gray-100 p-3 mt-3' type="password" name="password" id="" placeholder='Enter your password' required />
                    <p className='font-bold text-red-700'>{error}</p>
                </div>
                <div className='text-center'>
                    <button className='btn w-full  bg-orange-400 font-bold hover:bg-orange-400 border-none mt-5'>Login</button>

                </div>
            </Form>
            <div className='flex justify-center items-center mt-5'>
                <button onClick={handleGoogleLogIn} className='btn btn-outline font-bold'>Login with google <FaGoogle className='text-lg font bold ms-2'></FaGoogle></button>
                <p className='mx-2 text-xl font-bold'>or</p>
                <button onClick={handleGitHubLogIn} className='btn btn-outline font-bold'>Login with gitHub <FaGithub className='text-lg font bold ms-2'></FaGithub></button>
            </div>
            <p className='text-lg font-semibold text-center mt-4  mb-3'>Dont’t Have An Account ? <Link to={'/register'} className='font-bold text-lg text-orange-400 underline'>Register</Link></p>
        </div>
    );
};

export default LoginPage;