import React from 'react';
import Navbar from '../sharePages/Navbar/Navbar';
import Footer from '../sharePages/Footer/Footer';

const BlogPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='p-5'>
                <p className='font-bold text-2xl mt-5'>1. Tell us the differences between uncontrolled and controlled components.</p>

                <p className='font-semibold text-lg mt-3'><span className='text-lg font-bold underline me-2'>Ans:</span> <br /> <span className='font-bold'>Control Component:</span> A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. <br />
                <span className='font-bold mt-2'>uncontrolled Component:</span> A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.
                </p>

                <p className='font-bold text-2xl mt-5'>2. How to validate React props using PropTypes</p>

                <p className='font-semibold text-lg mt-3'>Ans: The step's of validate React props useing</p>
                
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