import React from 'react';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-slate-300'>
            <footer className="footer p-10 bg-black text-white">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className='flex space-x-4 border-l-2 border-orange-400 p-2'>
                        <FaGoogle className='font-bold text-xl'></FaGoogle>
                        <FaFacebook className='font-bold text-xl'></FaFacebook>
                        <FaTwitter className='font-bold text-xl'></FaTwitter>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;