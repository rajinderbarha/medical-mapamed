'use client';

import React, { Suspense } from 'react';
import ResultFilterSection from '@/component/ResultFilterSection';
import ResultContent from '@/component/ResultContent';

const SearchPage = () => {
    return (
        <>
            <div className="px-5 pt-5 pb-2.5 md:pt-8 md:pb-4">
                <div className="secondary-container">
                    <h1 className="display-32 text-black">Rezultate</h1>
                </div>
            </div>

            <Suspense fallback={<div>Loading filters...</div>}>
                <ResultFilterSection />
            </Suspense>

            <Suspense fallback={<div>Loading results...</div>}>
                <ResultContent />
            </Suspense>
        </>
    );
};

export default SearchPage;
