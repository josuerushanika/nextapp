import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from "react";

function NavBar() {
    return (
        <><div>
            <div>
                <Image src='/logo.png'
                    alt='logo'
                    width={120}
                    height={600} />
            </div>

            <div className='flex'>
                <h2> Home</h2>
                <h2> Hystory </h2>
                <h2> Help </h2>
            </div>
        </div><UserButton afterSignOutUrl="/" /></>
    );
}

export default NavBar;
