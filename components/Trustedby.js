"use client"
import React from 'react'
import CountUp from 'react-countup'

export default function Trustedby() {
	return (
		<div className='w-[90%] md:w-[70%] mt-26 flex items-center justify-center flex-col gap-12'>
			<h1 className='text-4xl md:text-5xl font-bold text-gray-900'>Trusted By</h1>
			<div className='flex flex-col md:flex-row justify-center gap-12 md:gap-26'>
				<div className="flex flex-col items-center justify-center">
					<div className="text-6xl"><CountUp end={50} /><span className='text-[#ec4899]'>+</span></div>
					<p className='text-2xl font-medium text-gray-800'>Happy Clients</p>
				</div>
				<div className="flex flex-col items-center justify-center">
					<div className="text-6xl"><CountUp end={10} /><span className='text-[#ec4899]'>+</span></div>
					<p className='text-2xl font-medium text-gray-800'>Projects</p>
				</div>
			</div>
		</div>
	)
}
