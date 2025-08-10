'use client'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useState } from 'react'

export default function Cart() {
  const [cartItems] = useState([
    { id: 1, name: 'Semaglutide 5mg', price: 299, quantity: 1 },
    { id: 2, name: 'BPC-157 10mg', price: 189, quantity: 2 },
    { id: 3, name: 'Ipamorelin 5mg', price: 249, quantity: 1 },
  ])

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow mb-4 flex gap-4">
                <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-2xl">💉</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">Lab-tested for purity</p>
                  <div className="flex items-center gap-4">
                    <select className="border rounded px-3 py-1 bg-white text-gray-900" defaultValue={item.quantity}>
                      <option value="1">Qty: 1</option>
                      <option value="2">Qty: 2</option>
                      <option value="3">Qty: 3</option>
                    </select>
                    <span className="text-xl font-bold text-blue-600">${item.price}</span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500 text-2xl">×</button>
              </div>
            ))}
            
            <button className="text-blue-600 font-medium hover:underline">
              ← Continue Shopping
            </button>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-blue-600">Calculated at checkout</span>
                </div>
              </div>
              
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-blue-600">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Link href="/checkout" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-3">
                Proceed to Checkout
              </Link>
              
              <div className="text-center text-sm text-gray-600">
                <p className="mb-2">Secure Checkout 🔒</p>
                <button className="text-blue-600 hover:underline">Save Cart for Later</button>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-6 p-4 bg-white rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-2">✓ FDA Registered Facility</p>
              <p className="text-sm text-gray-600 mb-2">✓ Free Shipping Over $200</p>
              <p className="text-sm text-gray-600">✓ 30-Day Money Back</p>
            </div>
          </div>
        </div>
        
        {/* Cross-sell Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['TB-500', 'Melanotan II', 'CJC-1295', 'DSIP'].map((name, i) => (
              <div key={i} className="border rounded-lg p-4 hover:shadow-lg transition">
                <div className="h-32 bg-gray-100 rounded mb-4 flex items-center justify-center">
                  <span className="text-3xl">💊</span>
                </div>
                <h3 className="font-semibold">{name}</h3>
                <p className="text-blue-600 font-bold mt-2">${179 + i * 20}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}