import React from 'react'
interface cardBadgeProps {
    label: string
    active?: boolean
}
const CardBadge:React.FC<cardBadgeProps> = ({label, active}) => {
  return (
    <>
    <div className={`text-[12px]  py-1.5 px-[9px] rounded-full  ${active ? 'bg-[#50DF03] text-white':'text-brand-primary-400 bg-[#006CFF1F]'}`}>{label}</div>
    </>
  )
}
export default CardBadge