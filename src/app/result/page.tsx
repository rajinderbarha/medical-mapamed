import ResultContent from '@/component/ResultContent'
import ResultFilterSection from '@/component/ResultFilterSection'
import React from 'react'

const Result = () => {
    return (
        <>
            <div className="px-5 pt-5 pb-2.5 md:pt-8 md:pb-4">
                <div className="secondary-container">
                    <h1 className="display-32 text-black">Rezultate</h1>
                </div>
            </div>
            <ResultFilterSection/>
            <ResultContent/>
        </>
    )
}

export default Result