import React from 'react';
import Titlebar from './Titlebar';
import HomeSection from './HomeSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import AboutSection from './AboutSection';
import Footer from './Footer';

const App = () => {
	const navLinks = [
		{ label: 'Home', href: '#home' },
		{ label: 'Skills', href: '#skills' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'About', href: '#about' }
	];

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				alignContent: 'center',
				padding: '0px 20px'
			}}
		>
			{/* Container for the TitleBar with controlled width */}
			<div
				style={{
					position: 'fixed',
					width: '90%',
					maxWidth: '1200px',
					zIndex: 100
				}}
			>
				<Titlebar navLinks={navLinks} />
			</div>

			{/* Main Content */}
			<div
				style={{
					// justifyContent: "center",
					// alignItems: "center",
					marginBottom: '-20px'
				}}
			>
				<section
					id='home'
					style={{
						paddingTop: '60px',
						background: '#e7fcff'
					}}
				>
					<div
						style={{
							paddingLeft: '60px',
							paddingRight: '60px',
							width: '90vw',
							marginTop: '60px',
							maxWidth: '1200px'
						}}
					>
						<HomeSection />
					</div>

					<img src='./waves-1.svg' style={{ width: '100vw', height: 'auto' }} />
				</section>

				<section
					id='skills'
					style={{
						background: '#a7c8cc'
					}}
				>
					<div
						style={{
							paddingLeft: '60px',
							paddingRight: '60px',
							width: '90vw',
							maxWidth: '1200px',
							marginTop: '-24px'
						}}
					>
						<SkillsSection />
					</div>

					<img src='./waves-2.svg' style={{ width: '100vw', height: 'auto' }} />
				</section>

				<section
					id='projects'
					style={{
						background: '#69959c'
					}}
				>
					<div
						style={{
							paddingLeft: '60px',
							paddingRight: '60px',
							width: '90vw',
							maxWidth: '1200px',
							marginTop: '-24px'
						}}
					>
						<ProjectsSection />
					</div>
					<img src='./waves-3.svg' style={{ width: '100vw', height: 'auto' }} />
				</section>

				<section
					id='about'
					style={{
						background: '#2b666e'
					}}
				>
					<div
						style={{
							paddingLeft: '60px',
							paddingRight: '60px',
							width: '90vw',
							maxWidth: '1200px',
							marginTop: '-24px'
						}}
					>
						<AboutSection />
					</div>
				</section>
			</div>

			{/* Container for the Footer with controlled width */}
			<div
				style={{
					width: '100vw',
					background: '#2b666e'
				}}
			>
				<Footer />
			</div>
		</div>
	);
};

export default App;
