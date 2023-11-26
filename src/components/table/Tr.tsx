import { tableData } from '../../utils'

export default function Tr() {
  return (
    <>
        {
            tableData.map((data,index)=>(
                <tr key={index} className={`${index%2 === 0 ? "bg-[rgba(244,243,247,0.37)]" : "bg-white"} text-sm text-black-1 h-16`}>
                    <td className='text-center'>{data.date_submited}</td>
                    <td className='text-center'>{data.time_submitted}</td>
                    <td className='text-center'>{data.submited_by}</td>
                    <td className='text-center'>{data.department}</td>
                    <td className='text-center'>{data.destination}</td>
                    <td className='text-center'>{data.date_of_trip}</td>
                </tr>
            ))
        }
    </>
  )
}
