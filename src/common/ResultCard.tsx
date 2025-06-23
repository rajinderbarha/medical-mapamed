import Image from 'next/image'
import React from 'react'
import doctor_image from '@/assets/images/doctor_image.png'
import { InlineIcon } from '@iconify/react'

const ResultCard = () => {
    return (
        <>
            <div className="card bg-white rounded-3 py-5 px-3 md:py-7 md:px-4">
                <div className="flex items-start justify-between flex-col md:flex-row gap-4">
                    <div className="flex items-start gap-4">
                        <Image src={doctor_image} alt="Doctor" className='size-[50px] md:size-[61px] rounded-full' />
                        <div className="space-y-1.5">
                            <h3 className="h3-20 text-black font-semibold">Dr. Ionescu Maria</h3>
                            <p className="caption-14 text-[#4C5566]">Cardiolog • Centrul Medical Central</p>
                            <div className="flex items-center gap-1.5">
                                <div className="text-[#F6CA10] flex items-center gap-px">
                                    <InlineIcon icon="material-symbols:star-rounded" className='size-4' />
                                    <InlineIcon icon="material-symbols:star-rounded" className='size-4' />
                                    <InlineIcon icon="material-symbols:star-rounded" className='size-4' />
                                    <InlineIcon icon="material-symbols:star-rounded" className='size-4' />
                                    <InlineIcon icon="material-symbols:star-outline-rounded" className='size-4' />
                                </div>
                                <p className='text-[12px] text-[#4C5566]'>4.0 (128)</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <InlineIcon icon="proicons:location" className='size-4 text-black' />
                                <p className="text-[12px] text-[#4C5566]">1.2 km distanţă</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2.5 w-full md:w-auto">
                        {/* <Button variant='primary'>Programare</Button> */}
                        <button className='caption-14 text-white rounded-3 bg-[#447BF7] px-2.5 py-2 w-full md:w-auto'>Programare</button>
                        <p className='text-[12px] text-neutral-600'>Următorul: Astăzi</p>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResultCard