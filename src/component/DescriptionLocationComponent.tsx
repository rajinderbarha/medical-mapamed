import React from 'react'
import { Icon } from '@iconify/react';
interface CardBadgeProps {
    title: string;
    icon?: string;
    detail?: string
}
const DescriptionLocationComponent:React.FC<CardBadgeProps> = ({title, icon='fluent:location-20-regular', detail}) => {
    return (
        <>
            <div className="flex items-start gap-2 md:gap-3">
                <Icon icon={icon} className='size-[22px] md:size-6 text-black mt-1 md:mt-0.5' />
                <div className="">
                    <h5 className='h3-20 text-neutral-900 '>{title}</h5>
                    <p className='caption-14 text-[#4C5566] md:pb-2.5' dangerouslySetInnerHTML={{__html: detail || ''}}></p>
                </div>
            </div>
        </>
    )
}
export default DescriptionLocationComponent