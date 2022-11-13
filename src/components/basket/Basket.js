import {useContext} from 'react'
import ProductContext from '../../context/ProductContext'
import './Basket.sass'

const Basket = () => {

    const {image, pName, price, size, amount, basket, setBasket, basketOn, setBasketOn} = useContext(ProductContext)

    const toggleBasket = () => {
        setBasketOn(false)
    }

  return (
    <div className={basketOn ? 'basket active' : 'basket'}>
        <div className="basket_head">
            <p>Your Cart</p>
            <button onClick={toggleBasket}>X</button>
        </div>

        {

                basket.map(item=>(
                    <div className="basket_product">
                    <div className="basket_product-img">
                        <img src={item.image} alt={item.pName} />
                    </div>
                    <div className="basket_product-desc">
                        <p className='name'>{item.pName}</p>
                        <p className='price'>{item.price}</p>
                        <p className='size'>Size: <span>{size}</span></p>
                    </div>
                    <div className="basket_product-amount">
                        <input readOnly type="number" value={amount} /> 
                    </div>
                </div>
                ))

        }
    </div>
  )
}

export default Basket