import React from 'react';
import './App.scss';
import logo from './images/logo.webp';
import cereal from './images/cereal.png';

function App() {
	return (
		<div>
			<div className='Page'>
				<div className='Banner Margin'>
					<h1 className='PurpleTextThingy'>BE ORIGINAL.</h1>
				</div>
				<div className='Body Margin'>
					<div className='Products'>
						<div className='Items'>
							<Item name='prod 1' img={cereal} />
							<Item name='prod 2' img={cereal} />
							<Item name='prod 3' img={cereal} />
						</div>
					</div>

					<div className='HowItWorksSpacer' />
					<div className='HowItWorks'>
						HOW DOES IT WORK?<br />we're not exactly sure
					</div>

					<div className='OrderToday ContentSpacers'>
						<h1 className='PurpleTextThingy'>ORDER TODAY</h1>
					</div>

					<div className='Review ContentSpacers'>
						<h1>WHAT SNAXXERS ARE SAYING</h1>
						<p>we make the big yummy</p>
					</div>

					<div className='Photos ContentSpacers'>
						<PhotoItem />
						<PhotoItem />
						<PhotoItem />
						<PhotoItem />
					</div>

					<div className='CallToAction ContentSpacers'>
						<p>we put the 'nut' in nutritional</p>
						<p>call to action</p>
					</div>

					<div style={{ height: '40px' }} />
				</div>
				<div className='Footer Margin'>
					SNAXX NUTRITION is in no way affiliated with STAXX NUTRITION. <br />Any similarity to actual persons, company,
					or product is purely coincidental. <br />© Tim, Eric, Kevin, 2020
				</div>
			</div>
			<div className='Header'>
				<img src={logo} alt='' className='logo' height='100%' />
			</div>
		</div>
	);
}

const Item = ({ name, url, img }) => {
	return (
		<div className='Item'>
			<h3>{name}</h3>
			<img src={img} alt='' className='Image' />
		</div>
	);
};

const PhotoItem = ({ photo }) => {
	return <div className='GridItem'>photo</div>;
};

export default App;
