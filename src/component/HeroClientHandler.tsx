"use client";

import { useApp } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import { sendGAEvent } from "@/lib/analytics";

const HeroClientHandler = () => {
    const { setLocation, searchQuery } = useApp();
    const router = useRouter();

    const handleLocation = () => {
        if (!navigator.geolocation) {
            sendGAEvent("geo_location_denied");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                sendGAEvent("geo_location_granted");
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
                router.push(`/search?lat=${latitude}&lon=${longitude}`);
            },
            () => {
                sendGAEvent("geo_location_denied");
            }
        );
    };

    const handleSearch = () => {
        if (searchQuery?.trim()) {
            sendGAEvent("search_executed", { q: searchQuery });
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return { handleLocation, handleSearch };
};

export default HeroClientHandler;
