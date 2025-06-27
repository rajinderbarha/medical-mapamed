"use client";
import { Icon } from '@iconify/react';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const ResultFilterSection = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleChange = (name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set(name, value);
        } else {
            params.delete(name);
        }

        router.push(`/search?${params.toString()}`);
    };

    return (
        <div className="px-5">
            <div className="secondary-container">
                <div className="bg-white shadow-2 rounded-3 p-4 md:py-[22px] md:px-[18px] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                    <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-2.5 flex-wrap w-full md:w-auto">
                        <button className='w-full sm:w-auto flex items-center gap-2 rounded-2 bg-[#f0f0f0] px-4 py-3 caption-14 font-semibold'><Icon icon="solar:filter-broken" className='size-3.5' /> Filter</button>

                        <select
                            onChange={(e) => handleChange("specialty", e.target.value)}
                            id="Asigurare"
                            className='w-full sm:w-auto flex items-center gap-2 rounded-2 bg-[#f0f0f0] px-4 py-3 pe-[34px] caption-14 font-semibold bg-position-[right_12px_center] bg-size-[10px]'
                        >
                            <option value="">Specialitate</option>
                            <option value="Cardiolog">Cardiolog</option>
                            <option value="Dermatolog">Dermatolog</option>
                        </select>

                        <select
                            onChange={(e) => handleChange("category", e.target.value)}
                            id="Disponibilitate"
                            className='w-full sm:w-auto flex items-center gap-2 rounded-2 bg-[#f0f0f0] px-4 py-3 pe-[34px] caption-14 font-semibold bg-position-[right_12px_center] bg-size-[10px]'
                        >
                            <option value="">Categorie</option>
                            <option value="Specialized">Specialized</option>
                            <option value="General">General</option>
                        </select>

                        {/* You can add more filters similarly */}
                    </div>
                    <button className='caption-14 text-black font-semibold ms-auto sm:ms-0'>Sortează Tot</button>
                </div>
            </div>
        </div>
    );
};

export default ResultFilterSection;
