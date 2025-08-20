import React from 'react';

const projects = [
	{
		title: 'Ray Tracing Renderer',
		description:
			'My ray tracing program capable of realistically simulating light rays to render highly realistic images. This complex and difficult project involved self-learning CUDA and ROCm/HIP, parallel computing platforms, to leverage GPU acceleration and significantly improve performance. These techniques are commonly used in industries such as film and gaming to achieve lifelike graphics and effects.',
		image: 'raytracer.png'
	},
	{
		title: 'Soul Flame',
		description:
			'Soul Flame is a single-player puzzle game designed around the unique challenge of utilizing a singular light source to navigate and solve puzzles. Developed within a 48-hour game-making competition, the game was created by a team of four and earned 2nd place. My primary contribution was gameplay programming, where I focused on developing features within the Unity game engine.',
		image: 'soulflame.gif'
	},
	{
		title: 'Quoridor',
		description:
			'Quoridor is a multiplayer board game app developed for Android, featuring both server and client applications. Created as part of a project-based class, the app was a collaborative effort by a team of four, where I focused primarily on the development of the Android client. Our project achieved 2nd place in the class competition, and I was personally recognized with the Best Coder Award for my contributions.',
		image: 'quoridor.png'
	},
	{
		title: 'Butterfly Longevity Tracker (Ongoing)',
		description:
			'The Butterfly Longevity Tracker is a senior design project at Iowa State University, developed in collaboration with a real-world client. This system enables researchers to track butterfly lifespans by recording sightings from the general public. Data is stored in a centralized database, allowing institutions to share and analyze information for scientific research. It was built using React, Spring Boot, and MongoDB. This project is currently under active development by myself and my team.',
		image: 'blt.png'
	}
];

const ProjectsSection = () => {
	return (
		<section
			id='projects'
			style={{
				textAlign: 'center'
			}}
		>
			<h2 style={{ fontSize: '4rem', marginBottom: '40px', color: '#333' }}>Projects</h2>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '40px',
					alignItems: 'center'
				}}
			>
				{projects.map((project, index) => (
					<div
						key={index}
						style={{
							display: 'flex',
							flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', // Alternate image position
							alignItems: 'center',
							maxWidth: '900px',
							width: '100%',
							gap: '20px',
							backgroundColor: '#fff',
							boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
							borderRadius: '10px',
							overflow: 'hidden'
						}}
					>
						{/* Project Image */}
						<div
							style={{
								flex: '1',
								minHeight: '150px',
								backgroundImage: `url(${project.image})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center'
							}}
						></div>
						{/* Project Details */}
						<div
							style={{
								flex: '2',
								padding: '20px',
								textAlign: 'left'
							}}
						>
							<h3
								style={{
									fontSize: '1.5rem',
									marginBottom: '10px',
									color: '#222'
								}}
							>
								{project.title}
							</h3>
							<hr
								style={{
									border: 'none',
									borderTop: '2px solid #538b93',
									width: '50px',
									margin: '10px 0'
								}}
							/>
							<p style={{ fontSize: '1rem', color: '#555' }}>{project.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;
