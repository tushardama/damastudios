import React from 'react'
import Image from 'next/image'

export default function Process() {
	return (
		<section id='process' className='w-[70%] scroll-mt-[18vh] mt-26 flex items-center justify-center flex-col'>

			<h1 className='text-5xl font-medium text-gray-800 flex gap-2 items-center justify-center'>
				<span>Our</span>
				<Image
					src="/squiggle.svg"
					width={24}
					height={24}
					alt='illustration'
				/>
				<span className='text-pink-500'>Creative</span>
				<Image
					src="/star.svg"
					width={24}
					height={24}
					alt='illustration'
					className='mb-8'
				/>
				<span>Process</span>
			</h1>
			<h2 className='text-2xl font-normal text-gray-700 mt-4 text-center w-[50%]'>All of our services are designed to help your business to get noticed.</h2>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 w-full">

				<div className="gridBox">
					<Image
						src="/step1.png"
						width={200}
						height={200}
						alt="gridBoxImage"
					/>
					<h2>1. Connect</h2>
					<p>Connect with us via meeting</p>
				</div>

				<div className="gridBox">
					<Image
						src="/step2.png"
						width={200}
						height={200}
						alt="gridBoxImage"
					/>
					<h2>2. Collaborate</h2>
					<p>Outline the scope of the project</p>
				</div>

				<div className="gridBox">
					<Image
						src="/step3.png"
						width={200}
						height={200}
						alt="gridBoxImage"
					/>
					<h2>3. Create</h2>
					<p>Leave the rest to us</p>
				</div>

			</div>

		</section>
	)
}
