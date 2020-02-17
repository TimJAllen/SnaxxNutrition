import React from 'react';
import './App.scss';
import logo from './images/logo.webp';

function App() {
	return (
		<div>
			<div className='Page'>
				<div className='Banner Margin'>
					<h1 className='PurpleTextThingy'>be original</h1>
				</div>
				<div className='Body Margin'>
					<div className='Products'>
						<div className='Items'>
							<Item name='prod 1' />
							<Item name='prod 2' />
							<Item name='prod 3' />
						</div>
					</div>

					<div className='HowItWorksSpacer' />
					<div className='HowItWorks'>
						HOW DOES IT WORK?<br />we're not exactly sure
					</div>

					<div className='OrderTodaySpacing' />
					<div className='OrderToday'>
						<h1 className='PurpleTextThingy'>ORDER TODAY</h1>
					</div>

					<div className='ReviewSpacing' />
					<div className='Review'>
						<h1>WHAT SNAXXER ARE SAYING</h1>
						<p>we make the big yummy</p>
					</div>
				</div>
				<div className='Footer Margin'>hi nick</div>
			</div>
			<div className='Header'>
				<img src={logo} alt='' className='logo' height='100%' />
			</div>
		</div>
	);
}

const Item = ({ name, url, img }) => {
	return <div className='Item'>{name}</div>;
};

export default App;
