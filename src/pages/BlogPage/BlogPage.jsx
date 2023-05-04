import React from 'react';
import Navbar from '../sharePages/Navbar/Navbar';
import Footer from '../sharePages/Footer/Footer';

const BlogPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <p className='font-bold text-2xl mt-5'>1. Tell us the differences between uncontrolled and controlled components.</p>
                <p className='font-semibold text-lg mt-3'>Ans: </p>
                <p className='font-bold text-2xl mt-5'>2. How to validate React props using PropTypes</p>
                <p className='font-semibold text-lg mt-3'>Ans: </p>
                <p className='font-bold text-2xl mt-5'>3. Tell us the difference between nodejs and express js.</p>
                <p className='font-semibold text-lg mt-3'>Ans: </p>
                <p className='font-bold text-2xl mt-5'>4. What is a custom hook, and why will you create a custom hook?</p>
                <p className='font-semibold text-lg mt-3'>Ans: </p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BlogPage;