import React, { useEffect, useState } from 'react';
import bannerImg from '../../assets/banner (2).jpg'
import {FaAngleDoubleRight } from 'react-icons/fa';
import ChefDetails from './SingleChef/ChefDetails';

const Home = () => {
    const [chefs, SetChefs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => SetChefs(data))
    },[])

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
        </div>
    );
};

export default Home;