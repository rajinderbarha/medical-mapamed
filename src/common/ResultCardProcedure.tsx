import React from 'react'
import { Procedure } from '@/types/types'

interface Props {
    procedure: Procedure
}

const ResultCardProcedure: React.FC<Props> = ({ procedure }) => {
    return (
        <div className="card bg-white rounded-3 py-5 px-3 md:py-7 md:px-4">
            <h3 className="h3-20 text-black font-semibold">{procedure.name}</h3>
            <p className="caption-14 text-[#4C5566]">{procedure.description}</p>
        </div>
    )
}

export default ResultCardProcedure
