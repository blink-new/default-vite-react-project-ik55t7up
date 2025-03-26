
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Heart, Search, Menu } from 'lucide-react'

// Mock data for initial development
const products = [
  {
    id: 1,
    name: "Midnight Rose",
    brand: "Essence Luxe",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80&w=500",
    description: "A seductive blend of Bulgarian rose, blackcurrant, and vanilla"
  },
  {
    id: 2,
    name: "Ocean Breeze",
    brand: "Aqua Pure",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=500",
    description: "Fresh marine accord with citrus and woody notes"
  },
  {
    id: 3,
    name: "Golden Amber",
    brand: "Essence Luxe",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1590736704728-f4e505bb85a7?auto=format&fit=crop&q=80&w=500",
    description: "Warm amber enriched with vanilla and musk"
  },
  {
    id: 4,
    name: "Velvet Orchid",
    brand: "Floral Dreams",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=500",
    description: "Exotic orchid blend with jasmine and sandalwood"
  }
]

function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button className="p-2 rounded-lg hover:bg-gray-100 lg:hidden">
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-2xl font-serif ml-2">Essence</h1>
            </div>
            
            <div className="hidden lg:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-black">New</a>
              <a href="#" className="text-gray-700 hover:text-black">Brands</a>
              <a href="#" className="text-gray-700 hover:text-black">Women</a>
              <a href="#" className="text-gray-700 hover:text-black">Men</a>
              <a href="#" className="text-gray-700 hover:text-black">Sets</a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Heart className="h-5 w-5" />
              </button>
              <button 
                className="p-2 rounded-lg hover:bg-gray-100 relative"
                onClick={() => setCartOpen(!cartOpen)}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative h-[70vh] bg-black">
          <img 
            src="https://images.unsplash.com/photo-1583467875263-d9e39c307e17?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover opacity-80"
            alt="Luxury perfume"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <motion.h2 
                className="text-5xl font-serif mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Discover Your Signature Scent
              </motion.h2>
              <motion.p 
                className="text-xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Curated collection of luxury fragrances
              </motion.p>
              <motion.button 
                className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Shop Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-serif mb-8">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-sm text-gray-700">{product.brand}</h3>
                <p className="text-lg font-medium text-gray-900">{product.name}</p>
                <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-medium mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders over $100</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Money Back Guarantee</h3>
              <p className="text-gray-600">Within 30 days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-4">About Us</h4>
              <p className="text-gray-400">Discover the finest luxury fragrances curated for the discerning individual.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Customer Service</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Contact Us</li>
                <li>Shipping Policy</li>
                <li>Returns & Exchanges</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>New Arrivals</li>
                <li>Best Sellers</li>
                <li>Gift Sets</li>
                <li>Sale</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 mb-2"
              />
              <button className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App