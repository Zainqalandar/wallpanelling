import React, { useEffect, useState } from 'react';

export const Slider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const items = document.querySelectorAll('[data-carousel-item]');
		items[currentIndex].classList.remove('hidden');
		items[currentIndex].classList.add('block');

		return () => {
			items[currentIndex].classList.remove('block');
			items[currentIndex].classList.add('hidden');
		};
	}, [currentIndex]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === 1 ? 0 : prevIndex + 1
			);
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : prevIndex - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));
	};

	return (
		<div>
			<div
				id="default-carousel"
				className="relative w-full"
				data-carousel="slide"
			>
				{/* Carousel wrapper */}
				<div className="relative h-56 overflow-hidden rounded-lg md:h-96">
					{/* Item 1 */}
					<div
						className="hidden duration-700 ease-in-out"
						data-carousel-item=""
					>
						<img
							src="/images/p41.jpeg"
							className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							alt="Slide 1"
						/>
					</div>
					{/* Item 2 */}
					<div
						className="hidden duration-700 ease-in-out"
						data-carousel-item=""
					>
						<img
							src="/images/p42.jpeg"
							className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							alt="Slide 2"
						/>
					</div>
				</div>
				{/* Slider indicators */}
				<div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
					<button
						type="button"
						className="w-3 h-3 rounded-full"
						aria-current={currentIndex === 0}
						aria-label="Slide 1"
						data-carousel-slide-to={0}
						onClick={() => setCurrentIndex(0)}
					/>
					<button
						type="button"
						className="w-3 h-3 rounded-full"
						aria-current={currentIndex === 1}
						aria-label="Slide 2"
						data-carousel-slide-to={1}
						onClick={() => setCurrentIndex(1)}
					/>
				</div>
				{/* Slider controls */}
				<button
					type="button"
					className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
					data-carousel-prev=""
					onClick={handlePrev}
				>
					<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg
							className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 6 10"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 1 1 5l4 4"
							/>
						</svg>
						<span className="sr-only">Previous</span>
					</span>
				</button>
				<button
					type="button"
					className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
					data-carousel-next=""
					onClick={handleNext}
				>
					<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg
							className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 6 10"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="m1 9 4-4-4-4"
							/>
						</svg>
						<span className="sr-only">Next</span>
					</span>
				</button>
			</div>
		</div>
	);
};
