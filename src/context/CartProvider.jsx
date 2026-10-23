import { Children, createContext, useContext, useState, useEffect} from "react"


const CartContext = createContext(null)


export const CartProvider = ({children}) => {
 const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('app_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

 // New state to hold alert text for custom UI popups
    const [cartAlert, setCartAlert] = useState(null)

    // 2. Automatically sync state back into localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('app_cart', JSON.stringify(cart));
  }, [cart]);


    const handleCart = async (product) => {
        const existing = cart.find(item => item.id === product.id);
        let newCart;

        if (existing) {
            newCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            
            // Trigger alert for an item already in the cart
            triggerAlert(`Increased quantity of ${product.name || 'item'} in your cart.`);
        } else {
            newCart = [...cart, { ...product, quantity: 1 }];
            
            // Trigger alert for a completely new item added
            triggerAlert(`${product.name || 'Product'} added to your cart!`);
        }
        setCart(newCart)
        localStorage.setItem("app_cart", cart)
    }

    // Helper to manage alerts and auto-clear state alerts after 3 seconds
    const triggerAlert = (message) => {
        // 1. Instant fallback: Native browser alert (uncomment if you just want a quick popup)
        // alert(message);

        // 2. Custom state logic for clean custom toast UI components
        setCartAlert(message);
        setTimeout(() => {
            setCartAlert(null);
        }, 3000);
    }

    // Clear Cart quantities
    const Clear = () =>{
        setCart([])
    }
    
    // cart length/ number of quantity added
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

    // increasing cart
    const updateQuantity = (productID) => {
       let newItem = cart.map(item=> item.id === productID ?{...item, quantity: item.quantity + 1}: item)
       setCart(newItem)
       triggerAlert("Cart updated.");
    }

    // Decreasing Cart
    const DecreaseCart = (productID) => {
        let newItem =  cart.map(item => item.id === productID ? {...item, quantity : item.quantity - 1} : item)
        setCart(newItem)
        triggerAlert("Cart updated.");
    }

    // Fixed: Filters OUT the item matching the productID
const removeFromCart = (productID) => {
  const newCart = cart.filter(item => item.id !== productID);
  setCart(newCart);
  triggerAlert("Item removed from cart.");
};

    // total cart added and their sum 
    const cartTotal  =  cart.reduce((sum, item)=> {
    const priceAsNumber = Number(item.price) || 0;
    return sum + (priceAsNumber * item.quantity);
    }, 0)
const values = {
    cart, 
    setCart, 
    handleCart,
    removeFromCart,
    DecreaseCart,
    cartCount,
    cartTotal,
    cartAlert,
    updateQuantity
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