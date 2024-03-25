import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { error, loading, products } = productList
  console.log(products)
  useEffect(()=> {
    dispatch(listProducts())

  }, [])

  return (
    <div><h1>Latest Products</h1>
        {loading ? <h2>Loading</h2> 
                 : error ? <h3>{error}</h3>
                 :<Row>
                 {products.map(product=>(
                     <Col key={product._id} sm={12} md={6} lg={4} xl={3}> 
                     <h3>
                         <Product product={product}/>
                     </h3>
                     </Col>
                 ))}
             </Row>
        }
        
    
    </div>
  )
}

export default HomeScreen