import React from 'react'
import { Icon } from '@iconify/react';
import DoctorAvailabilityButton from './DoctorAvailabilityButton';
import { Doctor } from '@/types/types'

type Props = {
    doctor: Doctor
}

const DoctorAvailabilityCard: React.FC<Props> = ({ doctor }) => {
    if (!doctor) {
        return null;
    }
    return (
        <>
            <div className="card-static shadow-4 py-6 px-5 md:py-[33px] md:px-[30px] ">
                <h3 className='h1-28 md:leading-[32px] text-black'>Următoarele Disponibilități</h3>
                <div className="my-[15px] space-y-2.5 md:space-y-[22px]">
                    <DoctorAvailabilityButton title="Astăzi" date="24 Mai" linkText="2 sloturi" />
                    <DoctorAvailabilityButton title="Mâine" date="25 Mai" linkText="3 sloturi" />
                    <DoctorAvailabilityButton title="Luni" date="27 Mai" linkText="5 sloturi" />
                </div>
                <button className='bg-brand-primary-400 text-white rounded-3 py-2 flex items-center justify-center gap-1.5 md:gap-2.5 w-full caption-14'><Icon icon="uil:calender" className='size-5 md:size-6' />Vezi Programul Complet</button>
            </div>
        </>
    )
}
export default DoctorAvailabilityCard