import {createContext, useState} from 'react'

const ProductContext = createContext()

export const ProductProvider = ({children}) => {
    const [image, setImage] = useState(null)
    const [pName, setPname] = useState(null)
    const [price, setPrice] = useState(null)

    const values = {
        image,
        setImage,
        pName,
        setPname, 
        price,
        setPrice
    }

    return <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
}

export default ProductContext;