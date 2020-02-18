import React from 'react';
import './App.scss';
import logo from './images/logo.png';
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
						<h3>HOW DOES IT WORK?</h3>
						<div className='Steps'>
							<p>
								<b>1.</b> Pick out your Snaxx
							</p>
							<p>
								<b>2.</b> Order your Snaxx
							</p>
							<p>
								<b>3.</b> Eat your Snaxx
							</p>
						</div>
						<p>
							<b>Question</b>: Is it really that simple?!
						</p>
						<p>
							<b>Answer</b>: Yes! Eating food is usually pretty easy.
						</p>
					</div>

					<div className='OrderToday ContentSpacers'>
						<h1 className='PurpleTextThingy'>ORDER TODAY</h1>
					</div>

					<div className='Review ContentSpacers'>
						<h1>WHAT SNAXXERS ARE SAYING</h1>
						<p>"we make the big yummy"</p>
						<p>"they put the 'nut' in my nutrition"</p>
						<p>"golly gosh this is good"</p>
					</div>

					<div className='Photos ContentSpacers'>
						<PhotoItem />
						<PhotoItem />
						<PhotoItem />
						<PhotoItem />
					</div>

					<div className='CallToAction ContentSpacers'>
						<h1 className='PurpleTextThingy'>PLS BUY</h1>
						{/* <p>we put the 'nut' in nutritional</p>
						<p>call to action</p> */}
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
