import {useContext, useState, useEffect} from 'react'
import ProductContext from '../../context/ProductContext'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
    
    const [characters, updateCharacters] = useState(basket);

    useEffect(() => {
        updateCharacters(basket)
    }, [basket])
    

    function handleOnDragEnd(result) {
        if (!result.destination) return;
    
        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        updateCharacters(items);
      }

  return (
    <div className={basketOn ? 'basket active' : 'basket'}>
        <div className="basket_head">
            <p>Your Cart</p>
            <button onClick={toggleBasket}>X</button>
        </div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
                {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {characters.map((item, index) => (
                            <Draggable key={item.id}  draggableId={item.id} index={index}>
                                {(provided) => (
                                    <li  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <div  listid={item.id} className="basket_product">
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
                                    </li>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
           </Droppable>
        </DragDropContext>
    </div>
  )
}

export default Basket