import { Icon } from '@iconify/react'
import React from 'react'

interface PopularCardProps {
    title?: string;
    icon?: string;
}
const PopularCard: React.FC<PopularCardProps> = ({ title, icon = 'jam:medical' }) => {
    return (
        <>
            <button className="cursor-pointer bg-white border border-base-100 shadow-1 py-4 px-5 rounded-[8px] transition-all duration-300 hover:shadow-2 hover:border-2 active:shadow-2  active:border-accent  active:border-1 ">
                <div className="size-[43px] flex items-center justify-center bg-primary-50 rounded-full mb-2">
                    <Icon icon={icon} className='size-5 text-primary-darker' />
                </div>
                <p className='body-16 text-black font-semibold text-left'>{title}</p>
            </button>
        </>
    )
}

export default PopularCard