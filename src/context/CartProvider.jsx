import { Children, createContext, useContext, useState} from "react"


const CartContext = createContext(null)


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])


    const handleCart = async (product) => {
        const existing = cart.find(item => item.id === product.id);

        let newCart;

        if (existing) {
            newCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            newCart = [...cart, { ...product, quantity: 1 }];
        }
        setCart(newCart)
    }
const values = {
    cart, setCart, handleCart
}
    console.log(cart);
    return <CartContext.Provider value ={values}>{children}</CartContext.Provider>
    
}
export const UseCart = () => {
    const context = useContext(CartContext)
    if (!context) {
    throw new Error("UseCart must be used within an cartprovider");
  }
  return context;
}