import React from "react";

const About = () => {
	return (
		<div className="flex-1 justify-center items-center h-screen">
            <div
              className="bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/home_background.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                width: '100%',
                height: '100%',
              }}
            >
				<ul className="text-gray-100 px-5 py-4 text-xl font-bold">
					<h1>
					Background image: 
					<p className="font-normal">
					https://pixabay.com/illustrations/backpacker-road-walk-anime-7628303/
					</p>
					</h1>
					<h1>	                
					APIs used: 
					<p className="font-normal">AnimeThemes.moe</p>
					</h1>

				</ul>
			</div>
		</div>
	);
};

export default About;
