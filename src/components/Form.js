import React, { useEffect } from 'react'
import { FaCalendarAlt } from 'react-icons/fa';
import Select from 'react-select';

const Form = () => {

    return (
        <div className='flex flex-row justify-center '>
            <div className="grid grid-cols-2 gap-2 justify-center">

                <div className="w-[364px] h-[119px] bg-white shadow-md overflow-hidden rounded-lg mt-3">
                    <div className="text-center p-4">
                        <img
                            src={require('../assets/Oracle-Logo-For-Website@2x.png')} // Replace with your image URL
                            alt="Image"
                            className="mx-auto rounded-full h-20 w-20 object-cover"
                        />
                        <h2 className="text-xl mt-4 font-semibold text-gray-800">Card Title</h2>
                        <p className="text-gray-600">Card Description</p>
                    </div>
                </div>
                <div className="w-[364px] h-[119px] bg-white overflow-hidden mt-3">
                    <div className="text-left p-4">
                        <strong>Organisation Logo</strong><br/>
                        <small className="font-xs ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small><br/>
                        <small className="text-red-600">Preferred Image Size: 240px x 240px @ 72 DPI Maximum size of 1MB.</small>
                    </div>
                </div>

                <div className='mt-3'>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Org Id</label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        className="pl-2 pr-10 py-2 w-full rounded border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                        placeholder='Enter Org ID'
                    />
                </div>
                <div className='mt-3'>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">City Name</label>
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        placeholder='Enter City Name'
                        className="pl-2 pr-10 py-2 w-full rounded border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                </div>
                <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Org Name</label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        className="pl-2 pr-10 py-2 w-full rounded border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                        placeholder='Enter Org Name'
                    />
                </div>
                <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Team Name</label>
                    <input
                        type="text"
                        id="last_name"
                        placeholder='Enter Team Name'
                        name="last_name"
                        className="pl-2 pr-10 py-2 w-full rounded border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                </div>
                <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">No. of Integrations</label>
                    <Select
                        className='bg-white border-1 py-1 w-[346px] h-[44px]'
                    ></Select>
                </div>
                <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Team Count</label>
                    <input
                        type="text"
                        id="last_name"
                        placeholder='Enter Team Count'
                        name="last_name"
                        className="pl-2 pr-10 py-2 w-full rounded border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                </div>
                <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Similar Month</label>
                    <Select
                        className='bg-white border-1 py-1 w-[346px] h-[44px]'
                    ></Select>
                </div>
                <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Go Live Month</label>
                    <Select
                        className='bg-white border-1 py-1 w-[346px] h-[44px]'
                    ></Select>
                </div>
                <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Integration Months</label>
                    <Select
                        className='bg-white border-1 py-1 w-[346px] h-[44px]'
                    ></Select>
                </div>
                <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">TAT for Integration</label>
                    <Select
                        className='bg-white border-1 py-1 w-[346px] h-[44px]'
                    ></Select>
                </div>
                <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">AI Cycle</label>
                    <Select
                        className='bg-white border-1 py-1 w-[346px] h-[44px]'
                    ></Select>
                </div>
                <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Integration date</label>
                    <div className="relative">
                        <input
                            type="text"
                            className="pl-2 pr-10 py-2 w-full rounded border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                            placeholder=""
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <FaCalendarAlt className="text-gray-400" />
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">ERP Date (Agreed)</label>
                    <div className="relative">
                        <input
                            type="text"
                            className="pl-2 pr-10 py-2 w-full rounded border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                            placeholder=""
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <FaCalendarAlt className="text-gray-400" />
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">ISP Date (Agreed)</label>
                    <div className="relative">
                        <input
                            type="text"
                            className="pl-2 pr-10 py-2 w-full rounded border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                            placeholder=""
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <FaCalendarAlt className="text-gray-400" />
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Active AI Time</label>
                    <div className="relative">
                        <input
                            type="text"
                            className="pl-2 pr-10 py-2 w-full rounded border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                            placeholder=""
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <FaCalendarAlt className="text-gray-400" />
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Active AI QC Time</label>
                    <div className="relative">
                        <input
                            type="text"
                            className="pl-2 pr-10 py-2 w-full rounded border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                            placeholder=""
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <FaCalendarAlt className="text-gray-400" />
                        </div>
                    </div>
                </div>
                {/* Add more label-input pairs as needed */}
            </div>
        </div>
    )
}

export default Form