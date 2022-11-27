import {useContext} from 'react'
import './Products.sass'
import products from '../../products.json'
import { Link } from 'react-router-dom'
import ProductContext from '../../context/ProductContext'


const Products = () => {

    const {image, setImage, pName, setPname, price, setPrice, id, setId, setViewedProduct} = useContext(ProductContext)

    const prepareProduct = (e) => {
        setImage(e.target.parentElement.children[0].children[0].src)
        setPname(e.target.parentElement.children[1].innerText)
        setPrice(e.target.parentElement.children[2].innerText)
        setId(e.target.parentElement.getAttribute("listid"))
        setViewedProduct({image, pName, price, id})
    }

  return (
    <section className='products'>
        <div className="products_list">
            {
                products.map(p => (
                    <div key={p.id} listid={p.id} className="products_list-card">
                        <div className="products_list-card-img">
                            <img src={process.env.PUBLIC_URL + p.image} alt="img" />
                        </div>
                        <p className='name'>{p.name}</p>
                        <p className='price'>{p.price}</p>
                        <Link onClick={prepareProduct} to={p.name.replace(/ /g,'-')}>View Product</Link>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Products