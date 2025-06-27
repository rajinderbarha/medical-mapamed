import React from 'react'
import { Hospital } from '@/types/types'

interface Props {
    hospital: Hospital
}

const ResultCardHospital: React.FC<Props> = ({ hospital }) => {
    return (
        <div className="card bg-white rounded-3 py-5 px-3 md:py-7 md:px-4">
            <h3 className="h3-20 text-black font-semibold">{hospital.name}</h3>
            <p className="caption-14 text-[#4C5566]">{hospital.address}</p>
            <p className="caption-14 text-[#4C5566]">Categorie: {hospital.category}</p>
        </div>
    )
}

export default ResultCardHospital
