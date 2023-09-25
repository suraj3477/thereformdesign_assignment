import React from 'react'

const Header = () => {
    return (
        <header className="bg-white-500 p-1 border-b-2">
            <nav className="flex items-center justify-between">
                <div className="text-white font-bold text-xl logo"><img className='h-[52px] w-[173px]' src={require('../assets/Flipkart_logo-700x185@2x.png')} /></div>
                <div>
                    <div className='ml-[-400px]'>Pay Cycle: 31-May-2021 to 31-June-2021</div>
                    <div className='ml-[-400px]'>Amazon India Pvt Ltd</div>
                </div>
                <ul className="flex space-x-4 gap-5">
                    <li className="text-black hover:text-gray-200 cursor-pointer"><div className='flex flex-col'>
                        <img className='h-[24px] w-[24px]' src={require('../assets/help_outline-24px (3)@2x.png')} />
                        <span className='text-xs text-center ml-[-20px]'>SUPPORT</span>
                    </div></li>
                    <li className="text-black hover:text-gray-200 cursor-pointer"><div className='flex flex-col'>
                        <img className='h-[24px] w-[24px]' src={require('../assets/Group 8570@2x.png')} />
                        <span className='text-xs text-center ml-[-20px]'>NOTIFICATIONS</span>
                    </div></li>
                    <li className="text-black hover:text-gray-200 cursor-pointer font-bold text-center h-[50px] w-[50px]"><h5 className=' rounded-md border bg-black text-white'>R</h5></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header