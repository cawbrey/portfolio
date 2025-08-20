import React from 'react';

const HomeSection = () => {
	return (
		<section
			id='home'
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: '60px 20px',
				height: '50vh'
			}}
		>
			{/* Left Side - "Hello" */}
			<div style={{ flex: 1, textAlign: 'left' }}>
				<h1
					style={{
						fontSize: '4rem',
						fontWeight: 'bold',
						color: '#037583',
						marginBottom: '20px'
					}}
				>
					Hi 👋 I'm
					<br />
					Carter Awbrey
				</h1>
				<div
					style={{
						borderBottom: '2px solid #037583',
						width: '90%',
						marginBottom: '20px',
						boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.5)' // Optional: shadow for depth
					}}
				></div>
				<p
					style={{
						fontSize: '20px',
						color: '#037583'
					}}
				>
					Software Engineer
				</p>
			</div>

			{/* Right Side - Picture */}
			<div style={{ flex: 1 }}>
				<img
					src='./headshot_transparent.png'
					alt='Carter Awbrey'
					style={{
						width: '100%',
						//maxWidth: "400px",
						borderRadius: '30px',
						objectFit: 'fill',
						boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.4)', // Optional: shadow for depth
						backgroundColor: '#037583'
					}}
				/>
			</div>
		</section>
	);
};

export default HomeSection;
