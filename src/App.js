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
				width: '100%',
			}}
		>
			{/* Container for the TitleBar with controlled width */}
			<div
				style={{
					position: 'fixed',
					width: '100%',
					zIndex: 100,
					display: 'flex',
					justifyContent: 'center'
				}}
			>
				<div style={{ width: '100%', maxWidth: '1200px' }}>
					<Titlebar navLinks={navLinks} />
				</div>
			</div>

			{/* Main Content */}
			<div
				style={{
                    display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: "center",
                    width: '100%',
				}}
			>
				<div
					id='home'
					style={{
						background: '#e7fcff',
                        paddingTop: '100px',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center'
					}}
				>
					<div
						style={{
							width: '100%',
							maxWidth: '1200px',
						}}
					>
						<HomeSection />
					</div>

					<img src='./waves-1.svg' style={{height: 'auto', width: '100%' }} />
				</div>

				<section
					id='skills'
					style={{
						background: '#a7c8cc',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center'
					}}
				>
					<div
						style={{
							width: '100%',
							maxWidth: '1200px',
						}}
					>
						<SkillsSection />
					</div>

					<img src='./waves-2.svg' style={{ height: 'auto', width: '100%' }} />
				</section>

				<section
					id='projects'
					style={{
						background: '#69959c',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center'
					}}
				>
					<div
						style={{
							width: '100%',
							maxWidth: '1200px',
						}}
					>
						<ProjectsSection />
					</div>
					<img src='./waves-3.svg' style={{ height: 'auto', width: '100%' }} />
				</section>

				<section
					id='about'
					style={{
						background: '#2b666e',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
                        paddingBottom: '25vh'
					}}
				>
					<div
						style={{
							width: '100%',
							maxWidth: '1200px',
						}}
					>
						<AboutSection />
					</div>
				</section>
			</div>

			{/* Container for the Footer with controlled width */}
			<div
				style={{
					width: '100%',
					background: '#2b666e',
				}}
			>
                <Footer />
			</div>
		</div>
	);
};

export default App;
