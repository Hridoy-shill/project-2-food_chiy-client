import React, { useEffect, useState } from 'react';
import bannerImg from '../../assets/banner (2).jpg'
import { FaAngleDoubleRight, FaAward } from 'react-icons/fa';
import ChefDetails from './SingleChef/ChefDetails';
import img1 from '../../assets/world-food-championships-fb-icon.png'
import img2 from '../../assets/images.png'
import img3 from '../../assets/WCA_Logo_Circle_TEST.jpg'

const Home = () => {
    const [chefs, SetChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => SetChefs(data))
    }, [])

    return (
        <div>
            <img className='w-full h-3/4 relative' src={bannerImg} alt="" />
            <div className='absolute top-52 left-16'>
                <p className='font-bold text-6xl leading-tight'><span className='text-orange-400'>choose</span> better Food <br />choose better Life..!</p>
                <div className='mt-4'>
                    <button className='btn text-black font-bold text-xl bg-orange-400 border-none hover:bg-orange-400'>Explore More <FaAngleDoubleRight className='ms-3'></FaAngleDoubleRight></button>
                </div>
            </div>
            <p className='text-5xl font-bold mt-10 text-center border-t-4 border-b-4 border-orange-400 w-fit mx-auto p-3'>The Chef's</p>
            <div className='grid grid-cols-4 gap-3 mt-10'>
                {
                    chefs.map(chef => <ChefDetails key={chef.id} chef={chef}></ChefDetails>)
                }
            </div>

            <p className='text-5xl font-bold mt-10 text-center border-t-4 border-b-4 border-orange-400 w-fit mx-auto p-3'>Reword's</p>

            <div className='grid grid-cols-3 gap-4 mt-10 p-3'>
                <div className='border-2 border-orange-400 rounded-lg p-4'>
                    <img className='mx-auto' src={img1} alt="" />
                    <p className='font-bold text-3xl text-center my-3'>International Cooking <br /> championship</p>
                    <p className='font-semibold text-2xl text-center'>12 time's Winner</p>
                </div>
                <div className='border-2 border-orange-400 rounded-lg p-4'>
                    <img className='mx-auto w-52' src={img2} alt="" />
                    <p className='font-bold text-3xl text-center my-3'>National Cooking <br /> championship</p>
                    <p className='font-semibold text-2xl text-center'>22 time's Winner</p>
                </div>
                <div className='border-2 border-orange-400 rounded-lg p-4'>
                    <img className='mx-auto w-56' src={img3} alt="" />
                    <p className='font-bold text-3xl text-center my-3'>American Cooking <br /> championship</p>
                    <p className='font-semibold text-2xl text-center'>5 time's Winner</p>
                </div>
            </div>

            <p className='text-5xl font-bold mt-10 text-center border-t-4 border-b-4 border-orange-400 w-fit mx-auto p-3'>Contact Us</p>

            <div className='flex flex-col p-5 bg-orange-400 bg-opacity-25 w-2/4 mx-auto mt-10 rounded'>
                <input type="email" placeholder="Your Eamil" className="input input-bordered input-warning w-full max-w-xs my-3" />
                <textarea className="textarea textarea-warning h-40" placeholder="Type Here"></textarea>
                <button className='btn font-bold text-xl bg-orange-400 text-black border-none hover:bg-orange-400 w-fit mt-3 rounded'>Submit</button>
            </div>
        </div>
    );
};

export default Home;