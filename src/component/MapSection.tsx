"use client";

import mapboxgl from "mapbox-gl";
import Link from 'next/link'
import React from 'react'
import { useEffect, useRef } from "react";
import { fakeHospitals } from "@/lib/mapData";
import { useRouter } from "next/navigation";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

const MapSection = () => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (map.current) return; // initialize map only once

        map.current = new mapboxgl.Map({
            container: mapContainer.current!,
            style: "mapbox://styles/mapbox/light-v11",
            center: [26.1025, 44.4268], // Bucharest center
            zoom: 11,
        });

        fakeHospitals.forEach((hospital) => {
            const el = document.createElement("div");
            el.className = "marker";
            el.style.backgroundColor = "#2C69F7";
            el.style.width = "16px";
            el.style.height = "16px";
            el.style.borderRadius = "50%";

            el.addEventListener("click", () => {
                router.push(`/search?cabinet=${hospital.id}`);
            });

            new mapboxgl.Marker(el)
                .setLngLat([hospital.longitude, hospital.latitude])
                .setPopup(new mapboxgl.Popup().setText(hospital.name))
                .addTo(map.current!);
        });

        return () => map.current?.remove();
    }, [router]);

    return (
        <>
            <section className="px-5 mt-[38px] pb-[60px]">
                <div className="main-container">
                    <div className="bg-white rounded-3 border border-neutral-100 shadow-4">
                        <div className="pt-[15px] md:pt-[23px] px-5 md:px-[25px] pb-[13px] md:pb-[19px] border-b border-neutral-300 flex items-center justify-between gap-x-5 gap-y-3">
                            <h2 className="h2-24 text-black">Previzualizare hartă</h2>
                            <Link href="/" className='body-16 text-black font-semibold text-right'>Vezi harta completă</Link>
                        </div>
                        <div className="py-[13px] md:py-[19px] px-5 md:px-[25px] ">
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193597.01223053955!2d-74.14465397140326!3d40.6970238350613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1750393960695!5m2!1sen!2sin"
                                className="w-full h-[350px] md:h-[450px] rounded-3 "
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe> */}
                            <div ref={mapContainer} className="w-full h-[350px] sm:h-[450px] rounded-3" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MapSection