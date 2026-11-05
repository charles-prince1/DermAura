
import React, { useState } from 'react';
import { UseCart } from '../context/CartProvider';
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck, User, MapPin, Phone, MessageSquare, Store, Navigation, Clock } from 'lucide-react';
import {useTheme} from "../context/ThemeProvider"
const CartProductPage = () => {
  const { cart = [], updateQuantity, removeFromCart, cartTotal, DecreaseCart, cartAlert } = UseCart();

  const {isLightMode} = useTheme()
  // Fulfillment Method: 'delivery' or 'pickup'
  const [fulfillmentType, setFulfillmentType] = useState('delivery');

  // Customer State Fields
  const [customerName, setCustomerName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [formError, setFormError] = useState('');

  // Shipping Fee Logic (FREE for Store Pickup or orders over $100)
  const shipping = fulfillmentType === 'pickup' || cartTotal > 100 || cartTotal === 0 ? 0 : 15;
  const orderTotal = cartTotal + shipping;

  // Store Information (Update address & map query if needed)
  const storeAddress = "Doughlas no 1, Imo State, Nigeria";
  const storeMapQuery = encodeURIComponent(storeAddress);

  const handleWhatsAppCheckout = (e) => {
    e.preventDefault();

    // Store WhatsApp number without '+' or spaces
    const whatsappNumber = "2347072461384"; 

    // Validation Guard
    if (cart.length === 0) return;
    if (!customerName.trim() || !contactPhone.trim()) {
      setFormError('Please enter your name and phone number before placing your order.');
      return;
    }
    if (fulfillmentType === 'delivery' && !deliveryAddress.trim()) {
      setFormError('Please provide a delivery address or switch to Store Pickup.');
      return;
    }
    setFormError('');

    // Generate Order ID
    const orderRef = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

    // Build Receipt String
    let message = `🛒 NEW ORDER #${orderRef}\n\n`;
    message += `         \n\n`;

    // Fulfillment Header
    message += `             📋 FULFILLMENT: ${fulfillmentType === 'pickup' ? '🏬 STORE PICKUP' : '🚚 DOOR DELIVERY'}         \n\n`;

    // Customer Info
    message += `👤 CUSTOMER DETAILS\n`;
    message += `• *Name:* ${customerName.trim()}\n\n`;
    message += `• *Phone:* ${contactPhone.trim()}\n\n`;
    if (fulfillmentType === 'delivery') {
      message += `• *Delivery Address:* ${deliveryAddress.trim()}\n\n`;
    } else {
      message += `• *Pickup Location:* ${storeAddress}\n`;
    }
    message += `\n\n\n\n\n\n\n`;

    // Ordered Items
    message += `📦 *ORDERED ITEMS*\n`;
    cart.forEach((item, index) => {
      const itemPrice = Number(item.price) || 0;
      const rowTotal = itemPrice * item.quantity;
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Qty: ${item.quantity} × $${itemPrice.toFixed(2)}\n`;
      message += `   Subtotal: *$${rowTotal.toFixed(2)}*\n\n`;
    });

    // Totals Block
    message += `\n\n\n\n\n\n\n`;
    message += `💵 *Subtotal:* $${cartTotal.toFixed(2)}\n`;
    message += `🚚 *Shipping/Handling:* ${shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}\n`;
    message += `💰 *Grand Total:* *$${orderTotal.toFixed(2)}*\n\n`;

    if (fulfillmentType === 'pickup') {
      message += `Hello! I would like to place this order for store pickup. Please let me know when my items will be ready! 🙏`;
    } else {
      message += `Hello! I just placed this order via your website store. Please let me know how to make my payment to confirm delivery! 🙏`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`max-w-6xl mx-auto px-4 py-12 md:py-20 min-h-screen font-sans antialiased   ${isLightMode?"text-brand-900":"dark:text-brand-50"}`}>
      
      {/* Toast Notification Alert Overlay */}
      {cartAlert && (
        <div className="fixed top-20 right-6 z-50 bg-brand-600 text-white px-5 py-3.5 rounded-xl shadow-2xl border border-brand-700/50 animate-fade-in-down max-w-sm flex items-center gap-3 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <p className="text-sm font-medium tracking-wide">{cartAlert}</p>
        </div>
      )}

      {/* Header */}
      <div className={`flex items-baseline justify-between mb-10 border-b pb-5 ${isLightMode?"border-brand-100":"dark:border-brand-800/60"}`}>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Shopping Cart</h1>
        <span className={`text-sm font-medium text-brand-500   px-3 py-1 rounded-full ${isLightMode?"bg-brand-50":"dark:bg-brand-800/50"}`}>
          {cart.length} {cart.length === 1 ? 'item' : 'items'}
        </span>
      </div>

      {cart.length === 0 ? (
        /* Empty State */
        <div className={`text-center py-20 bg-brand-600 rounded-2xl p-8 border border-dashed  max-w-xl mx-auto shadow-sm ${isLightMode?" border-brand-200":"dark:border-brand-800"}`}>
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-brand-500 ${isLightMode?"bg-brand-50":"dark:bg-brand-800/40"}`}>
            <ShoppingBag size={28} />
          </div>
          <h2 className="text-xl font-bold mb-2">Your cart feels a bit light!</h2>
          <p className={` text-sm mb-8 max-w-xs mx-auto ${isLightMode?"text-brand-500 ":"dark:text-brand-400"}`}>
            Looks like you haven't added anything to your cart yet. Explore our top products to get started.
          </p>
          <a href="/#pricing" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-sm">
            Continue Shopping
            <ArrowRight size={16} />
          </a>
        </div>
      ) : (
        /* Main Layout Split Grid */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Left Column: Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => {
              const safePrice = Number(item.price) || 0;

              return (
                <div key={item.id} className={`group flex flex-col sm:items-center sm:flex-row gap-5 p-5 rounded-2xl shadow-sm border   transition-all duration-200 backdrop-blur-sm ${isLightMode?"bg-brand-50 border-brand-100/80 hover:border-brand-200":"  dark:bg-brand-800/40 dark:border-brand-800/40 dark:hover:border-brand-700/60 "}`}>
                  <div className={`w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-xl  flex-shrink-0 border ${isLightMode?" bg-brand-50 border-brand-100/50 ":"dark:bg-brand-800 dark:border-brand-700/30"}`}>
                    <img src={item.image || 'https://via.placeholder.com/150'} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                    <div>
                      <h3 className={`font-bold text-lg  truncate mb-1 ${isLightMode?"text-brand-900":"dark:text-brand-50 "}`}>{item.name}</h3>
                      <p className={` text-sm font-medium mb-4 ${isLightMode?"text-brand-800":" dark:text-brand-400"}`}>
                        {safePrice.toFixed(2)} <span className="text-xs font-normal text-brand-00">k/ each</span>
                      </p>
                    </div>
                    
                    <div className={`flex items-center  w-fit p-1 rounded-xl border ${isLightMode?"bg-brand-200 border-brand-100":" dark:bg-brand-800/80 dark:border-brand-700/50"}`}>
                      <button onClick={() => DecreaseCart?.(item.id)} disabled={item.quantity <= 1} className={`w-8 h-8 flex items-center justify-center rounded-lg  disabled:opacity-30 transition-all font-semibold cursor-pointer ${isLightMode?"text-brand-700  hover:bg-brand-100":" dark:text-brand-300 dark:hover:bg-brand-700 "}`}>—</button>
                      <span className={`font-bold text-sm w-9 text-center select-none  ${isLightMode?" text-brand-800":"dark:text-brand-200"}`}>{item.quantity}</span>
                      <button onClick={() => updateQuantity?.(item.id)} className={`w-8 h-8 flex items-center justify-center rounded-lg    transition-all font-semibold cursor-pointer ${isLightMode?"hover:bg-brand-100 text-brand-700 ":"dark:hover:bg-brand-700 dark:text-brand-300"}`}>+</button>
                    </div>
                  </div>

                  <div className={`flex sm:flex-col items-center sm:items-end justify-between sm:justify-between h-auto sm:h-28 border-t sm:border-t-0 pt-3 sm:pt-0   ${isLightMode?"border-brand-100":"dark:border-brand-800"}`}>
                    <span className="font-extrabold text-xl text-brand-900 dark:text-brand-50 sm:order-1">{(safePrice * item.quantity).toFixed(2)}k</span>
                    <button onClick={() => removeFromCart?.(item.id)} className={`p-2.5  0 rounded-xl transition-all duration-200 sm:order-2 cursor-pointer ${isLightMode?"hover:text-red-500 text-brand-400  hover:bg-red-5":" dark:hover:bg-red-950/20 dark:hover:text-red-400 "}`} aria-label="Remove item">
                      <Trash2 size={19} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Order Options, Customer Details & Summary */}
          <div className="space-y-6 sticky top-6">
            
            {/* Fulfillment Mode Switcher */}
            <div className={` p-2 rounded-2xl border grid grid-cols-2 gap-2 ${isLightMode?"bg-brand-200 border-brand-100":" dark:bg-brand-800/30 dark:border-brand-800/60"}`}>
              <button
                type="button"
                onClick={() => setFulfillmentType('delivery')}
                className={`py-2.5 px-3 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  fulfillmentType === 'delivery'
                    ? 'bg-brand-600 text-brand-100 shadow-md'
                    :  `text-brand-500  ${isLightMode?"hover:bg-brand-50 ":"dark:hover:bg-brand-800/50 dark:hover:text-brand-100"}`
                }`}
              >
                <Truck size={15} />
                Door Delivery
              </button>
              
              <button
                type="button"
                onClick={() => setFulfillmentType('pickup')}
                className={`py-2.5 px-3 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  fulfillmentType === 'pickup'
                    ? 'bg-brand-600 text-brand-200 shadow-md'
                    : `text-brand-500   ${isLightMode?"hover:bg-brand-50":"dark:hover:bg-brand-800/50 dark:hover:text-brand-100"}`
                }`}
              >
                <Store size={15} />
                Store Pickup
              </button>
            </div>

            {/* Customer Contact Details Box */}
            <div className={` p-6 rounded-2xl shadow-sm border backdrop-blur-sm ${isLightMode?"bg-brand-50 border-brand-100":" dark:bg-brand-800/30 dark:border-brand-800/60"}`}>
              <h3 className={`text-lg font-bold mb-4 tracking-tight flex items-center gap-2 pb-2 border-b ${isLightMode?" border-brand-100 ":" dark:border-brand-800"}`}>
                <User size={18} className="text-brand-600" />
                Customer Information
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-500 mb-1.5 flex items-center gap-1">
                    <User size={12} /> Full Name
                  </label>
                  <input 
                    type="text" 
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="John Doe" 
                    className={`w-full   border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all ${isLightMode?"bg-brand-50  border-brand-100 ":"dark:bg-brand-900/50 dark:border-brand-800"}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-500 mb-1.5 flex items-center gap-1">
                    <Phone size={12} /> Contact Phone Number
                  </label>
                  <input 
                    type="tel" 
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="+234 801 234 5678" 
                    className={`w-full   border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all ${isLightMode?"bg-brand-50  border-brand-100 ":"dark:bg-brand-900/50 dark:border-brand-800"}`}
                  />
                </div>

                {fulfillmentType === 'delivery' && (
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-500 mb-1.5 flex items-center gap-1">
                      <MapPin size={12} /> Delivery Address
                    </label>
                    <textarea 
                      rows="2"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      placeholder="Street address, apartment, city..." 
                      className={`w-full   border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none ${isLightMode?"bg-brand-50 border-brand-100":"dark:bg-brand-900/50 dark:border-brand-800 "}`}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Store Location & Embedded Google Map Card (Always visible or highlighted on Pickup) */}
            <div className={` p-5 rounded-2xl shadow-sm border backdrop-blur-sm space-y-3 ${isLightMode?"bg-brand-100  border-brand-100 ":" dark:bg-brand-800/30 dark:border-brand-800/60 "}`}>
              <div className={`flex items-center justify-between border-b  pb-2 ${isLightMode?"border-brand-100":" dark:border-brand-800"}`}>
                <h3 className="text-sm font-bold tracking-tight flex items-center gap-2">
                  <Store size={16} className="text-emerald-600" />
                  Store Location
                </h3>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${storeMapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs  hover:underline flex items-center gap-1 font-semibold ${isLightMode?"text-brand-600":" dark:text-brand-400"}`}
                >
                  <Navigation size={12} /> Get Directions
                </a>
              </div>

              <div className={`space-y-1.5 text-xs ${isLightMode?" text-brand-600":" dark:text-brand-300"}`}>
                <p className="flex items-start gap-1.5 font-medium">
                  <MapPin size={14} className="text-brand-500 flex-shrink-0 mt-0.5" />
                  <span>{storeAddress}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Clock size={14} className="text-brand-500 flex-shrink-0" />
                  <span>Open: Mon - Sat (9:00 AM - 6:00 PM)</span>
                </p>
              </div>

              {/* Embedded Google Map Iframe */}
              <div className={`w-full h-36 rounded-xl overflow-hidden border mt-2 ${isLightMode?"border-brand-100":"dark:border-brand-800 "}`}>
                <iframe
                  title="Store Location Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://maps.google.com/maps?q=${storeMapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                />
              </div>
            </div>

            {/* Order Summary Box */}
            <div className={` p-6 rounded-2xl shadow-sm border backdrop-blur-sm space-y-4 ${isLightMode?"bg-brand-100 border-brand-100":" dark:bg-brand-800/30 dark:border-brand-800/60 "}`}>
              <h3 className={`text-lg font-bold tracking-tight border-b  pb-2 ${isLightMode?" border-brand-100":"dark:border-brand-800"}`}>
                Order Summary
              </h3>

              <div className="space-y-2.5 text-sm">
                <div className={`flex justify-between 0 ${isLightMode?"text-brand-60":"dark:text-brand-400 "}`}>
                  <span>Subtotal</span>
                  <span className={`font-semibold  ${isLightMode?"text-brand-900":" dark:text-brand-50"}`}>{cartTotal.toFixed(2)}k</span>
                </div>
                <div className={`flex justify-between  ${isLightMode?"text-brand-600":" dark:text-brand-400"}`}>
                  <span>Shipping</span>
                  <span className={`font-semibold   ${isLightMode?"text-brand-900":"dark:text-brand-50"}`}>
                    {shipping === 0 ? 'FREE' : `${shipping.toFixed(2)}k`}
                  </span>
                </div>
                <div className={`border-t pt-3 flex justify-between text-base font-extrabold ${isLightMode?" border-brand-100 text-brand-900":" dark:border-brand-800 dark:text-brand-50"}`}>
                  <span>Grand Total</span>
                  <span>{orderTotal.toFixed(2)}k</span>
                </div>
              </div>

              {formError && (
                <p className={`text-xs font-medium text-red-500 p-2.5 rounded-lg border${isLightMode?"bg-red-50 border-red-200":"dark:bg-red-950/30  dark:border-red-900/40 "}`}>
                  {formError}
                </p>
              )}

              <button 
                onClick={handleWhatsAppCheckout}
                className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
                Checkout via WhatsApp
              </button>

              <div className="pt-2 flex items-center justify-center gap-4 text-xs text-brand-400">
                <span className="flex items-center gap-1"><ShieldCheck size={14} /> Secure Order</span>
                <span className="flex items-center gap-1"><Truck size={14} /> Fast Response</span>
              </div>
            </div>

          </div>

        </div>
      )}
    </div>
  );
};

export default CartProductPage;