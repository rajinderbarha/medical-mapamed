export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchPopularProcedures = async () => {
    const res = await fetch(`${API_URL}/api/procedures?popular=true`);
    if (!res.ok) throw new Error("Failed to fetch popular procedures");
    return res.json();
};

export const fetchNearbyHospitals = async (lat: number, lon: number) => {
    const res = await fetch(`${API_URL}/api/hospitals/nearby?lat=${lat}&lon=${lon}&radius=10`);
    if (!res.ok) throw new Error("Failed to fetch hospitals");
    return res.json();
};
