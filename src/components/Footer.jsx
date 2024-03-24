// Footer.js
import React from 'react';
import { socialLinks } from '../constants/index.js';

const Footer = () => {
    return (
        <footer className='py-8 flex justify-between text-center text-black-500'>
            <div className='flex justify-start items-center'>
                <p className='mt-4'>&copy; 2023{" "} <span className="font-bold">Clement Garro</span></p>
            </div>
            <div className='flex justify-end items-center space-x-4'>
                {socialLinks.map((socialLink, index) => (
                    <a
                        key={`social-link-${index}`}
                        href={socialLink.link}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            src={socialLink.iconUrl}
                            alt={socialLink.name}
                            className='footerLogo'
                        />
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
