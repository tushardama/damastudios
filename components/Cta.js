import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Cta() {
	return (
		<div className='w-full mt-26 flex items-center justify-center'>
			<section className='w-[70%] bg-blue-50 rounded-md flex items-center justify-center p-12 gap-8'>
				<div className='flex gap-8 flex-col'>
					<h1 className='text-4xl text-gray-800 font-bold'>Let's make things happen</h1>
					<p className='text-2xl'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
					<Link href={"/meeting"} className="callbtn w-fit">Book a Call</Link>
				</div>
				<Image
					src="/proposal_illustration.png"
					width={600}
					height={600}
					alt='illustration'
				/>
			</section>
		</div>
	)
}
