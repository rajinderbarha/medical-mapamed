// import Image from 'next/image'
// import React from 'react'
// import doctor_image from '@/assets/images/doctor_image.png'
// import { Icon } from '@iconify/react';
// import CardBadge from './CardBadge';
// // import CardBadge from '../common/CardBadge';
// const DoctorCard = () => {
//     return (
//         <>
//             <div className="card-static shadow-2  py-5 px-3.5 md:py-[26px] md:px-5 ">
//                 <div className="flex items-start justify-between flex-col md:flex-row gap-4">
//                     <div className="flex items-start gap-4">
//                         <Image src={doctor_image} alt="Doctor" className='size-[50px] md:size-[61px] rounded-full' />
//                         <div className="">
//                             <div className="space-y-1.5">
//                                 <h3 className="h3-20 text-black font-semibold">Dr. Ionescu Maria</h3>
//                                 <p className="caption-14 text-[#4C5566]">Cardiolog • Centrul Medical Central</p>
//                             </div>
//                             <div className="pt-2.5 space-y-1.5">
//                                 <div className="flex items-center gap-1.5">
//                                     <div className="text-[#F6CA10] flex items-center ">
//                                         <Icon icon="material-symbols:star-rounded" className='size-4 md:size-5 ' />
//                                         <Icon icon="material-symbols:star-rounded" className='size-4 md:size-5 ' />
//                                         <Icon icon="material-symbols:star-rounded" className='size-4 md:size-5 ' />
//                                         <Icon icon="material-symbols:star-rounded" className='size-4 md:size-5 ' />
//                                         <Icon icon="material-symbols:star-outline-rounded" className='size-4 md:size-5 ' />
//                                     </div>
//                                     <p className='text-[12px] text-[#4C5566]'>4.0 (128)</p>
//                                 </div>
//                                 <div className="flex items-center gap-1 flex-wrap">
//                                    <CardBadge label='Boli Cardiace'/>
//                                    <CardBadge label='Hipertensiune'/>
//                                    <CardBadge label='Colesterol'/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="space-y-2.5 w-full md:w-auto">
//                         <button className='caption-14 text-white rounded-3 bg-[#447BF7] px-2.5 py-2 w-full md:w-auto'>Programează Consultație</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default DoctorCard

'use client';
import Image from 'next/image';
import React from 'react';
import doctor_image from '@/assets/images/doctor_image.png';
import { Icon } from '@iconify/react';
import CardBadge from './CardBadge';
import { Doctor, Hospital } from '@/types/types';

type Props = {
    doctor: Doctor;
    hospital: Hospital;
};

const DoctorCard: React.FC<Props> = ({ doctor, hospital }) => {
    return (
        <div className="card-static shadow-2 py-5 px-3.5 md:py-[26px] md:px-5">
            <div className="flex items-start justify-between flex-col md:flex-row gap-4">
                <div className="flex items-start gap-4">
                    <Image src={doctor_image} alt="Doctor" className="size-[50px] md:size-[61px] rounded-full" />
                    <div>
                        <div className="space-y-1.5">
                            <h3 className="h3-20 text-black font-semibold">{doctor.name}</h3>
                            <p className="caption-14 text-[#4C5566]">
                                {doctor.specialty} • {hospital.name}
                            </p>
                        </div>
                        <div className="pt-2.5 space-y-1.5">
                            <div className="flex items-center gap-1.5">
                                <div className="text-[#F6CA10] flex items-center">
                                    <Icon icon="material-symbols:star-rounded" className="size-4 md:size-5" />
                                    <Icon icon="material-symbols:star-rounded" className="size-4 md:size-5" />
                                    <Icon icon="material-symbols:star-rounded" className="size-4 md:size-5" />
                                    <Icon icon="material-symbols:star-rounded" className="size-4 md:size-5" />
                                    <Icon icon="material-symbols:star-outline-rounded" className="size-4 md:size-5" />
                                </div>
                                <p className="text-[12px] text-[#4C5566]">4.0 (128)</p>
                            </div>
                            <div className="flex items-center gap-1 flex-wrap">
                                <CardBadge label="Boli Cardiace" />
                                <CardBadge label="Hipertensiune" />
                                <CardBadge label="Colesterol" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-2.5 w-full md:w-auto">
                    <button className="caption-14 text-white rounded-3 bg-[#447BF7] px-2.5 py-2 w-full md:w-auto">
                        Programează Consultație
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
