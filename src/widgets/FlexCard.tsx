import { ReactNode } from 'react'

interface IFlexCard{
    children: ReactNode;
    className?: string;
}

export default function FlexCard({children}:IFlexCard) {
  return (
    <div className={'w-full p-3 flex justify-between !items-center'}>{children}</div>
  )
}
