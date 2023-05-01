import React from 'react';
import bannerImg from '../../assets/banner (2).jpg'

const Home = () => {
    return (
        <div>
            <img className='w-full h-3/4 relative' src={bannerImg} alt="" />
            <div className='absolute top-52 left-10'>
                <p className='font-bold text-6xl leading-tight'><span className='text-orange-400'>choose</span> better <span>Food</span> <br />choose better <span>Life..!</span></p>
            </div>
        </div>
    );
};

export default Home;