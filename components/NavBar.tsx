import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from "react";

function NavBar() {
    return (
        <><div className='flex justify-between p-3 px-10'>
            <div className='flex gap-10 items-center'>
                <Image src='/logo.png'
                    alt='logo'
                    width={120}
                    height={600} />
            </div>

            <div className='hidden md:flex gap-6'>
                <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'> Home</h2>
                <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'> Hystory </h2>
                <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'> Help </h2>
            </div>
        </div><UserButton afterSignOutUrl="/" /></>
    );
}

export default NavBar;
