import React from 'react'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import Products from '../components/products/Products'

const Shop = () => {
  return (
    <>
        <Breadcrumb bc={"Shop"} />
        <Products />
    </>
  )
}

export default Shop