import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import uniqueId from 'lodash/uniqueId'


const Product = () => {
  const fakeAPI = new URL('https://fakestoreapi.com/products')

  const [products, getProducts] = useState([])

  useEffect(() => {
    axios.get(fakeAPI.href)
      .then(response => response.data)
      .then(result => getProducts(result))
  })
  const cards = products.map(product => (
    <div className="col-md-3" key={uniqueId()}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Here will be description of the product
          </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    </div>
  ))
  return (
    <>
    <h1>Our products</h1>
    <div className="row">
      {cards}
    </div>
    </>
  )
}

export default Product