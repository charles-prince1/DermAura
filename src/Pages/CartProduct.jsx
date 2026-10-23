// import React from 'react';
// import { UseCart } from '../context/CartProvider';
// import { Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

// const CartProductPage = () => {
//   const { cart = [], updateQuantity, removeFromCart, cartTotal, DecreaseCart, cartAlert } = UseCart();

//   const shipping = cartTotal > 100 || cartTotal === 0 ? 0 : 15; 
//   const orderTotal = cartTotal + shipping;

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 min-h-screen font-sans antialiased text-brand-900 dark:text-brand-50">
      
//       {/* Toast Notification Alert Overlay */}
//       {cartAlert && (
//         <div className="fixed top-6 right-6 z-[100] bg-[#2A1D16] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-brand-700/50 animate-fade-in-down max-w-sm flex items-center gap-3 backdrop-blur-md">
//           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//           <p className="text-sm font-medium tracking-wide">{cartAlert}</p>
//         </div>
//       )}

//       <div className="flex items-baseline justify-between mb-10 border-b border-brand-100 dark:border-brand-800/60 pb-5">
//         <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Shopping Cart</h1>
//         <span className="text-sm font-medium text-brand-500 bg-brand-50 dark:bg-brand-800/50 px-3 py-1 rounded-full">
//           {cart.length} {cart.length === 1 ? 'item' : 'items'}
//         </span>
//       </div>

//       {cart.length === 0 ? (
//         /* Professional Empty State View */
//         <div className="text-center py-20 bg-white dark:bg-brand-900/10 rounded-2xl p-8 border border-dashed border-brand-200 dark:border-brand-800 max-w-xl mx-auto shadow-sm">
//           <div className="w-16 h-16 bg-brand-50 dark:bg-brand-800/40 rounded-full flex items-center justify-center mx-auto mb-5 text-brand-500">
//             <ShoppingBag size={28} />
//           </div>
//           <h2 className="text-xl font-bold mb-2">Your cart feels a bit light!</h2>
//           <p className="text-brand-500 dark:text-brand-400 text-sm mb-8 max-w-xs mx-auto">
//             Looks like you haven't added anything to your cart yet. Explore our top products to get started.
//           </p>
//           <a 
//             href="#products" 
//             className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow"
//           >
//             Continue Shopping
//             <ArrowRight size={16} />
//           </a>
//         </div>
//       ) : (
//         /* Main Layout Grid Framework */
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
//           {/* Left Column: Product Cards Stream */}
//           <div className="lg:col-span-2 space-y-4">
//             {cart.map((item) => {
//               const safePrice = Number(item.price) || 0;

//               return (
//                 <div 
//                   key={item.id} 
//                   className="group flex flex-col sm:items-center sm:flex-row gap-5 bg-white dark:bg-brand-800/40 p-5 rounded-2xl shadow-sm border border-brand-100/80 dark:border-brand-800/40 hover:border-brand-200 dark:hover:border-brand-700/60 transition-all duration-200 backdrop-blur-sm"
//                 >
//                   {/* Aspect Ratio Img Wrapper */}
//                   <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-xl bg-brand-50 dark:bg-brand-800 flex-shrink-0 border border-brand-100/50 dark:border-brand-700/30">
//                     <img 
//                       src={item.image || 'https://placeholder.com'} 
//                       alt={item.name} 
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>

//                   {/* Product Metadata Context Details */}
//                   <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
//                     <div>
//                       <h3 className="font-bold text-lg text-brand-900 dark:text-brand-50 truncate mb-1">
//                         {item.name}
//                       </h3>
//                       <p className="text-brand-500 dark:text-brand-400 text-sm font-medium mb-4">
//                         ${safePrice.toFixed(2)} <span className="text-xs font-normal text-brand-400">/ each</span>
//                       </p>
//                     </div>
                    
//                     {/* Compact Integrated Numeric Quantity Controls */}
//                     <div className="flex items-center bg-brand-50 dark:bg-brand-800/80 w-fit p-1 rounded-xl border border-brand-100 dark:border-brand-700/50">
//                       <button 
//                         onClick={() => DecreaseCart?.(item.id)}
//                         disabled={item.quantity <= 1}
//                         className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-brand-700 text-brand-700 dark:text-brand-300 disabled:opacity-30 disabled:hover:bg-transparent transition-all font-semibold"
//                         aria-label="Decrease quantity"
//                       >
//                         —
//                       </button>
//                       <span className="font-bold text-sm w-9 text-center select-none text-brand-800 dark:text-brand-200">
//                         {item.quantity}
//                       </span>
//                       <button 
//                         onClick={() => updateQuantity?.(item.id)}
//                         className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-brand-700 text-brand-700 dark:text-brand-300 transition-all font-semibold"
//                         aria-label="Increase quantity"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>

//                   {/* Financial Output Pricing Column & Destruction Trigger Action */}
//                   <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-between h-auto sm:h-28 border-t sm:border-t-0 pt-3 sm:pt-0 border-brand-100 dark:border-brand-800">
//                     <span className="font-extrabold text-xl text-brand-900 dark:text-brand-50 sm:order-1">
//                       ${(safePrice * item.quantity).toFixed(2)}
//                     </span>
                    
//                     <button 
//                       onClick={() => removeFromCart?.(item.id)}
//                       className="p-2.5 text-brand-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition-all duration-200 sm:order-2"
//                       title="Remove product"
//                       aria-label="Remove item"
//                     >
//                       <Trash2 size={19} />
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Right Column: Checkout Financial Order Summary Card */}
//           <div className="bg-white dark:bg-brand-800/30 p-6 sm:p-8 rounded-2xl shadow-sm border border-brand-100 dark:border-brand-800/60 sticky top-6 backdrop-blur-sm">
//             <h2 className="text-xl font-bold mb-5 tracking-tight">Order Summary</h2>
            
//             <div className="space-y-4 mb-6 border-b border-brand-100 dark:border-brand-800/80 pb-5 text-sm font-medium">
//               <div className="flex justify-between text-brand-500 dark:text-brand-400">
//                 <span>Subtotal</span>
//                 <span className="text-brand-900 dark:text-brand-100">${cartTotal.toFixed(2)}</span>
//               </div>
              
//               <div className="flex justify-between text-brand-500 dark:text-brand-400 items-center">
//                 <span className="flex items-center gap-1.5">
//                   Shipping 
//                   {shipping === 0 && <span className="text-[10px] bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Free</span>}
//                 </span>
//                 <span className={shipping === 0 ? "text-emerald-600 font-bold" : "text-brand-900 dark:text-brand-100"}>
//                   {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
//                 </span>
//               </div>

//               {shipping > 0 && (
//                 <p className="text-[11px] text-brand-400 font-normal flex items-start gap-1 bg-brand-50/50 dark:bg-brand-900/20 p-2 rounded-lg">
//                   <Truck size={12} className="mt-0.5 text-brand-500 flex-shrink-0" />
//                   <span>Add <b>${(100 - cartTotal).toFixed(2)}</b> more to qualify for free shipping.</span>
//                 </p>
//               )}
//             </div>

//             <div className="flex justify-between items-baseline mb-8">
//               <span className="text-base font-bold">Estimated Total</span>
//               <span className="text-2xl font-black text-brand-900 dark:text-brand-50 tracking-tight">
//                 ${orderTotal.toFixed(2)}
//               </span>
//             </div>

//             <button 
//               className="w-full bg-brand-600 hover:bg-brand-700 text-black font-bold py-4 px-6 rounded-xl shadow-lg shadow-brand-600/10 hover:shadow-brand-600/20 transition-all duration-200 flex items-center justify-center gap-2 tracking-wide text-sm mb-4"
//               onClick={() => alert('Redirecting to checkout session...')}
//             >
//               Proceed to Checkout
//               <ArrowRight size={16} />
//             </button>

//             {/* Buyer Trust Assurance Elements */}
//             <div className="flex items-center justify-center gap-2 text-brand-400 dark:text-brand-500 text-[11px] font-medium pt-2">
//               <ShieldCheck size={14} className="text-emerald-500" />
//               <span>Secure checkout powered by industry standard SSL encryption.</span>
//             </div>
//           </div>

//         </div>
//       )}
//     </div>
//   );
// };

// export default CartProductPage
import React, { useState } from 'react';
import { UseCart } from '../context/CartProvider';
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck, User, MapPin, Phone, MessageSquare, Store, Navigation, Clock } from 'lucide-react';

const CartProductPage = () => {
  const { cart = [], updateQuantity, removeFromCart, cartTotal, DecreaseCart, cartAlert } = UseCart();

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
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 min-h-screen font-sans antialiased text-brand-900 dark:text-brand-50">
      
      {/* Toast Notification Alert Overlay */}
      {cartAlert && (
        <div className="fixed top-20 right-6 z-50 bg-[#2A1D16] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-brand-700/50 animate-fade-in-down max-w-sm flex items-center gap-3 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <p className="text-sm font-medium tracking-wide">{cartAlert}</p>
        </div>
      )}

      {/* Header */}
      <div className="flex items-baseline justify-between mb-10 border-b border-brand-100 dark:border-brand-800/60 pb-5">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Shopping Cart</h1>
        <span className="text-sm font-medium text-brand-500 bg-brand-50 dark:bg-brand-800/50 px-3 py-1 rounded-full">
          {cart.length} {cart.length === 1 ? 'item' : 'items'}
        </span>
      </div>

      {cart.length === 0 ? (
        /* Empty State */
        <div className="text-center py-20 bg-[#2A1D16] rounded-2xl p-8 border border-dashed border-brand-200 dark:border-brand-800 max-w-xl mx-auto shadow-sm">
          <div className="w-16 h-16 bg-brand-50 dark:bg-brand-800/40 rounded-full flex items-center justify-center mx-auto mb-5 text-brand-500">
            <ShoppingBag size={28} />
          </div>
          <h2 className="text-xl font-bold mb-2">Your cart feels a bit light!</h2>
          <p className="text-brand-500 dark:text-brand-400 text-sm mb-8 max-w-xs mx-auto">
            Looks like you haven't added anything to your cart yet. Explore our top products to get started.
          </p>
          <a href="/products" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-sm">
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
                <div key={item.id} className="group flex flex-col sm:items-center sm:flex-row gap-5 bg-white dark:bg-brand-800/40 p-5 rounded-2xl shadow-sm border border-brand-100/80 dark:border-brand-800/40 hover:border-brand-200 dark:hover:border-brand-700/60 transition-all duration-200 backdrop-blur-sm">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-xl bg-brand-50 dark:bg-brand-800 flex-shrink-0 border border-brand-100/50 dark:border-brand-700/30">
                    <img src={item.image || 'https://via.placeholder.com/150'} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                    <div>
                      <h3 className="font-bold text-lg text-brand-900 dark:text-brand-50 truncate mb-1">{item.name}</h3>
                      <p className="text-brand-500 dark:text-brand-400 text-sm font-medium mb-4">
                        ${safePrice.toFixed(2)} <span className="text-xs font-normal text-brand-400">/ each</span>
                      </p>
                    </div>
                    
                    <div className="flex items-center bg-brand-50 dark:bg-brand-800/80 w-fit p-1 rounded-xl border border-brand-100 dark:border-brand-700/50">
                      <button onClick={() => DecreaseCart?.(item.id)} disabled={item.quantity <= 1} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-brand-700 text-brand-700 dark:text-brand-300 disabled:opacity-30 transition-all font-semibold cursor-pointer">—</button>
                      <span className="font-bold text-sm w-9 text-center select-none text-brand-800 dark:text-brand-200">{item.quantity}</span>
                      <button onClick={() => updateQuantity?.(item.id)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-brand-700 text-brand-700 dark:text-brand-300 transition-all font-semibold cursor-pointer">+</button>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-between h-auto sm:h-28 border-t sm:border-t-0 pt-3 sm:pt-0 border-brand-100 dark:border-brand-800">
                    <span className="font-extrabold text-xl text-brand-900 dark:text-brand-50 sm:order-1">${(safePrice * item.quantity).toFixed(2)}</span>
                    <button onClick={() => removeFromCart?.(item.id)} className="p-2.5 text-brand-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition-all duration-200 sm:order-2 cursor-pointer" aria-label="Remove item">
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
            <div className="bg-white dark:bg-brand-800/30 p-2 rounded-2xl border border-brand-100 dark:border-brand-800/60 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setFulfillmentType('delivery')}
                className={`py-2.5 px-3 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  fulfillmentType === 'delivery'
                    ? 'bg-[#2A1D16] text-white shadow-md'
                    : 'text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-800/50'
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
                    ? 'bg-[#2A1D16] text-white shadow-md'
                    : 'text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-800/50'
                }`}
              >
                <Store size={15} />
                Store Pickup
              </button>
            </div>

            {/* Customer Contact Details Box */}
            <div className="bg-white dark:bg-brand-800/30 p-6 rounded-2xl shadow-sm border border-brand-100 dark:border-brand-800/60 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-4 tracking-tight flex items-center gap-2 border-b border-brand-100 dark:border-brand-800 pb-2">
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
                    className="w-full bg-brand-50 dark:bg-brand-900/50 border border-brand-100 dark:border-brand-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
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
                    className="w-full bg-brand-50 dark:bg-brand-900/50 border border-brand-100 dark:border-brand-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
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
                      className="w-full bg-brand-50 dark:bg-brand-900/50 border border-brand-100 dark:border-brand-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Store Location & Embedded Google Map Card (Always visible or highlighted on Pickup) */}
            <div className="bg-white dark:bg-brand-800/30 p-5 rounded-2xl shadow-sm border border-brand-100 dark:border-brand-800/60 backdrop-blur-sm space-y-3">
              <div className="flex items-center justify-between border-b border-brand-100 dark:border-brand-800 pb-2">
                <h3 className="text-sm font-bold tracking-tight flex items-center gap-2">
                  <Store size={16} className="text-emerald-600" />
                  Store Location
                </h3>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${storeMapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <Navigation size={12} /> Get Directions
                </a>
              </div>

              <div className="space-y-1.5 text-xs text-brand-600 dark:text-brand-300">
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
              <div className="w-full h-36 rounded-xl overflow-hidden border border-brand-100 dark:border-brand-800 mt-2">
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
            <div className="bg-white dark:bg-brand-800/30 p-6 rounded-2xl shadow-sm border border-brand-100 dark:border-brand-800/60 backdrop-blur-sm space-y-4">
              <h3 className="text-lg font-bold tracking-tight border-b border-brand-100 dark:border-brand-800 pb-2">
                Order Summary
              </h3>

              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between text-brand-600 dark:text-brand-400">
                  <span>Subtotal</span>
                  <span className="font-semibold text-brand-900 dark:text-brand-50">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-brand-600 dark:text-brand-400">
                  <span>Shipping</span>
                  <span className="font-semibold text-brand-900 dark:text-brand-50">
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t border-brand-100 dark:border-brand-800 pt-3 flex justify-between text-base font-extrabold text-brand-900 dark:text-brand-50">
                  <span>Grand Total</span>
                  <span>${orderTotal.toFixed(2)}</span>
                </div>
              </div>

              {formError && (
                <p className="text-xs font-medium text-red-500 bg-red-50 dark:bg-red-950/30 p-2.5 rounded-lg border border-red-200 dark:border-red-900/40">
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