import React from 'react';

function Aside() {
    return (
        <aside className="bg-gray-200  w-[72px] h-[100vh]">
            <ul className='flex gap-3 flex-col'>
                <li className="mt-5">
                    <img className='w-[24px] ml-[25px] ' src={require('../assets/dashboard_black_24dp@2x.png')} />
                    <span className=' text-center text-xs justify-center flex'>Dashboard</span>
                </li>
                <li className="">
                    <img className='w-[24px] ml-[25px]' src={require('../assets/work_history_black_24dp@2x.png')} />
                    <span className=' text-center text-xs justify-center flex'>Monthly Process</span>
                </li>
                <li className="bg-white border-l-2 h-15 border-orange-500">
                    <img className='w-[24px] ml-[25px]' src={require('../assets/tune_black_24dp@2x.png')} />
                    <span className=' text-center text-xs justify-center flex'>Super Configura.</span>
                </li>
                <li className="mt-1">
                    <img className='w-[24px] ml-[25px]' src={require('../assets/auto_graph_black_24dp@2x.png')} />
                    <span className=' text-center text-xs justify-center flex'>Master Reports</span>
                </li>
                <li className="">
                    <img className='w-[24px] ml-[25px]' src={require('../assets/read_more_black_24dp@2x.png')} />
                    <span className=' text-center text-xs justify-center flex'>More</span>
                </li>
            </ul>
        </aside>
    );
}

export default Aside;
