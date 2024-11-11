import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { remove } from '../store/cartSlice.jsx'

const Cart = () => {
  const products = useSelector(state => state.cart.cart)
  console.log(products)

  const dispatch = useDispatch();
  const removeFromCart = (id) => {
    dispatch(remove(id))
};

  const cards = products.map(product => (
    <div className="col-md-12" key={product.id} style={{marginBottom: '10px'}}>
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
          <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove from cart</Button>
        </Card.Footer>
    </Card>
    </div>
  ))
  
  return (
    <>
    <div className='row'>
      {cards}
    </div>
    </>
  )
}

export default Cart