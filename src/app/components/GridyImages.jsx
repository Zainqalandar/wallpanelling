'use client';
import React, { useState } from 'react';
import { Slider } from './Slider';
import Images from './lib/utils/images';

const GridyImages = () => {
	return (
		<>
			<Slider />
			<div className="flex flex-col md:grid md:grid-cols-3 gap-3">
				{Images.map((image) => (
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
