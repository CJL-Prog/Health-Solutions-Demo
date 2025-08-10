'use client'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

interface Product {
  id: number
  name: string
  price: number
  category: string
  desc: string
  quantity?: number
}

interface CartItem extends Product {
  quantity: number
}

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [cart, setCart] = useState<CartItem[]>([])
  const [showNotification, setShowNotification] = useState(false)
  
  const filters = ['All', 'Popular', 'Capsules', 'Blends', 'New Arrivals']
  
  const products: Product[] = [
    { id: 1, name: 'Semaglutide 5mg', price: 299, category: 'Popular', desc: 'GLP-1 for weight management' },
    { id: 2, name: 'BPC-157 10mg', price: 189, category: 'Popular', desc: 'Healing & recovery peptide' },
    { id: 3, name: 'Ipamorelin 5mg', price: 249, category: 'New Arrivals', desc: 'Growth hormone peptide' },
    { id: 4, name: 'TB-500 10mg', price: 219, category: 'Capsules', desc: 'Injury recovery' },
    { id: 5, name: 'CJC-1295', price: 279, category: 'Blends', desc: 'Growth hormone blend' },
    { id: 6, name: 'Melanotan II', price: 159, category: 'Popular', desc: 'Tanning peptide' },
  ]

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  const addToCart = (product: Product) => {
    const newCart = [...cart]
    const existingItem = newCart.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      newCart.push({ ...product, quantity: 1 })
    }
    
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
    
    // Show notification
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter)

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Success Notification */}
      {showNotification && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse">
          ✓ Added to cart!
        </div>
      )}
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Peptides Catalog</h1>
          <p className="text-xl opacity-90">Premium USA-Made Peptides for Optimal Health</p>
        </div>
      </div>
      
      {/* Filter Bar */}
      <div className="bg-gray-50 py-6 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-3 flex-wrap justify-center">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-gray-300 hover:border-blue-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex-1">
        <p className="text-gray-600 mb-6">Showing {filteredProducts.length} products</p>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white border rounded-lg overflow-hidden hover:shadow-xl transition group">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-blue-50 group-hover:to-blue-100 transition">
                <span className="text-5xl">💉</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">${product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  )
}