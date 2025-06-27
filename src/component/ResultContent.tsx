"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Doctor, Hospital, Procedure } from "@/types/types";
import SearchMap from "./SearchMap";
import ResultCardDoctor from "@/common/ResultCardDoctor";
import ResultCardHospital from "@/common/ResultCardHospital";
import ResultCardProcedure from "@/common/ResultCardProcedure";

const ResultContent = () => {
    const searchParams = useSearchParams();
    // const q = searchParams.get("q");
    // const lat = searchParams.get("lat");
    // const lon = searchParams.get("lon");

    const [results, setResults] = useState<{
        hospitals?: Hospital[];
        doctors?: Doctor[];
        procedures?: Procedure[];
    }>({});

    const [loading, setLoading] = useState(true);

    // const [hospitals, setHospitals] = useState<Hospital[]>([]);
    // const [doctors, setDoctors] = useState<Doctor[]>([]);
    // const [procedures, setProcedures] = useState<Procedure[]>([]);


    useEffect(() => {
        const fetchResults = async () => {
            try {
                const queryEntries = Array.from(searchParams.entries());
                const queryString = new URLSearchParams(queryEntries).toString();
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/search?${queryString}`);
                const data = await res.json();
                setResults(data || {});
            } catch (err) {
                console.error("Error fetching search results", err);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [searchParams]);

    const totalCount =
        (results.hospitals?.length || 0) +
        (results.doctors?.length || 0) +
        (results.procedures?.length || 0);

    return (
        <section className="px-5 pt-[42px]">
            <div className="secondary-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <p className="body-16 text-black font-semibold">
                                <p className="body-16 text-black font-semibold">
                                    {loading ? "Se încarcă..." : `Rezultate: ${totalCount} găsite`}
                                </p>
                            </p>
                            {/* Sort dropdown here */}
                        </div>
                        <div className="space-y-4 md:h-[calc(100vh_-_90px_-_92px_-_92px_-_42px_-_48px_-_40px)] overflow-y-auto md:pe-1.5 md:pb-7">
                            {loading ? (
                                <p>Loading...</p>
                            ) : results && (
                                <>
                                    {results.doctors && results.doctors.length > 0 && (
                                        <>
                                            <h3 className="font-semibold text-black mt-6 mb-2">Doctori</h3>
                                            {results.doctors.map(doctor => (
                                                <ResultCardDoctor key={doctor.id} doctor={doctor} />
                                            ))}
                                        </>
                                    )}
                                    {results.hospitals && results.hospitals.length > 0 && (
                                        <>
                                            <h3 className="font-semibold text-black mb-2">Spitale</h3>
                                            {results.hospitals.map(hospital => (
                                                <ResultCardHospital key={hospital.id} hospital={hospital} />
                                            ))}
                                        </>
                                    )}
                                    {results.procedures && results.procedures.length > 0 && (
                                        <>
                                            <h3 className="font-semibold text-black mt-6 mb-2">Proceduri</h3>
                                            {results.procedures.map(proc => (
                                                <ResultCardProcedure key={proc.id} procedure={proc} />
                                            ))}
                                        </>
                                    )}
                                    {results.hospitals?.length === 0 && results.doctors?.length === 0 && results.procedures?.length === 0 && (
                                        <p className="text-gray-500">Niciun rezultat găsit.</p>
                                    )}
                                </>
                            )}
                        </div>
                    </div>

                    {/* Right column with map */}
                    <div>
                        <SearchMap hospitals={results.hospitals || []} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResultContent;
