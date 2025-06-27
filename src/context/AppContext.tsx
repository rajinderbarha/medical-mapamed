"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { sendGAEvent } from "@/lib/analytics";
import { useRouter } from "next/navigation";
import type { Procedure, LocationCoords, Hospital } from "@/types/types";
import type { ReactNode } from "react";

type AppContextType = {
    popularProcedures: Procedure[] | null;
    setPopularProcedures: (procedures: Procedure[]) => void;
    location: LocationCoords;
    setLocation: (coords: LocationCoords) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    hospitals: Hospital[];
    handleLocation: () => void;
    handleSearch: () => void;
    radius: string;
    setRadius: (radius: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [popularProcedures, setPopularProcedures] = useState<Procedure[] | null>(null);
    const [location, setLocation] = useState<LocationCoords>({ latitude: 44.4268, longitude: 26.1025 }); // Default Bucharest
    const [searchQuery, setSearchQuery] = useState("");
    const [radius, setRadius] = useState("5");
    const [hospitals, setHospitals] = useState<Hospital[]>([]);
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
        navigator.permissions?.query({ name: "geolocation" as PermissionName }).then((result) => {
            if (result.state === "denied") {
                alert("Permisiunea pentru locație a fost refuzată. Te rugăm să o activezi manual din setările browserului.");
                sendGAEvent("geo_location_denied_prompt_blocked");
                return;
            }

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    sendGAEvent("geo_location_granted");
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                    // router.push(`/search?lat=${latitude}&lon=${longitude}`);
                },
                (error) => {
                    sendGAEvent("geo_location_denied");
                    alert("Nu am putut accesa locația. Asigură-te că ai permis accesul.");
                    console.error("Error getting location:", error);
                }
            );
        });
    };

    const handleSearch = () => {
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    useEffect(() => {
        const fetchNearbyHospitals = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/hospitals/nearby?lat=${location?.latitude}&lon=${location?.longitude}&radius=${radius}`
                );
                const data = await res.json();
                setHospitals(data.data);
            } catch (err) {
                console.error("Failed to fetch nearby hospitals", err);
            }
        };

        if (location) fetchNearbyHospitals();
    }, [location]);

    return (
        <AppContext.Provider
            value={{
                popularProcedures,
                setPopularProcedures,
                location,
                setLocation,
                searchQuery,
                setSearchQuery,
                hospitals,
                handleLocation,
                handleSearch,
                setRadius,
                radius,
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
