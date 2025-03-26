
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Heart, Search, Menu, ChevronRight } from 'lucide-react'

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

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#FDFBF7]/80 backdrop-blur-md z-50 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <button className="p-2 rounded-full hover:bg-black/5 lg:hidden transition">
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-2xl font-serif ml-2 tracking-wide">ESSENCE</h1>
            </div>
            
            <div className="hidden lg:flex space-x-12">
              {['New', 'Brands', 'Women', 'Men', 'Sets'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-sm tracking-wider hover:text-black transition-colors relative group"
                >
                  {item}
                  <span className="absolute inset-x-0 bottom-0 h-px bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-6">
              <button className="p-2 rounded-full hover:bg-black/5 transition">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-black/5 transition">
                <Heart className="h-5 w-5" />
              </button>
              <button 
                className="p-2 rounded-full hover:bg-black/5 transition relative"
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
      <div className="pt-20">
        <div className="relative h-[85vh] bg-black overflow-hidden">
          <motion.img 
            src="https://images.unsplash.com/photo-1583467875263-d9e39c307e17?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover opacity-90 scale-105"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            alt="Luxury perfume"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-4">
              <motion.p 
                className="text-sm tracking-[0.2em] uppercase mb-6 opacity-90"
                {...fadeInUp}
              >
                The Art of Fragrance
              </motion.p>
              <motion.h2 
                className="text-6xl font-serif mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Discover Your Signature Scent
              </motion.h2>
              <motion.p 
                className="text-lg mb-10 opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Curated collection of luxury fragrances for the discerning individual
              </motion.p>
              <motion.button 
                className="group bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="tracking-wide">Explore Collection</span>
                <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform"/>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <motion.p 
            className="text-sm tracking-[0.2em] uppercase text-gray-600 mb-4"
            {...fadeInUp}
          >
            Latest Additions
          </motion.p>
          <motion.h2 
            className="text-4xl font-serif"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            New Arrivals
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product, idx) => (
            <motion.div 
              key={product.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <button className="absolute top-4 right-4 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-2 text-center">
                <p className="text-sm tracking-wider text-gray-600">{product.brand}</p>
                <h3 className="font-serif text-xl">{product.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
                <p className="text-lg font-light">${product.price}</p>
                <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-900 transition-colors mt-4 tracking-wide">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              { title: "Free Shipping", desc: "On orders over $100" },
              { title: "Secure Payment", desc: "100% secure payment" },
              { title: "Money Back Guarantee", desc: "Within 30 days" }
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-serif text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-[#1A1A1A] text-white py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-3xl mb-4">Join Our Newsletter</h4>
            <p className="text-gray-400 mb-8">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button className="px-8 bg-white text-black rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h4 className="font-serif text-xl mb-6">About Us</h4>
              <p className="text-gray-400 leading-relaxed">Discover the finest luxury fragrances curated for the discerning individual.</p>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-6">Customer Service</h4>
              <ul className="space-y-4 text-gray-400">
                {['Contact Us', 'Shipping Policy', 'Returns & Exchanges', 'FAQs'].map(item => (
                  <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                {['New Arrivals', 'Best Sellers', 'Gift Sets', 'Sale'].map(item => (
                  <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-6">Follow Us</h4>
              <p className="text-gray-400 mb-6">Stay connected with us on social media for the latest updates and exclusive offers.</p>
              <div className="flex space-x-4">
                {['Instagram', 'Facebook', 'Twitter'].map(social => (
                  <a key={social} className="text-sm hover:text-white transition-colors cursor-pointer">{social}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-400">
            <p>© 2024 Essence. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App