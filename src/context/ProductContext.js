import {createContext, useState} from 'react'

const ProductContext = createContext()

export const ProductProvider = ({children}) => {
    const [image, setImage] = useState(null)
    const [pName, setPname] = useState(null)
    const [price, setPrice] = useState(null)
    const [id, setId] = useState(null)
    const [basket, setBasket] = useState([])
    const [size, setSize] = useState("")
    const [amount, setAmount] = useState(1)
    const [basketOn, setBasketOn] = useState(false)

    const values = {
        image,
        setImage,
        pName,
        setPname, 
        price,
        setPrice,
        basket,
        setBasket,
        size,
        setSize,
        amount,
        setAmount,
        id,
        setId,
        basketOn,
        setBasketOn
    }

    return <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
}

export default ProductContext;