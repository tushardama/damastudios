"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

export default function Guarantees() {
	return (
		<section id="guarentees" className='w-full scroll-mt-[18vh] mt-26 bg-neutral-900 flex flex-col items-center justify-center relative rounded-4xl'>
			<div className=" mb-26 mt-18 w-[70%] z-10 relative text-white flex items-center justify-center flex-col">
				<h1 className="text-5xl font-bold">Our guarantees to you.</h1>
				<h2 className="text-xl mt-4 w-[50%] text-center text-gray-200 font-normal">We ensure the highest quality of work, with the fastest delivery times.</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
					<div className="gBox">
						<span>
							<Image
								src="/fast.svg"
								width={40}
								height={40}
								alt="gridBoxImage"
							/>
						</span>
						<h2>Fast Delivery</h2>
						<p>1-2 weeks delivery for most projects. Call us for more information.</p>
					</div>
					<div className="gBox">
						<span>
							<Image
								src="/design.svg"
								width={40}
								height={40}
								alt="gridBoxImage"
							/>
						</span>
						<h2>Design & Development</h2>
						<p>We design and develop your website with the latest technologies and trends.</p>
					</div>
					<div className="gBox">
						<span>
							<Image
								src="/scalable.svg"
								width={40}
								height={40}
								alt="gridBoxImage"
							/>
						</span>
						<h2>Scalability + Maintenance</h2>
						<p>We offer maintenance and scalability for all websites.</p>
					</div>
					<div className="gBox">
						<span>
							<Image
								src="/team.svg"
								width={40}
								height={40}
								alt="gridBoxImage"
							/>
						</span>
						<h2>Team of Experts</h2>
						<p>A team of experts ready to help you, at all times.</p>
					</div>
					<div className="gBox">
						<span>
							<Image
								src="/safe.svg"
								width={40}
								height={40}
								alt="gridBoxImage"
							/>
						</span>
						<h2>Secure Building</h2>
						<p>Safe and secure building practices. To ensure your data is safe.</p>
					</div>
					<div className="gBox">
						<span>
							<Image
								src="/analytics.svg"
								width={40}
								height={40}
								alt="gridBoxImage"
							/>
						</span>
						<h2>Analytics Tracking</h2>
						<p>Track your progress with our built in analytics</p>
					</div>
					<div className="gBox">
						<span>
							<Image
								src="/flexible.svg"
								width={40}
								height={40}
								alt="gridBoxImage"
							/>
						</span>
						<h2>Dynamic Websites</h2>
						<p>We build dynamic solutions that are easy to manage.</p>
					</div>
					<div className="gBox">
						<span>
							<Image
								src="/support.svg"
								width={40}
								height={40}
								alt="gridBoxImage"
							/>
						</span>
						<h2>24/7 Support</h2>
						<p>We offer 24/7 support for all our clients. Call us for more information.</p>
					</div>
					<div className="gBox">
						<span>
							<Image
								src="/money.svg"
								width={40}
								height={40}
								alt="gridBoxImage"
							/>
						</span>
						<h2>Affordable Pricing</h2>
						<p>Affordable pricing for all our clients.</p>
					</div>
				</div>
			</div>
			<ShootingStars />
			<StarsBackground />
		</section>
	)
}
