import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Caurosel() {
return (
	<div style={{ display: 'block', width: "100%" }}>
	<Carousel>

		<Carousel.Item interval={1000}>
		<img
			className="d-block w-100"
src="https://mcdn.wallpapersafari.com/medium/7/50/Z4Tuv5.jpg"
			alt="Image One"
		/>
		<Carousel.Caption>
			<h3>Label for first slide</h3>
			<p>Sample Text for Image One</p>
		</Carousel.Caption>
		</Carousel.Item>


		<Carousel.Item interval={500}>
		<img
			className="d-block w-100"
src="https://mcdn.wallpapersafari.com/medium/68/57/PvnA3o.jpg"
			alt="Image Two"
		/>
		<Carousel.Caption>
			<h3>Label for second slide</h3>
			<p>Sample Text for Image Two</p>
		</Carousel.Caption>
		</Carousel.Item>

        <Carousel.Item interval={500}>
		<img
			className="d-block w-100"
src="https://mcdn.wallpapersafari.com/medium/76/85/fFsbXB.jpg"
			alt="Image Two"
		/>
		<Carousel.Caption>
			<h3>Label for second slide</h3>
			<p>Sample Text for Image Two</p>
		</Carousel.Caption>
		</Carousel.Item>

	</Carousel>
	</div>
);
}

