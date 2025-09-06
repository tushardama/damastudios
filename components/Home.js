import React from 'react'
import Hero from '@/components/Hero'
import Navbar from './Navbar'

export default function Home() {
	return (
		<div className='w-full min-h-screen flex justify-start items-center flex-col'>

			<Navbar />
			<Hero/>
			
		</div>
	)
}
