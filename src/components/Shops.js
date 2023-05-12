import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import shopsList from '../ShopsList'
import { PinMap } from 'react-bootstrap-icons'
import { Shop } from 'react-bootstrap-icons';

function Shops() {

    const categories = [
        "All",
        "Clothing & Fashion",
        "Restaurants",
        "Bags",
        "Toys & Hobbies",
        "Sports",
        "Supermarket"
    ]


    const [filterByCat, setFilterByCat] = useState([]);

    const filterShop = (e, shopsList) => {
        const selectedCat = e.target.value;
        const shops = shopsList.shopsList;

        console.log("filter", shops.filter(shop => shop.category == selectedCat))

        if (selectedCat === "All")
            setFilterByCat(shops)
        else {
            setFilterByCat(
                shops.filter(shop => shop.category === selectedCat
                )
            )
        }

    }

    return (
        <div>

            <div>
                {categories.map(function (name) {
                    return <button className="shops" value={name} onClick={(e) => filterShop(e, { shopsList })}>{name}</button>
                })}

            </div>
            <Row lg={4} className="m-4">

                {filterByCat.map((shop) => (

                    <Col className="d-flex">
                        <Card className="flex-fill mb-4">
                            <Card.Body>
                                <Card.Title>{shop.name}</Card.Title>
                                <Card.Img className='mt-4' variant="center" src={shop.logo} width="100%" height="180px" />

                                <Card.Text className='mt-4'>
                                    <p><Shop styles="vertical-align: bottom " /> <label>{shop.mall}</label> </p>
                                    <p><PinMap className="mr-2" />{shop.city}</p>


                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}


            </Row>
        </div>
    )
}

export default Shops