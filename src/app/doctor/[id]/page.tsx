// // doctor/[id]/page.tsx

// import { notFound } from 'next/navigation';
// import DoctorCard from '@/component/DoctorCard';
// import DoctorPageContent from '@/component/DoctorPageContent';
// import { Doctor, Hospital } from '@/types/types';

// const getDoctorData = async (id: string): Promise<Doctor | null> => {
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/doctors/${id}`, {
//             cache: 'no-store',
//         });
//         if (!res.ok) return null;
//         return res.json();
//     } catch (err) {
//         console.error("Failed to fetch doctor:", err);
//         return null;
//     }
// };

// const getHospitalData = async (hospitalId: number): Promise<Hospital | null> => {
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hospitals/${hospitalId}`, {
//             cache: 'no-store',
//         });
//         if (!res.ok) return null;
//         return res.json();
//     } catch (err) {
//         console.error("Failed to fetch hospital:", err);
//         return null;
//     }
// };



// type Props = {
//     params: {
//         id: string;
//     };
// };

// export default async function DoctorPage({ params }: Props) {

//     const doctor = await getDoctorData(params.id);
//     if (!doctor) return notFound();

//     const hospital = await getHospitalData(doctor.hospital_id);
//     if (!hospital) return notFound();

//     return (
//         <section className="pt-[23px] px-5">
//             <div className="secondary-container">
//                 <DoctorCard doctor={doctor} hospital={hospital} />
//                 <DoctorPageContent doctor={doctor} hospital={hospital} />
//             </div>
//         </section>
//     );
// };

// // export default DoctorPage;


'use client';

import DoctorCard from '@/component/DoctorCard';
import DoctorPageContent from '@/component/DoctorPageContent';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Doctor, Hospital } from '@/types/types';

export default function DoctorPage() {
    const { id } = useParams();
    const [doctor, setDoctor] = useState<Doctor | null>(null);
    const [hospital, setHospital] = useState<Hospital | null>(null);

    useEffect(() => {
        if (!id || typeof id !== 'string') return;

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/doctors/${id}`)
            .then(res => res.ok ? res.json() : null)
            .then(data => {
                setDoctor(data);
                if (data?.hospital_id) {
                    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hospitals/${data.hospital_id}`)
                        .then(res => res.ok ? res.json() : null)
                        .then(setHospital);
                }
            });
    }, [id]);

    if (!doctor || !hospital) return <p>Loading...</p>;

    return (
        <section className="pt-[23px] px-5">
            <div className="secondary-container">
                <DoctorCard doctor={doctor} hospital={hospital} />
                <DoctorPageContent doctor={doctor} hospital={hospital} />
            </div>
        </section>
    );
}
