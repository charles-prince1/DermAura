import React from 'react';
import { Star, ShoppingBag } from 'lucide-react';
import { UseCart } from '../context/CartProvider';

const products = [
  {
    id: 1,
    name: 'Silk & Santal Scent Serum',
    notes: 'Australian Sandalwood, Warm Amber, Creamy Vanilla',
    price: '85',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600',
    tag: 'Bestseller'
  },
  {
    id: 2,
    name: 'Velvet Flora Moisture Parfum',
    notes: 'Damask Rose, Hydrating Squalane, Soft Musk',
    price: '85',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600',
    tag: 'Hydrating'
  },
  {
    id: 3,
    name: 'Citrus Barrier Elixir',
    notes: 'Bergamot, Neroli, Jojoba Lipid Complex',
    price: '85',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600',
    tag: 'New'
  }
];

export default function Product() {

  const {cart, handleCart} = UseCart()
  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2A1D16]">Our Signature Scents</h2>
          <p className="text-[#4A3427]/70 mt-3">Formulated with 100% active plant oils and skin-identical lipids.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden border border-[#E8DDD3]/60 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="relative aspect-square overflow-hidden bg-[#F4EFEA]">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="object-cover w-full h-full hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#4A3427] text-xs font-semibold px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#A37252] uppercase tracking-wider">Hydrating Serum</span>
                    <div className="flex items-center text-amber-500 text-xs">
                      <Star className="w-3.5 h-3.5 fill-current mr-1" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-[#2A1D16] mb-2">{product.name}</h3>
                  <p className="text-[#4A3427]/70 text-xs leading-relaxed mb-4">{product.notes}</p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-[#F4EFEA] mt-4">
                <span className="font-serif text-2xl text-[#2A1D16]"> &#8358;{product.price}</span>
                <button className="inline-flex items-center bg-[#4A3427] text-white px-4 py-2.5 rounded-full text-xs font-medium hover:bg-[#2A1D16] transition" onClick={()=>handleCart(product)}>
                  <ShoppingBag className="w-3.5 h-3.5 mr-2" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}