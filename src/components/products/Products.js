import {useRef, useContext } from 'react'
import './Products.sass'
import products from '../../products.json'
import { Link } from 'react-router-dom'
import ProductContext from '../../context/ProductContext'


const Products = () => {

    const {image, setImage, pName, setPname, price, setPrice, id, setId} = useContext(ProductContext)

    const prepareProduct = (e) => {
        setImage(e.target.parentElement.children[0].children[0].src)
        setPname(e.target.parentElement.children[1].innerText)
        setPrice(e.target.parentElement.children[2].innerText)
        setId(e.target.parentElement.getAttribute("listid"))
    }

  return (
    <section className='products'>
        <div className="products_list">
            {
                products.map(p => (
                    <div key={p.id} listid={p.id} className="products_list-card">
                        <div className="products_list-card-img">
                            <img src={p.image} alt="img" />
                        </div>
                        <p className='name'>{p.name}</p>
                        <p className='price'>{p.price}</p>
                        <Link onClick={prepareProduct} to='/oneproduct'>View Product</Link>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Products