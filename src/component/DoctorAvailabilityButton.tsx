import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify/react';
interface DoctorAvailabilityButtonProps {
    title: string;
    date: string
    linkText: string
}
const DoctorAvailabilityButton:React.FC<DoctorAvailabilityButtonProps> = ({title, date, linkText}) => {
    return (
        <>
            <div className="flex justify-between items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 border border-brand-primary-50 rounded-2 bg-[#F9FAFC]">
                <div className="space-y-1 md:space-y-1.5">
                    <h5 className='h3-20 text-black '>{title}</h5>
                    <p className="caption-14 text-[#4C5566]">{date}</p>
                </div>
                <Link href="#" className='caption-14 flex items-center gap-1 text-[#4C5566]'>{linkText} <Icon icon="solar:arrow-right-linear" className='size-4 md:size-5' /></Link>
            </div>
        </>
    )
}
export default DoctorAvailabilityButton