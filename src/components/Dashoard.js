import React from 'react'
import Form from './Form'

const Dashoard = () => {
    return (
        <div className='w-[1100px]'>
            <div className="border-b-1 border-gray-200 p-4 shadow-md font-bold">
                Org Setup
            </div>
            <div className="border-b-2 border-blue-500 p-4 ">
                <div className='flex flex-row justify-between'>
                    <div>
                        <strong>Details</strong><br />
                        <span className='text-sm'>Page to configure all the company details</span>
                    </div>
                    <div className='flex flex-row justify-center gap-3'>
                        <button className=" border-2 bg-white text-blue-500 h-[40px] w-[152px] rounded-md ">
                            <div className='flex flex-row justify-center gap-2'>
                                <img src={require('../assets/upload_black_24dp@2x.png')} className='h-[24px] w-[24px]' />Bulk Upload
                            </div></button>
                        <button className='border-2 bg-blue-500 text-white h-[40px] w-[100px]  rounded-md '>
                            <div className='flex flex-row justify-center gap-2'>
                                <img src={require('../assets/save_black_24dp@2x.png')} className='h-[24px] w-[24px]' />Save
                            </div>
                        </button>
                        <button className=' rounded-e-full'><img className='h-[36px] w-[36px]' src={require('../assets/Group 10162@2x.png')} /></button>
                    </div>
                </div>
            </div>

            <Form />

            <div>
                <div className="border border-gray-300 p-3 mt-3">
                    <div className='flex flex-row justify-between'>
                        <div>
                            <strong>Lock Setup</strong><br />
                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                        </div>
                        <img src={require('../assets/Group 10163@2x.png')} className='h-[36px] w-[36px]'/>
                    </div>
                </div>
                <div className="border border-gray-300 p-3 ">
                <div className='flex flex-row justify-between'>
                        <div>
                            <strong>Integration Info</strong><br />
                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                        </div>
                        <img src={require('../assets/Group 10163@2x.png')} className='h-[36px] w-[36px]'/>
                    </div>
                </div>
                <div className="border border-gray-300 p-3 ">
                <div className='flex flex-row justify-between'>
                        <div>
                            <strong>AI Info</strong><br />
                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                        </div>
                        <img src={require('../assets/Group 10163@2x.png')} className='h-[36px] w-[36px]'/>
                    </div>
                </div>
            </div>

            <div>
                <img src={require('../assets/Group 10166@2x.png')} className='h-[110px] w-[180px] ' />
            </div>
        </div>
    )
}

export default Dashoard