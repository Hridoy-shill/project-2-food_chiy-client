import React from 'react';
import Navbar from '../sharePages/Navbar/Navbar';
import { useParams } from 'react-router-dom';

const ChefRecipe = () => {
    const {id} = useParams()
    return (
        <div>
            <Navbar></Navbar>
            <p>this is especefic chef recipe component:{id}</p>
        </div>
    );
};

export default ChefRecipe;