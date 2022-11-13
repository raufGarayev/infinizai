import {useContext, useRef} from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import './ProductView.sass'
import ProductContext from '../../context/ProductContext'

const ProductView = () => {

  const sizeInput = useRef()
  const amountInput = useRef()

  const {image, pName, price, basket, setBasket, size, setSize, amount, setAmount} = useContext(ProductContext)

  const prepareBasket = (e) => {
    e.preventDefault()
    setBasket([...basket, {
      pName,
      price,
      image
    }])
    setSize(sizeInput.current.value)
    
  }

  const addAmount = (e) => {
    setAmount(e.target.value)
  }

  return (
    <section className='productview'>
        <Breadcrumb bc={"Shop"} />
        <div className="productview_buy">
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
                  <select ref={sizeInput} name="size" id="size">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </div>
                <div className="productview_buy-desc-form-quantity">
                  <label htmlFor="quantity">Quantity</label>
                  <input onChange={addAmount} ref={amountInput} type="number" placeholder='1' value={amount} />
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