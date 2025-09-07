import React from 'react'
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav>
			<h1>Dama <span className='text-[#ec4899]'>Studios</span></h1>
			<div className="links">
				<Link href={'#services'}>Services</Link>
				<Link href={'#process'}>Process</Link>
				<Link href={'#guarentees'}>Guarentees</Link>
			</div>
			<Link href={"/meeting"} className="callbtn">Book a Call</Link>
		</nav>
	)
}
