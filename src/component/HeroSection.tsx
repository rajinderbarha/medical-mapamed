"use client"
import { sendGAEvent } from '@/lib/analytics';
import { Icon } from '@iconify/react'
import React from 'react'

const handleLocation = () => {
    if (!navigator.geolocation) {
        sendGAEvent("geo_location_denied");
        // alert("Geolocation is not supported");
        return;
    }
    navigator.geolocation.getCurrentPosition(
        (position) => {
            sendGAEvent("geo_location_granted");
            const { latitude, longitude } = position.coords;
            // Redirect or handle result → next we’ll wire this properly
            console.log("geo location:", latitude, longitude);
        },
        () => {
            sendGAEvent("geo_location_denied");
            console.log("geo_location_denied");
            // alert("Could not get location");
        }
    );
}

const HeroSection = () => {

    return (
        <>
            <section className="px-5 pt-[55px]">
                <div className="main-container">
                    <div className="space-y-2.5 text-center mb-[19px]">
                        <h1 className='display-32 text-black '>Găsește furnizori de servicii medicale în apropierea ta</h1>
                        <h2 className='h1-28 text-black '>Caută medici, specialişti, clinici și spitale din zona ta</h2>
                    </div>
                    <div className="max-w-[600px] w-full mx-auto">
                        <div className="relative">
                            <input type="text" placeholder="Caută după specialitate, nume sau afecțiune" className="caption-14 w-full bg-white ps-[15px] md:ps-5 pe-[58px] md:pe-[70px] shadow-4  placeholder:text-placeholder-color" />
                            <button className='cursor-pointer aspect-square bg-[#2C69F7] absolute top-0 right-0 h-full flex items-center justify-center text-white rounded-tr-2 rounded-br-2'>
                                <Icon icon="mynaui:search" className='size-5 lg:size-6' />
                                </button>
                        </div>
                        <div  onClick={handleLocation}  className="flex items-center gap-1.5 mt-7 md:mt-9 hover:cursor-pointer">
                            <div className="rotate-[30deg]">
                                <Icon icon="material-symbols-light:navigation-outline" className='size-8 text-black' />
                            </div>
                            <p className='body-16 text-black font-semibold'>Folosește locația mea curentă</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default HeroSection