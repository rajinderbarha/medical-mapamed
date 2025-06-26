// import ResultCard from '@/common/ResultCard'
// import React from 'react'

// const ResultContent = () => {
//     return (
//         <>
//             <section className='px-5 pt-[42px]'>
//                 <div className="secondary-container">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="">
//                             <div className="flex flex-wrap items-center justify-between gap-2">
//                                 <p className='body-16 text-black font-semibold'>28 rezultate găsite</p>
//                                 <div className="flex items-center">
//                                     <p className='body-16 text-black font-semibold'>Sortează după:&nbsp;</p>
//                                     <select name="relevance" id="relevance" className='body-16 text-black font-semibold pe-[25px] bg-position-[right_0px_center] bg-size-[14px]  '>
//                                         <option value=""> Relevanță</option>
//                                         <option value="distance">Distanță</option>
//                                         <option value="rating">Rating</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <div className="space-y-4  md:h-[calc(100vh_-_90px_-_92px_-_92px_-_42px_-_48px_-_40px)] overflow-y-auto md:pe-1.5 md:pb-7">
//                                 <ResultCard />
//                                 <ResultCard />
//                                 <ResultCard />
//                                 <ResultCard />
//                             </div>
//                         </div>
//                         <div className="">
//                             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193597.01223053955!2d-74.14465397140326!3d40.6970238350613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1750393960695!5m2!1sen!2sin"
//                                 className="w-full h-[400px] md:h-full "
//                                 allowFullScreen={true}
//                                 loading="lazy"
//                                 referrerPolicy="no-referrer-when-downgrade">
//                             </iframe>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default ResultContent

"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ResultCard from "@/common/ResultCard";
import { Hospital } from "@/types/types"; // your shared type

const ResultContent = () => {
    const searchParams = useSearchParams();
    const q = searchParams.get("q");
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");

    const [results, setResults] = useState<Hospital[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                let query = "";
                if (q) query = `q=${encodeURIComponent(q)}`;
                if (lat && lon) query = `lat=${lat}&lon=${lon}`;

                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/search?${query}`);
                const data = await res.json();
                setResults(data); // expect array of hospitals with doctors/procedures
            } catch (err) {
                console.error("Error fetching search results", err);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [q, lat, lon]);

    return (
        <section className="px-5 pt-[42px]">
            <div className="secondary-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <p className="body-16 text-black font-semibold">
                                {loading ? "Se încarcă..." : `${results.length} rezultate găsite`}
                            </p>
                            {/* Sort dropdown here */}
                        </div>
                        <div className="space-y-4 md:h-[calc(100vh_-_90px_-_92px_-_92px_-_42px_-_48px_-_40px)] overflow-y-auto md:pe-1.5 md:pb-7">
                            {loading ? (
                                <p>Loading...</p>
                            ) : results.length > 0 ? (
                                results.map((hospital) => (
                                    <ResultCard key={hospital.id} hospital={hospital} />
                                ))
                            ) : (
                                <p className="text-gray-500">Niciun rezultat găsit.</p>
                            )}
                        </div>
                    </div>

                    {/* Right column with map */}
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18..."
                            className="w-full h-[400px] md:h-full"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResultContent;
