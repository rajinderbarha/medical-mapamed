"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { sendGAEvent } from "@/lib/analytics";
import { useRouter } from "next/navigation";
import type { Procedure, LocationCoords } from "@/types/types";
import type { ReactNode } from "react";

type AppContextType = {
    popularProcedures: Procedure[] | null;
    setPopularProcedures: (procedures: Procedure[]) => void;
    location: LocationCoords;
    setLocation: (coords: LocationCoords) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    handleLocation: () => void;
    handleSearch: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [popularProcedures, setPopularProcedures] = useState<Procedure[] | null>(null);
    const [location, setLocation] = useState<LocationCoords>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    useEffect(() => {
        const fetchPopular = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/procedures?popular=true`);
                const data = await res.json();
                setPopularProcedures(data);
            } catch (err) {
                console.error("Failed to load popular procedures", err);
            }
        };

        fetchPopular();
    }, []);

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
            (error) => {
                sendGAEvent("geo_location_denied");
                console.error("geo_location_denied", error);
            }
        );
    };

    const handleSearch = () => {
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <AppContext.Provider
            value={{
                popularProcedures,
                setPopularProcedures,
                location,
                setLocation,
                searchQuery,
                setSearchQuery,
                handleLocation,
                handleSearch,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useApp must be used within AppProvider");
    return context;
};
