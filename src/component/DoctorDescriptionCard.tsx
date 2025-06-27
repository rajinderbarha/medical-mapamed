import React from 'react'
import DescriptionLocationComponent from './DescriptionLocationComponent'
import { Doctor, Hospital } from '@/types/types'

type Props = {
    doctor: Doctor
    hospital: Hospital
}

const DoctorDesciptionCard: React.FC<Props> = ({ doctor, hospital }) => {
    return (
        <>
            <div className="card-static shadow-4 pt-6 px-5 pb-8 md:pt-[32px] md:pb-[42px] md:px-7 h-full">
                <h3 className='h1-28 md:leading-[32px] text-black'>Despre</h3>
                {/* <p className='caption-14 text-[#4C5566] mt-2 md:mt-3'>Dr. Popa Ana este un cardiolog certificat cu peste 10 ani de experiență în diagnosticarea și tratarea afecțiunilor<br />cardiace. Ea se specializează în cardiologie preventivă și imagistică cardiacă neinvazivă.</p> */}
                <p className='caption-14 text-[#4C5566] mt-2 md:mt-3'>
                    {doctor.description ??
                        `${doctor.name} este un specialist în ${doctor.specialty} cu experiență vastă și dedicare față de pacienți.`}
                </p>
                <div className="pt-4 md:pt-6 space-y-3 md:space-y-4">
                    <DescriptionLocationComponent
                        title='Locație'
                        detail={hospital.address ?? 'Adresă indisponibilă'}
                        icon="fluent:location-20-regular"
                    />
                    <DescriptionLocationComponent
                        title='Telefon'
                        detail={doctor.phone ?? hospital.phone ?? 'N/A'}
                        icon="solar:phone-outline"
                    />
                    <DescriptionLocationComponent
                        title='Email'
                        detail={doctor.email ?? hospital.email ?? 'N/A'}
                        icon="mdi:email-outline"
                    />
                </div>
            </div>
        </>
    )
}
export default DoctorDesciptionCard