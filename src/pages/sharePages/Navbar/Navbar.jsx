import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-slate-400'>
            <p>this is navbar</p>
            <Link to={'/blog'}>Blog</Link>
        </div>
    );
};

export default Navbar;