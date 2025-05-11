/** @format */

const Contact = () => {
	return (
		<div style={{ backgroundColor: "#fdf8f4", padding: "4rem 0" }}>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 relative max-w-6xl mx-auto">
					{/* First Column */}
					<div className="flex flex-col items-center w-full">
						<div className="h-[600px] w-4/5 overflow-hidden">
							<img
								src="https://tomah.sa/uploads/products/8.jpg"
								alt="Location"
								className="attachment-full size-full w-full h-full object-cover"
								style={{ borderRadius: "50em 50em 0 0" }}
								loading="lazy"
								decoding="async"
							/>
						</div>
						<div className="w-4/5 text-center">
							<h3 className="text-3xl font-serif italic font-light mt-8 mb-6">
								Location
							</h3>
							<p className="text-center font-light tracking-wide leading-relaxed text-gray-700">
								<span className="block">
									<a
										href="https://www.google.com/maps/search/?api=1&query=DMAJ8018,+5153+King+Abdullah+Branch+Rd,+Madinah+42319,+Saudi+Arabia"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-gray-900 transition-colors duration-300">
										<span className="text-black text-lg  block mb-3">
											طٌعمة، DMAJ8018
										</span>
										<span className="text-black text-lg block mb-2">
											5153 King Abdullah Branch Rd, حي مهزور, 8018, Madinah
											42319
										</span>
										<span className="text-black text-base block mb-4">
											المدينة المنورة 42210، المملكة العربية السعودية
										</span>
									</a>
									<a
										href="tel:+966583250000"
										className="text-xl  text-black block mt-4 hover:text-gray-700 transition-colors duration-300">
										+966 58 325 0000
									</a>
								</span>
							</p>
						</div>
					</div>

					{/* Vertical Line Divider */}
					<div className="hidden md:block absolute left-1/2 top-[20%] bottom-[20%] w-px bg-gray-300 transform -translate-x-1/2"></div>

					{/* Second Column */}
					<div className="flex flex-col items-center w-full">
						<div className="h-[600px] w-4/5 overflow-hidden">
							<img
								src="https://tomah.sa/uploads/products/9.jpg"
								alt="Restaurant"
								className="attachment-full size-full w-full h-full object-cover"
								style={{ borderRadius: "50em 50em" }}
								loading="lazy"
								decoding="async"
							/>
						</div>
						<div className="w-4/5 text-center">
							<h3 className="text-3xl font-serif italic font-light mt-8 mb-6">
								Working Hours
							</h3>
							<p className="text-center font-light tracking-wide leading-relaxed">
								<span className="block mb-4">
									<span className="text-gray-800">Saturday & Sunday</span>
									<br />
									<span className="text-sm text-gray-600">Reservations</span>
									<br />
									<span className="italic">12:00 pm - 1:30 pm</span>
								</span>
								<span className="block">
									<span className="text-gray-800">Thursday to Sunday</span>
									<br />
									<span className="text-sm text-gray-600">Reservations</span>
									<br />
									<span className="italic">6:00 pm - 8:45 pm</span>
								</span>
							</p>
						</div>
					</div>
				</div>

				<div className="w-screen relative -mx-4 lg:-mx-8">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d907.8191101387397!2d39.66079837538592!3d24.440296477707634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bd95535e8cfba3%3A0x6c20f3e111d4579b!2z2LfZjdi52YXYqQ!5e0!3m2!1sar!2ssa!4v1704899987654!5m2!1sar!2ssa"
						className="w-full h-[400px] rounded-3xl overflow-hidden"
						style={{ border: 0, margin: 0, padding: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
		</div>
	);
};

export default Contact;
