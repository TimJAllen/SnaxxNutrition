import React from 'react';
import './App.scss';
import logo from './images/logo.png';
import cereal1 from './images/cereal1.png';
import cereal2 from './images/cereal2.png';
import cereal3 from './images/cereal3.png';
import photo1 from './images/photo1.jpg';
import photo2 from './images/photo2.jpg';
import photo3 from './images/photo3.jpg';
import photo4 from './images/photo4.jpg';

function App() {
	return (
		<div>
			<div className='Header'>
				<img src={logo} alt='' className='logo' height='100%' />
			</div>
			<div className='Page'>
				<div className='Banner Margin'>
					<h1 className='PurpleTextThingy'>BE ORIGINAL.</h1>
				</div>
				<div className='Body Margin'>
					<div className='Stuff'>
						<div className='Products'>
							<div className='Items'>
								<Item
									name='Lucky charms'
									img={cereal1}
									url='https://www.amazon.com/Lucky-Charms-Marshmallow-Treats-Pack/dp/B07HCK9FMK/ref=sr_1_4?keywords=cereal+bars+lucky+charms&qid=1582409842&sr=8-4'
								/>
								<Item
									name='Trix'
									img={cereal2}
									url='https://www.amazon.com/Trix-Cereal-Bar-1-42-Count/dp/B01E3TEY00/ref=sr_1_16?keywords=cereal+bars&qid=1582409852&sr=8-16'
								/>
								<Item
									name='Fruity Pebbles'
									img={cereal3}
									url='https://www.amazon.com/Post-Fruity-Pebbles-Treats-8-Count/dp/B004R8DEEK/ref=sr_1_17?keywords=cereal+bars&qid=1582409852&sr=8-17'
								/>
							</div>
						</div>

						<div className='HowItWorks ContentSpacers'>
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
							<PhotoItem photo={photo1} />
							<PhotoItem photo={photo2} />
							<PhotoItem photo={photo3} />
							<PhotoItem photo={photo4} />
						</div>

						<div className='CallToAction ContentSpacers'>
							<h1 className='PurpleTextThingy'>PLS BUY</h1>
							{/* <p>we put the 'nut' in nutritional</p>
                            <p>call to action</p> */}
						</div>

						<div style={{ height: '40px' }} />
					</div>
				</div>
				<div className='Footer Margin'>
					SNAXX NUTRITION is in no way affiliated with STAXX NUTRITION.
					<br />
					Any similarity to actual persons, company, or product is purely coincidental.
					<br />
					© Tim, Eric, Kevin, 2020
				</div>
			</div>
		</div>
	);
}

const Item = ({ name, url, img }) => {
	return (
		<a className='Product' href={url}>
			<h3>{name}</h3>
			<img className='Image' src={img} alt={name} />
		</a>
		// <div className='Item'>
		//  <h3>{name}</h3>
		//  <img src={img} alt='' className='Image' />
		// </div>
	);
};

const PhotoItem = ({ photo }) => {
	return (
		<div className='GridItem'>
			<img className='Image' src={photo} alt='' />
		</div>
	);
};

export default App;
