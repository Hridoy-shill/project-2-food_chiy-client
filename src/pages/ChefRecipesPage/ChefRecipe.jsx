import React from 'react';
import { FaGratipay } from "react-icons/fa";

const ChefRecipe = ({ recipe }) => {
    // console.log(recipe);
    const { cooking_mathod, img, ingredients, rating, recipe_name} = recipe;
    return (
        <div className='border-2 border-orange-400 rounded mt-10  hover:bg-orange-400 hover:bg-opacity-20 duration-500'>
            <div className="grid grid-cols-3 gap-5">
                <div className='w-full'>
                    <img src={img} alt="" className=' w-full h-full p-4'/>
                </div>
                <div className='w-full col-span-2 p-5'>
                    <p className='font-bold text-2xl border-b-4 border-orange-400 w-fit pb-2'>{recipe_name}</p>
                    <p className='mt-2 font-semibold text-base'>{cooking_mathod}</p>
                    <p className='font-bold text-2xl border-b-4 border-orange-400 w-fit pb-2 mt-3'>Ingredients</p>
                    <p className='mt-2'>{ingredients.map(li => <li className='font-bold'>{li}</li>)}</p>
                    <p className='font-bold text-2xl border-b-4 border-orange-400 w-fit pb-2 mt-3'>Ratings</p>
                    <p>{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipe;