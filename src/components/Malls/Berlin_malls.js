import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { PinMapFill} from 'react-bootstrap-icons';
import { ClockFill } from 'react-bootstrap-icons';



const Berlin_malls = () => {

    let malls = [{
        name: 'Mall Of Berlin',
        img: require('../../images/berlin_malls/mall_of_berlin.jpg'),
        description: {
            about: "The Mall of Berlin , also known as the LP12 Mall of Berlin and Leipziger Platz Quartier , is a shopping center in Berlin's Mitte district ",
            opening_hours :"10am - 8pm",
            location:"Leipziger Platz 12, D-10117 Berlin "
        }
    },
    {
        name: 'Bikini Berlin',
        img: require('../../images/berlin_malls/bikini.jpg'),
        description: {
            about:"Retail & dining complex featuring windows & a rooftop with views of animals at the Berlin Zoo.",
            opening_hours :"10am-8pm",
            location:" Budapester Str. 38-50, 10787 Berlin"
        }
    },
    {
        name: 'Alexa Shopping center',
        img: require('../../images/berlin_malls/alexa.jpg'),
        description: {
            about:"Alexa has a rental area of 56,200 m², it was the second-largest shopping centre in Berlin at the time of its opening, after Gropius Passagen, but Alexa was the largest in terms of number of shops. ",
            opening_hours :"10am - 8pm",
            location:"Grunerstraße 20, 10179 Berlin"
        }
    },
    {
        name: 'East Gate Mall',
        img: require('../../images/berlin_malls/eastgate.jpg'),
        description: {
            about: "The Mall of Berlin , also known as kopje East Gate's total area is 500,000 m2 (5,400,000 sq ft), of which 201,000 m2 (2,160,000 sq ft) are reserved for the residential area consisting of 627 residential units, 57,000 m2 (610,000 sq ft) for the shopping and entertainment center ",
                 opening_hours :"10am - 8pm",
            location:"Tamara-Danz-Straße 1110243 Berlin"
        }
    },
    ]

 return (
        <Container>
        <Row lg={2} className="m-4">
            {malls.map((mall) => (
                 <Col className="d-flex "> 
                    <Card className="flex-fill mb-4">
                        <Card.Body>
                            <Card.Title>{mall.name}</Card.Title>
                            <Card.Img  className='mt-4' variant="center" src={mall.img} width="100%" height="180px"/>

                            <Card.Text className='mt-4'>
                               <p> {mall.description.about} </p>
                               <p><ClockFill />{mall.description.opening_hours}</p>
                               <p><PinMapFill />{mall.description.location}</p>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        </Container>
    );


}

export default Berlin_malls