import {useContext, useRef, useState} from 'react'
import ProductContext from '../../context/ProductContext'
import {FaTrashAlt} from 'react-icons/fa'
import './Basket.sass'

const Basket = () => {

    const {basket, setBasket, basketOn, setBasketOn} = useContext(ProductContext)


    const toggleBasket = () => {
        setBasketOn(false)
    }

    const removeItem = (e) => {
        if(e.target.classList.contains('trash')) {

            const basketWithoutCurrent = basket.filter(item=> item.id !== e.target.parentElement.getAttribute('listid'))

            setBasket([...basketWithoutCurrent])
        }
            
    }

  return (
    <div className={basketOn ? 'basket active' : 'basket'}>
        <div className="basket_head">
            <p>Your Cart</p>
            <button onClick={toggleBasket}>X</button>
        </div>

        {
                basket.map(item => (
                    
                    <div  key={item.id} listid={item.id} className="basket_product">
                        <div className="basket_product-img">
                            <img src={item.image} alt={item.pName} />
                        </div>
                        <div className="basket_product-desc">
                            <p className='name'>{item.pName}</p>
                            <p className='price'>{item.price} * {item.amount} = {item.price.slice(0, -1)*item.amount}€ </p>
                            <p className='size'>Size: <span>{item.size}</span></p>
                        </div>
                        <p onClick={removeItem} className='trash' >X</p>
                    
                    </div>
                ))

        }
    </div>
  )
}

export default Basket