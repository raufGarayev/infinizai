import {useContext, useRef} from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import './ProductView.sass'
import ProductContext from '../../context/ProductContext'

const ProductView = () => {

  const theProduct = useRef()

  const {image, pName, price, basket, setBasket, size, setSize, amount, setAmount, id} = useContext(ProductContext)

  const prepareBasket = (e) => {
    e.preventDefault()

    const basketItem = basket.find(item=>item.id === e.target.parentElement.parentElement.parentElement.getAttribute('listid') )

    if(basketItem) {
      setBasket([...basket.filter(item=>item.id !== e.target.parentElement.parentElement.parentElement.getAttribute('listid')), basketItem])
    }
    else {
      setBasket([...basket, {
        pName,
        price,
        image,
        id,
        size,
        amount
      }])
    }
  }

  const sizeInput = (e) => {
    setSize(e.target.value)
  }

  const addAmount = (e) => {
    setAmount(e.target.value)
  }

  return (
    <section className='productview'>
        <Breadcrumb bc={"Shop"} />
        <div ref={theProduct} listid={id} className="productview_buy">
          <div className="productview_buy-img">
            <img src={image} alt={pName} />
          </div>
          <div className="productview_buy-desc">
            <div className="productview_buy-desc-nameprice">
              <p className='name'>{pName}</p>
              <p className='price'>{price}</p>
            </div>
            <div className="productview_buy-desc-form">
              <form onSubmit={prepareBasket}>
                <div className="productview_buy-desc-form-size">
                  <label htmlFor="size">Size</label>
                  <select required onChange={sizeInput} name="size" id="size">
                    <option value="">Select an Option</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </div>
                <div className="productview_buy-desc-form-quantity">
                  <label htmlFor="quantity">Quantity</label>
                  <input onChange={addAmount} defaultValue={1} type="number" placeholder='1' />
                </div>
                <button type='submit'>Add to Cart</button>
              </form>

            </div>

          </div>
        </div>
    </section>
  )
}

export default ProductView