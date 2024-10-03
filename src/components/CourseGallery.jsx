export default function CourseGallery() {
	return (
		<div>
			<div className="mb-5 mt-10">
				<h1
					id="category-name"
					className="text-center font-semibold text-5xl mb-5"
				>
					Course Gallery
				</h1>
				<hr className="w-3/4 mx-auto" />
			</div>
			<div>
				<div className="bg-base-200 shadow-xl rounded-lg lg:px-1 lg:pt-1">
					<div className="-m-1 flex flex-wrap md:-m-2">
						<div className="flex w-1/2 flex-wrap">
							<div className="w-1/2 p-1 md:p-2">
								<img
									alt="gallery"
									className="block h-full w-full rounded-lg object-cover object-center"
									src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
								/>
							</div>
							<div className="w-1/2 p-1 md:p-2">
								<img
									alt="gallery"
									className="block h-full w-full rounded-lg object-cover object-center"
									src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
								/>
							</div>
							<div className="w-full p-1 md:p-2">
								<img
									alt="gallery"
									className="block h-full w-full rounded-lg object-cover object-center"
									src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
								/>
							</div>
						</div>
						<div className="flex w-1/2 flex-wrap">
							<div className="w-full p-1 md:p-2">
								<img
									alt="gallery"
									className="block h-full w-full rounded-lg object-cover object-center"
									src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
								/>
							</div>
							<div className="w-1/2 p-1 md:p-2">
								<img
									alt="gallery"
									className="block h-full w-full rounded-lg object-cover object-center"
									src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
								/>
							</div>
							<div className="w-1/2 p-1 md:p-2">
								<img
									alt="gallery"
									className="block h-full w-full rounded-lg object-cover object-center"
									src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
