"use client";

import React from "react";
import Script from "next/script";
import Navbar from "@/components/Navbar";

export default function Meeting() {
	return (
		<section className="grid-background min-h-screen w-full container mx-auto">
			<div className="w-full min-h-screen flex justify-start items-center flex-col">
				<Navbar />

				<section className="meeting-container text-center w-full">
					<h1 className="text-3xl font-bold">Let's Meet</h1>
					<h2 className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">
						We are always excited to meet new people and discuss new projects.
						Please feel free to book a meeting with us.
					</h2>

					{/* Calendly inline widget — note data-resize="true" */}
					<div
						className="calendly-inline-widget w-full"
						data-url="https://calendly.com/tusharbhanushali-t/30min"
						data-resize="true"
						style={{ minWidth: "320px", height: "700px" }} // height is fallback
					/>

					{/* Calendly script */}
					<Script
						src="https://assets.calendly.com/assets/external/widget.js"
						strategy="lazyOnload"
					/>
				</section>
			</div>
		</section>
	);
}
