import ResultCard from '@/common/ResultCard'
import React from 'react'

const ResultContent = () => {
    return (
        <>
            <section className='px-5 pt-[42px]'>
                <div className="secondary-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <p className='body-16 text-black font-semibold'>28 rezultate găsite</p>
                                <div className="flex items-center">
                                    <p className='body-16 text-black font-semibold'>Sortează după:&nbsp;</p>
                                    <select name="relevance" id="relevance" className='body-16 text-black font-semibold pe-[25px] bg-position-[right_0px_center] bg-size-[14px]  '>
                                        <option value=""> Relevanță</option>
                                        <option value="distance">Distanță</option>
                                        <option value="rating">Rating</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-4  md:h-[calc(100vh_-_90px_-_92px_-_92px_-_42px_-_48px_-_40px)] overflow-y-auto md:pe-1.5 md:pb-7">
                                <ResultCard />
                                <ResultCard />
                                <ResultCard />
                                <ResultCard />
                            </div>
                        </div>
                        <div className="">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193597.01223053955!2d-74.14465397140326!3d40.6970238350613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1750393960695!5m2!1sen!2sin"
                                className="w-full h-[400px] md:h-full "
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResultContent