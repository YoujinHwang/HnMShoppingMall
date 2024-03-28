import React from 'react'
import { useEffect,useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container,Row,Col } from 'react-bootstrap';

const ProductAll = () => {
  let [productList, setProductList]=useState([]);

  const getProducts=async ()=>{
    let url=`https://my-json-server.typicode.com/YoujinHwang/HnMShoppingMall/products`;
    let response=await fetch(url);
    let data=await response.json();
    setProductList(data);
  }
  useEffect(()=>{
    getProducts()
  },[])
  return (
      <Container>
        <Row>
          {productList.map((menu)=>(
            <Col lg={3} sm={12}>
              <ProductCard item={menu}/></Col>
          ))}
         
        </Row>
      </Container>
      // <ProductCard/>
   
  )
}

export default ProductAll