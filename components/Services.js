import React from "react";
import Image from "next/image";

export default function Services() {
	return (
		<div className="mt-26 w-[70%] flex flex-col items-center justify-center">
			<h1 className="text-5xl font-bold text-gray-800">
				Built from the groundup
			</h1>
			<p className="text-2xl w-[50%] font-normal text-gray-600 text-center mt-4">
				All of our services are designed to help your business stand out
			</p>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 w-full">
				<div className="gridBox">
					<Image
						src="/s_6.png"
						width={200}
						height={200}
						alt="gridBoxImage"
					/>
					<h2>Web Design + Development</h2>
					<p>Take your business to the next level with our web design and development services</p>
				</div>
				<div className="gridBox">
					<Image
						src="/s_2.webp"
						width={200}
						height={200}
						alt="gridBoxImage"
					/>
					<h2>PHP Development</h2>
					<p>Build dynamic, scalable, and secure web applications with our expert PHP development services</p>
				</div>
				<div className="gridBox">
					<Image
						src="/s_5.webp"
						width={200}
						height={200}
						alt="gridBoxImage"
					/>
					<h2>Django Web Development</h2>
					<p>Build secure, high-performance web apps with Django, tailored to meet your business goals</p>
				</div>
				<div className="gridBox">
					<Image
						src="/s_1.webp"
						width={200}
						height={200}
						alt="gridBoxImage"
					/>
					<h2>AI & ML Solutions</h2>
					<p>Boost your business with innovative AI and ML solutions that enhance efficiency and drive growth</p>
				</div>
				<div className="gridBox">
					<Image
						src="/s_3.webp"
						width={200}
						height={200}
						alt="gridBoxImage"
					/>
					<h2>Next.js Development</h2>
					<p>Create fast, SEO-friendly web apps with Next.js for optimal performance and user experience</p>
				</div>
				<div className="gridBox">
					<Image
						src="/s_4.webp"
						width={200}
						height={200}
						alt="gridBoxImage"
					/>
					<h2>MERN Stack Development</h2>
					<p>Build dynamic, scalable web applications with the power of MongoDB, Express, React, and Node.js</p>
				</div>
			</div>

		</div>
	);
}
