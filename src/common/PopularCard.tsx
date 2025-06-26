import { Icon } from '@iconify/react'
import Link from 'next/link';
import React from 'react'

interface PopularCardProps {
    title?: string;
    icon?: string;
    id?: number;
}
const PopularCard: React.FC<PopularCardProps> = ({ title = '', icon = 'jam:medical', id }) => {
    const searchQuery = encodeURIComponent(title);

    return (
        <>
            {/* <Link href="/" className="cursor-pointer bg-white border border-neutral-100 shadow-1 py-4 px-5 rounded-3 transition-all duration-300 hover:shadow-2 hover:border-2 active:shadow-2  active:border-accent-indigo-400  active:border-1 "> */}
            <Link
                href={`/search?q=${searchQuery}`}
                className="transition-global card cursor-pointer bg-white py-4 px-5 rounded-3 "
            >
                <div className="size-[43px] flex items-center justify-center bg-brand-primary-50 rounded-full mb-2">
                    <Icon icon={icon} className='size-5 text-brand-primary-700' />
                </div>
                <p className='body-16 text-black font-semibold text-left'>{title}</p>
            </Link>
        </>
    )
}

export default PopularCard