'use client';
import React, { useState } from 'react';

const GridyImages = () => {
	const [images, setImages] = useState([
		{ id: 1, src: '/images/p1.jpeg' },
		{ id: 2, src: '/images/p2.jpeg' },
		{ id: 3, src: '/images/p3.jpeg' },
		{ id: 4, src: '/images/p4.jpeg' },
		{ id: 5, src: '/images/p5.jpeg' },
		{ id: 6, src: '/images/p6.jpeg' },
		{ id: 7, src: '/images/p7.jpeg' },
		{ id: 8, src: '/images/p8.jpeg' },
		{ id: 9, src: '/images/p9.jpeg' },
		{ id: 10, src: '/images/p10.jpeg' },
		{ id: 11, src: '/images/p11.jpeg' },
		{ id: 12, src: '/images/p12.jpeg' },
		{ id: 13, src: '/images/p13.jpeg' },
		{ id: 14, src: '/images/p14.jpeg' },
		{ id: 15, src: '/images/p15.jpeg' },
		{ id: 16, src: '/images/p16.jpeg' },
		{ id: 17, src: '/images/p17.jpeg' },
		{ id: 18, src: '/images/p18.jpeg' },
		{ id: 19, src: '/images/p19.jpeg' },
		{ id: 20, src: '/images/p20.jpeg' },
		{ id: 21, src: '/images/p21.jpeg' },
		{ id: 22, src: '/images/p22.jpeg' },
		{ id: 23, src: '/images/p23.jpeg' },
		{ id: 24, src: '/images/p24.jpeg' },
		{ id: 25, src: '/images/p25.jpeg' },
		{ id: 26, src: '/images/p26.jpeg' },
		{ id: 37, src: '/images/p27.jpeg' },
		{ id: 28, src: '/images/p28.jpeg' },
		{ id: 29, src: '/images/p29.jpeg' },
		{ id: 30, src: '/images/p30.jpeg' },
		{ id: 31, src: '/images/p31.jpeg' },
		{ id: 32, src: '/images/p32.jpeg' },
		{ id: 33, src: '/images/p33.jpeg' },
		{ id: 34, src: '/images/p34.jpeg' },
		{ id: 35, src: '/images/p35.jpeg' },
		{ id: 36, src: '/images/p36.jpeg' },
		{ id: 40, src: '/images/p37.jpeg' },
		{ id: 38, src: '/images/p38.jpeg' },
	]);

	return (
		<>
			<div  className="relative rounded overflow-hidden">
				<img
					src="/images/p39.jpeg"
					alt="Hanging Planters"
					className="w-full"
				/>
			</div>
			<div className="flex flex-col md:grid md:grid-cols-3 gap-3">
				{images.map((image) => (
					<div
						key={image.id}
						className="relative rounded overflow-hidden"
					>
						<img
							src={image.src}
							alt="Hanging Planters"
							className="w-full"
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default GridyImages;
