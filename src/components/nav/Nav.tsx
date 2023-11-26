/* eslint-disable @typescript-eslint/no-explicit-any */
import { Notification, SearchNormal } from 'iconsax-react'
import { useSelector } from 'react-redux';

export default function Nav() {
    const admin = useSelector((state: any) => state.auth.admin);
    return (
    <div className='w-[85%] z-40 py-4 border-b border-purple-1 bg-white fixed left-[15%] top-0 flex justify-between items-center px-4'>
        <p className='text-xl font-semibold text-black-1'>Fleet Management and Logistics</p>

        <div className='relative'>
            <SearchNormal size={20} className='text-purple-1 absolute left-2 top-4'/>
            <input className='w-[16rem] pl-9 p-3 focus:outline-none  border border-purple-1 rounded-xl' type="search" name="" id="" placeholder='search'/>
        </div>

        <div className='flex justify-start gap-3 items-center'>
            <Notification size={20} cursor='pointer' color='#6A559B'/>
            <div  className='flex justify-start gap-2 items-center'>
                <div className='w-8 h-8 rounded-full border'></div>
                <div>
                    <p className='text-black text-md font-medium'>{admin?.FirstName} {admin?.lastName}</p>
                    <p className='text-black text-sm font-light'>{admin?.lastName && "Head Of Operations"}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
