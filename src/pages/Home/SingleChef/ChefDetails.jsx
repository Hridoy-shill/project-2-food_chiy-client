import React from 'react';
import { FaFire } from "react-icons/fa";

const ChefDetails = ({ chef }) => {
    console.log(chef,);
    const { id, ChefName, ChefPicture, Likes, NumberOfRecipes, YearsOfExperience } = chef
    return (
        <div className='border-2 border-orange-400 w-fit p-5 rounded'>
            <img src={ChefPicture} alt=""  className='w-full rounded'/>
            <p className='font-bold text-xl mt-3'>Name: {ChefName}.</p>
            <p className='font-bold text-xl mt-3'>Experience: {YearsOfExperience}.</p>
            <p className='font-bold text-xl mt-3'>Recipes: {NumberOfRecipes}.</p>
            <p className='font-bold text-xl mt-3'>Total Likes: {Likes}.</p>
            <button className='btn text-base text-black bg-orange-400 border-none mt-10 hover:bg-orange-400'>View Recipes<FaFire className='ms-2'></FaFire></button>
        </div>
    );
};

export default ChefDetails;