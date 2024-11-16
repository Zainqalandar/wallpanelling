import React from 'react';

const Footer = () => {
	return (
		<div>
			<>
				<div className="bg-gray-100">
					{/* Navbar */}
					<nav className="bg-gray-800 text-white">
						<div className="container mx-auto px-4 py-6">
							{/* Logo and Tagline */}
							<div className="flex flex-col items-center md:items-start md:flex-row md:justify-between mb-6">
								<div className="text-center md:text-left">
									<h1 className="text-2xl font-bold">
										Dynamic Interiors
									</h1>
									<p className="text-yellow-400 italic">
										Committed to Excellence
									</p>
								</div>
							</div>

							{/* Information Sections */}
							<div className="flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
								{/* Chief Executive Information */}
								<div className="flex flex-col items-center md:items-start space-y-1">
									<span className="font-medium">
										Chief Executive:
									</span>
									<span>📞 0321-8542021</span>
								</div>

								{/* Services Information */}
								<div className="flex flex-col items-center md:items-start space-y-1">
									<span className="font-medium">
										Services:
									</span>
									<span>
										Builder | Interior | Exterior | Façade
										Work | General Order Suppliers
									</span>
								</div>

								{/* Office Location */}
								<div className="flex flex-col items-center md:items-start space-y-1">
									<span className="font-medium">Office:</span>
									<span>
										Office #3, 1st Floor, A & K Plaza, Plot
										No. 7-E
									</span>
									<span>F-10 Markaz, Islamabad</span>
									<span>📞 051-2299436</span>
								</div>

								{/* Email */}
								<div className="flex flex-col items-center md:items-start space-y-1">
									<span className="font-medium">Email:</span>
									<a
										href="mailto:dynamic.interiors2009@yahoo.com"
										className="text-yellow-400 underline"
									>
										dynamic.interiors2009@yahoo.com
									</a>
								</div>
							</div>
						</div>
					</nav>
				</div>
			</>
		</div>
	);
};

export default Footer;
