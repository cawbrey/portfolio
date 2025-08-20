import React from 'react';

const AboutSection = () => {
	return (
		<section
			style={{
				padding: '60px 20px', // Padding around the section
				textAlign: 'center'
			}}
		>
			<h1
				style={{
					textAlign: 'center',
					fontSize: '4rem',
					fontWeight: 'bold',
					color: '#b7f6ff'
				}}
			>
				About Me
			</h1>

			<div
				style={{
					maxWidth: '800px', // Maximum width for the content
					margin: '0 auto', // Center the content horizontally
					padding: '20px',
					background: '#538b93', // White background for the bubble
					borderRadius: '30px', // Makes it a bubble shape
					boxShadow: '0 0px 8px rgba(0, 0, 0, 0.4)', // Subtle shadow for the bubble
					fontSize: '1.1rem' // Larger text size for readability
				}}
			>
				<p
					style={{
						color: '#b7f6ff',
						fontsize: '3rem'
					}}
				>
					Hello, I'm Carter Awbrey, a passionate software engineer dedicated to solving complex problems.
					Originally from Muscatine, Iowa, I am currently a senior at Iowa State University, pursuing a degree
					in Software Engineering.
					<br />
					My enthusiasm for technology extends far beyond software—it has been a lifelong passion. I currently
					work as a professional software engineer, primarily developing Android applications and maintaining
					server-side code written in .NET.
					<br />
					While I enjoy all aspects of software development, I have a particular interest in backend systems
					and infrastructure. I thrive on the constant learning and problem-solving challenges that come with
					this field, and I am always eager to expand my knowledge and skill set.
				</p>
			</div>

			{/* Resume Link */}
			<div
				style={{
					marginTop: '-10px',
					marginRight: '-60vw'
				}}
			>
				<a
					href='Carter Awbrey - Resume.pdf' // Replace with the path to your resume
					target='_blank'
					rel='noopener noreferrer'
					style={{
						textDecoration: 'none',
						fontSize: '1.2rem',
						color: '#b7f6ff', // Text color
						backgroundColor: '#538b93', // Button background
						fontWeight: 'bold',
						padding: '10px 20px',
						border: '3px solid #b7f6ff', // Border around the button
						borderRadius: '30px', // Rounded corners for the button
						boxShadow: '0 0px 8px rgba(0, 0, 0, 0.9)', // Subtle shadow for the bubble
						transition: 'transform 0.3s ease-in-out' // Smooth transition for hover
					}}
					onMouseEnter={e => (e.target.style.transform = 'scale(1.2)')} // Increase size on hover
					onMouseLeave={e => (e.target.style.transform = 'scale(1)')} // Reset size when hover ends
				>
					My Resume
				</a>
			</div>
		</section>
	);
};

export default AboutSection;
