import React from 'react'
import mapamed_logo from '@/assets/images/mapamed_logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from "@iconify/react";
const Navbar = () => {
    return (
        <>
            <nav className='py-4 border-b border-base-300 px-5'>
                <div className="nav-conatiner">
                    <div className="flex items-center justify-between">

                        <Image src={mapamed_logo} alt="Mapamed Logo" className='max-w-[150px] md:max-w-[175px] lg:max-w-[232px] w-full h-auto' />
                        <div className="flex items-center justify-end gap-1.5">
                            <Link href="/" className='text-black '><Icon icon="mdi-light:home" className='size-6 md:size-7 lg:size-8' /></Link>
                            <Link href="/" className='text-black '><Icon icon="mynaui:search" className='size-6 md:size-7 lg:size-8' /></Link>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar