"use client";

import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import "mapbox-gl/dist/mapbox-gl.css";
import { Hospital } from "@/types/types";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

type Props = {
    hospitals: Hospital[];
};

const SearchMap = ({ hospitals }: Props) => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (map.current) return;

        const center: [number, number] = hospitals.length > 0
            ? [hospitals[0].longitude, hospitals[0].latitude]
            : [26.1025, 44.4268]; // Default Bucharest
      

        map.current = new mapboxgl.Map({
            container: mapContainer.current!,
            style: "mapbox://styles/mapbox/light-v11",
            center,
            zoom: 11,
        });
    }, [hospitals]);


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
            el.style.cursor = "pointer";

            const popupHTML = `
        <div style="min-width: 220px; font-family: sans-serif; padding: 10px;">
          <strong>${hospital.name}</strong><br/>
          <p style="margin: 5px 0;">${hospital.address}</p>
          <a id="popup-btn-${hospital.id}" style="
              color: #2C69F7;
              font-size: 14px;
              text-decoration: underline;
              cursor: pointer;
              display: inline-block;
              margin-top: 5px;
          ">View</a>
        </div>`;

            const popup = new mapboxgl.Popup({ offset: 15, closeButton: true }).setHTML(popupHTML);

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
            markers.forEach((marker) => marker.remove());
        };
    }, [hospitals]);

    return <div ref={mapContainer} className="w-full h-[400px] md:h-full rounded-3" />;
};

export default SearchMap;
