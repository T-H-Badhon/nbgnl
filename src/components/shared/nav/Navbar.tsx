import Image from 'next/image';
import React from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import NavMenu from './NavMenu';

const Navbar = () => {
    return (
        <div className=' flex justify-between items-center bg-white mx-8 my-5  px-8 rounded-2xl '>
            <div >
                <Image src={"https://nbgnl.com/wp-content/uploads/2019/10/gnl-logo.png"} width={100} height={100} alt="logo" />
            </div>
            <div>
                <NavMenu/>
            </div>
            <div className='flex items-center space-x-5'>
                <div>
                    <HiMagnifyingGlass className=' text-2xl'/>
                </div>
                <div className='py-4 px-10 bg-red-300  border rounded-s-full rounded-e-full'>
                    Get in touch
                </div>
            </div>
        </div>
    );
};

export default Navbar;