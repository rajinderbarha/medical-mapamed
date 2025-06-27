"use client";

import mapboxgl from "mapbox-gl";
import Link from 'next/link';
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import "mapbox-gl/dist/mapbox-gl.css";
import { useApp } from "@/context/AppContext";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

const MapSection = () => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const router = useRouter();
    const { location, hospitals } = useApp();
    // const [popup, setPopup] = useState<mapboxgl.Popup | null>(null);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current!,
            style: "mapbox://styles/mapbox/light-v11",
            center: [location!.longitude, location!.latitude],
            zoom: 11,
        });
    }, []);

    useEffect(() => {
        if (!map.current) return;
        map.current.setCenter([location!.longitude, location!.latitude]);
    }, [location]);

    useEffect(() => {
        if (!map.current || !hospitals.length) return;

        const markers: mapboxgl.Marker[] = [];
        hospitals.forEach((hospital) => {
            const el = document.createElement("div");
            el.className = "marker";
            el.style.backgroundColor = "#2C69F7";
            el.style.width = "16px";
            el.style.height = "16px";
            el.style.borderRadius = "50%";
            el.style.cursor = "pointer"; // hover cursor pointer ✅

            const popupHTML = `
                              <div style="
                                min-width: 220px;
                                font-family: sans-serif;
                                padding: 10px;
                              ">
                                <strong>${hospital.name}</strong><br/>
                                <p style="margin: 5px 0;">${hospital.address}</p>
                                <a 
                                  id="popup-btn-${hospital.id}" 
                                  style="
                                    color: #2C69F7;
                                    font-size: 14px;
                                    text-decoration: underline;
                                    cursor: pointer;
                                    display: inline-block;
                                    margin-top: 5px;
                                  "
                                >View</a>
                              </div>
                            `;

            const popup = new mapboxgl.Popup({
                offset: 15,
                closeButton: true, // default true; adds top-right (×) close
                closeOnClick: false,
            }).setHTML(popupHTML);

            const marker = new mapboxgl.Marker(el)
                .setLngLat([hospital.longitude, hospital.latitude])
                .setPopup(popup)
                .addTo(map.current!);

            markers.push(marker);

            marker.getElement().addEventListener("click", () => {
                setTimeout(() => {
                    const btn = document.getElementById(`popup-btn-${hospital.id}`);
                    if (btn) {
                        btn.addEventListener("click", () => {
                            router.push(`/search?q=${encodeURIComponent(hospital.name)}`);
                        });
                    }
                }, 100);
            });
        });


        return () => {
            markers.forEach(marker => marker.remove());
            // popup?.remove();
        };
    }, [hospitals]);


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
                            <div ref={mapContainer} className="w-full h-[350px] sm:h-[450px] rounded-3" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MapSection