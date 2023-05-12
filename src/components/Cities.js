import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import berlin1 from '../images/berlin1.jpg'
import berlin2 from '../images/berlin2.jpg'
import frankfurt1 from '../images/frankfurt1.jpg'
import frankfurt2 from '../images/frankfurt2.jpg'
import hamburg1 from '../images/hamburg1.jpg'
import hamburg2 from '../images/hamburg2.jpg'
import cologne1 from '../images/cologne1.jpg'
import cologne2 from '../images/cologne2.jpg'
import munich1 from '../images/munich1.jpg'
import munich2 from '../images/munich2.jpg'

const Cities = () => {
    return (
        <Container className="mt-5 ms-5">
            <Row className='mt-5'>
                <Col xs={7}><h2 className='my-4'>Berlin</h2>
                    <p>Germany’s capital city combines layers of the nation’s rich history with all aspects of a modern metropolis. Berlin, Germany’s largest city, is teeming with exceptional architecture. Within those hallowed structures, you’ll find remnants of Germany’s story, including the Reichstag, the Brandenburg Gate, and the Berlin Wall. </p>
                </Col>
                <Col >
                    <img className='rounded mt-4' src={berlin1} alt="Berlin1" width="100%" height="100%" />

                </Col>
                <Col> <img className='rounded' src={berlin2} alt="Berlin2" width="100%" height="100%" /></Col>
            </Row>

            <Row className="mt-5">
                <Col >
                    <img className='rounded' src={frankfurt1} alt="Berlin1" width="100%" height="100%" />

                </Col>
                <Col> <img className='rounded mt-4' src={frankfurt2} alt="Berlin2" width="100%" height="100%" /></Col>
                <Col xs={7}><h2 className='my-4'>Frankfurt</h2>
                    <p>With an airport as busy as any in the world, Frankfurt has long been a central part of Europe. A worldly hub, you’ll find an abundance of international students, making use of Frankfurt’s many connections as one of the largest German cities.</p>
                </Col>

            </Row>

            <Row className="mt-5">
                <Col xs={7}><h2 className='my-4'>Munich</h2>
                    <p>Munich is the wealthy capital of Bavaria and the gateway to the Alps. It is said to be one of the most beautiful and charming cities in all of Germany and is filed with museums and beautiful architecture. It is most famous for being the centre of Oktoberfest festivities, which attracts over 6 million visitors every year.                     </p>
                </Col>
                <Col >
                    <img className='rounded mt-4' src={munich1} alt="Berlin1" width="100%" height="100%" />

                </Col>
                <Col> <img className='rounded' src={munich2} alt="Berlin2" width="100%" height="100%" /></Col>
            </Row>

            <Row className="mt-5">
                <Col >
                    <img className='rounded ' src={hamburg1} alt="Berlin1" width="100%" height="100%" />
                </Col>
                <Col> <img className='rounded mt-4' src={hamburg2} alt="Berlin2" width="100%" height="100%" /></Col>
                <Col xs={7}><h2 className='my-4'>Hamburg</h2>
                    <p>One of the largest cities in Germany, Hamburg, is steeped in history. Its beguiling skyline is without skyscrapers, with ornate church spires standing clear above it all. But perhaps the most memorable aspect of Hamburg is the canals, despite being a ways inland from the North Sea. </p>
                </Col>

            </Row>
            <Row className="mt-5">
                <Col xs={7}><h2 className='my-4'>Cologne</h2>
                    <p>In the six centuries that it took to build the cathedral, Cologne developed a unique culture. Along the North Rhine, the city’s Old Town is lathered in fascinating tales of yore. Once a Roman outpost, you’ll find ruins and reminders of those ancient times.

                        But as you walk by old Roman and Gothic structures, Cologne can’t help but showcase her modern culture. A vibrant and bustling city, Cologne has one of the best nightlife scenes in Germany.                    </p>
                </Col>
                <Col >

                    <img className='rounded mt-4' src={cologne1} alt="Berlin1" width="100%" height="100%" />


                </Col>
                <Col> <img className='rounded' src={cologne2} alt="Berlin2" width="100%" height="100%" /></Col>
            </Row>
        </Container>

    )
}

export default Cities