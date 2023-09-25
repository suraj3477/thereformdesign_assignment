import React from 'react'

const SubAside = () => {
  return (
    <span className="bg-white  w-[167px] h-[100vh] border-r-2 rounded-sm ">
    <ul className='flex gap-3 flex-col'>
        <li className="mt-5">
            <span className=' text-center text-xs justify-center flex'>Services Offered</span>
        </li>
        <li className="">
            <span className='text-center text-xs justify-center flex bg-blue-200 border-l rounded-l-full p-2 ml-[20px]'>Org Setup</span>
        </li>
        
    </ul>
</span>
  )
}

export default SubAside