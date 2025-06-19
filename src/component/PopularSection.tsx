import PopularCard from '@/common/PopularCard'
import React from 'react'

const PopularSection = () => {
    return (
        <>
            <div className="px-5 mt-[21px]">
                <div className="main-container">
                    <div className="bg-white rounded-[8px] border border-base-100 shadow-4">
                        <div className="pt-[15px] md:pt-[23px] px-5 md:px-[25px] pb-[13px] md:pb-[19px] border-b border-[#DBDBDB]">
                            <h2 className="h2-24 text-black">Popular în apropierea ta</h2>
                        </div>
                        <div className="pt-[13px] md:pt-[19px] px-5 md:px-[25px] pb-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-[18px]">
                            <PopularCard />
                            <PopularCard />
                            <PopularCard />
                            <PopularCard />
                            <PopularCard />
                            <PopularCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularSection