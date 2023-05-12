import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const BookTable = () => {

	const [cities, setCities] = useState([]);
	const [malls, setMalls] = useState([]);
	const [restaurants, setRestaurants] = useState([]);
	const [selectedCity, setSelectedCity] = useState('Select a city');
	const [selectedMall, setSelectedMall] = useState('Select a Mall');
	const [selectedRestaurant,setSelectedRestaurant] = useState('Select a restaurant');


	useEffect(() => {

		setCities(arr => ([
			{ name: 'Berlin', malls: [{ name: 'Bikini Berlin', restaurants: ['808 Club Berlin', 'Bibimix'] }, { name: 'Mall Of Berlin', restaurants: ['Asia Pavillon', 'Aradhya'] }, { name: 'East Gate Mall', restaurants: ['Fresh Roll', 'Abadan Grill'] }, { name: 'Alexa', restaurants: ['Sirin Doner', 'Subway'] }] },
			{ name: 'Frankfurt', malls: [{ name: 'Nordwest Zentrum', restaurants: ['Bruken cafe', 'Bibimix'] }, { name: 'Skyline Plaza', restaurants: ['Starbucks', 'Ditsch'] }] },
			{ name: 'Hamburg', malls: [{ name: 'Europa Passage', restaurants: ['Starbucks', 'Kfc'] }, { name: 'Galleria', restaurants: ['Cafe Treva', 'Jellyfish Bude'] }, { name: 'Hamburger Meile', restaurants: ['Chutney Indian Food', 'BOBOQ'] }] },
		]))



	}, []);

	const changeCity = (event) => {
		setSelectedCity(arr => event.target.value);
		console.log("selected city",{selectedCity})
		setMalls(arr => (cities.find(cntry => cntry.name === event.target.value).malls));
		console.log(" semalls..");
	}

	const changeMall = (event) => {
		setSelectedMall(arr => event.target.value);
		const malls1 = cities.find((cty) => cty.name === selectedCity).malls;
		setRestaurants(arr => (malls1.find((mall) => mall.name === event.target.value).restaurants));
	}

	const changeRest =(event ) =>
	{
		setSelectedRestaurant(arr => event.target.value);

	}

	return (
		<div id="container">

			<div>
				<Row className='mb-2'>
					<Col xs lg="2"><label>City</label></Col>
					<Col><select placeholder="City" value={selectedCity} onChange={changeCity}>
						<option>Select City</option>
						{cities.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select></Col></Row>
			</div>

			<div>
				<Row className='mb-2'>
					<Col xs lg="2"><label>Mall</label> </Col>
					<Col>	<select placeholder="Mall" value={selectedMall} onChange={changeMall}>
						<option>Select Mall</option>
						{malls.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select></Col></Row>
			</div>

			<div>
				<Row className='mb-2'>
					<Col xs lg="2"><label>Restaurants</label> </Col>
					<Col>
					<select placeholder="Mall" value={selectedRestaurant} onChange={changeRest} >
						<option>Select Restaurant</option>
						{restaurants.map((e) => {
							return <option>{e}</option>;
						})}
					</select>
					</Col> 
					</Row>
			</div>
		</div>
	)
}

export default BookTable