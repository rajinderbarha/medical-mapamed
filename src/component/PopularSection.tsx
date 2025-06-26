import PopularCard from '@/common/PopularCard'
import React from 'react'
import { fetchPopularProcedures } from "@/lib/api";

const iconMap: Record<string, string> = {
    "medic": "jam:medical",
    "stomatolog": "streamline-ultimate:medical-hospital-1",
    "oftalmolog": "solar:eye-linear",
    "psihiatru": "hugeicons:brain",
    "ortodont": "fluent:dentist-16-regular",
    "fizioterapie": "hugeicons:body-part-muscle",
};

const PopularSection = async () => {
    const popularProcedures = await fetchPopularProcedures();

    console.log(popularProcedures);
    return (
        <>
            <section className="px-5 mt-[18px] md:mt-[30px]">
                <div className="main-container">
                    <div className="bg-white rounded-3 border border-neutral-100 shadow-4">
                        <div className="pt-[15px] md:pt-[23px] px-5 md:px-[25px] pb-[13px] md:pb-[19px] border-b border-neutral-300">
                            <h2 className="h2-24 text-black">Popular în apropierea ta</h2>
                        </div>
                        <div className="pt-[13px] md:pt-[19px] px-5 md:px-[25px] pb-10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-[18px]">
                                {popularProcedures?.data?.map((procedure: any) => {
                                    const title = procedure.name;
                                    const normalized = title.toLowerCase();
                                    const icon = iconMap[normalized] || 'jam:medical'; // fallback

                                    return (
                                        <PopularCard
                                            key={procedure.id}
                                            title={title}
                                            icon={icon}
                                            id={procedure.id}
                                        />
                                    );
                                })}
                                {/* <PopularCard icon="jam:medical" title="Medic de familie" />
                                <PopularCard icon="streamline-ultimate:medical-hospital-1" title="Stomatolog" />
                                <PopularCard icon="solar:eye-linear" title="Oftalmolog" />
                                <PopularCard icon="hugeicons:brain" title="Psihiatru" />
                                <PopularCard icon="fluent:dentist-16-regular" title="Ortodont" />
                                <PopularCard icon="hugeicons:body-part-muscle" title="Fizioterapie" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PopularSection