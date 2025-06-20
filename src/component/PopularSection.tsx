import PopularCard from '@/common/PopularCard'
import React from 'react'

const PopularSection = () => {
    return (
        <>
            <div className="px-5 mt-[18px] md:mt-[30px]">
                <div className="main-container">
                    <div className="bg-white rounded-3 border border-neutral-100 shadow-4">
                        <div className="pt-[15px] md:pt-[23px] px-5 md:px-[25px] pb-[13px] md:pb-[19px] border-b border-neutral-300">
                            <h2 className="h2-24 text-black">Popular în apropierea ta</h2>
                        </div>
                        <div className="pt-[13px] md:pt-[19px] px-5 md:px-[25px] pb-10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-[18px]">
                                <PopularCard icon="jam:medical" title="Medic de familie" />
                                <PopularCard icon="streamline-ultimate:medical-hospital-1" title="Stomatolog" />
                                <PopularCard icon="solar:eye-linear" title="Oftalmolog" />
                                <PopularCard icon="hugeicons:brain" title="Psihiatru" />
                                <PopularCard icon="fluent:dentist-16-regular" title="Ortodont" />
                                <PopularCard icon="hugeicons:body-part-muscle" title="Fizioterapie" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularSection