import React from 'react'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Trustedby from '@/components/Trustedby'
import Cta from '@/components/Cta'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Guarantees from '@/components/Guarantees'

export default function Home() {
	return (
		<div className='w-full min-h-screen flex justify-start items-center flex-col'>

			<Navbar />
			<Hero/>
			<Trustedby />
			<Services />
			<Process />
			<Guarantees />
			<Cta />
			<Footer />
			
		</div>
	)
}
