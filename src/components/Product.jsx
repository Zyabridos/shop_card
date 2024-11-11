import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Product = () => {
  const fakeAPI = new URL('https://fakestoreapi.com/products')

  const [products, getProducts] = useState([])

  useEffect(() => {
    axios.get(fakeAPI.href)
      .then(response => response.data)
      .then(result => getProducts(result))
  })
  const cards = products.map(product => (
    <div className="col-md-3" key={product.id} style={{marginBottom: '10px'}}>
      <Card className="h-100">
        <div className='text-center'>
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px'}}/>
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.price}£
          </Card.Text>
        </Card.Body>

        <Card.Footer style={{ background: 'white' }}>
          <Button variant="primary">Add to Card</Button>
        </Card.Footer>
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