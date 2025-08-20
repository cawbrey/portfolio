import React from 'react';

const SkillsSection = () => {
	const skills = [
		'C/C++',
		'C#/.NET',
		'Java',
		'Android',
		'Spring',
		'SQL',
		'MongoDB',
		'CUDA',
		'ROCm/HIP',
		'Javascript',
		'Docker',
		'Linux',
		'Git',
		'Agile'
	];

	return (
		<section
			id='skills'
			style={{
				textAlign: 'center'
			}}
		>
			{/* Title */}
			<h1
				style={{
					fontSize: '4rem',
					fontWeight: 'bold',
					color: '#04464e',
					marginBottom: '40px'
				}}
			>
				Skills
			</h1>

			{/* Skills Container */}
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					backgroundColor: '#e7fcff',
					gap: '30px',
					padding: '30px',
					maxWidth: '1200px',
					borderRadius: '30px',
					boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.2)'
				}}
			>
				{/* Skill Bubbles */}
				{skills.map((skill, index) => (
					<div
						key={index}
						style={{
							padding: '20px',
							background: '#d3f8fe',
							borderRadius: '30px',
							boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontSize: '1.2rem',
							color: '#04464e',
							fontWeight: 'bold',
							cursor: 'pointer',
							transition: 'transform 0.3s ease-in-out'
						}}
						onMouseEnter={e => (e.target.style.transform = 'scale(1.1)')}
						onMouseLeave={e => (e.target.style.transform = 'scale(1)')}
					>
						{skill}
					</div>
				))}
			</div>
		</section>
	);
};

export default SkillsSection;
