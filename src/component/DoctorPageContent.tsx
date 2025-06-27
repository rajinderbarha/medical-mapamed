import React from 'react'
import DoctorDesciptionCard from './DoctorDescriptionCard'
import DoctorAvailabilityCard from './DoctorAvailabilityCard'
import { Doctor, Hospital } from '@/types/types'

type Props = {
    doctor: Doctor
    hospital: Hospital
}

const DoctorPageContent: React.FC<Props> = ({ doctor, hospital }) => {

    return (
        <>
            <div className="grid grid-cols-12 gap-4 md:gap-[31px] pt-4 md:pt-5">
                <div className="col-span-12 md:col-span-7">
                    <DoctorDesciptionCard doctor={doctor} hospital={hospital}/>
                </div>
                <div className="col-span-12 md:col-span-5">
                    <DoctorAvailabilityCard doctor={doctor}/>
                </div>
            </div>
        </>
    )
}
export default DoctorPageContent