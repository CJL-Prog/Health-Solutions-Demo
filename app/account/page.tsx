import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

'use client'

import { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

type ActiveSection = 'orders' | 'saved' | 'subscriptions' | 'consultations' | 'profile' | 'logout'

export default function Account() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('orders')
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@email.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Anytown, ST 12345',
    memberSince: 'January 2023'
  })

  // Sample data
  const orders = [
    { id: '#10234', date: 'Jan 15, 2025', status: 'Delivered', total: '$487.00', items: ['Semaglutide 5mg', 'BPC-157 10mg', 'Consultation'], tracking: 'UPS123456789', shippedDate: 'Jan 13, 2025' },
    { id: '#10233', date: 'Jan 10, 2025', status: 'Processing', total: '$199.00', items: ['TB-500 10mg', 'Lab Kit'], tracking: 'Pending', shippedDate: null },
    { id: '#10232', date: 'Dec 28, 2024', status: 'Delivered', total: '$289.00', items: ['Ipamorelin 5mg'], tracking: 'FDX987654321', shippedDate: 'Dec 26, 2024' },
    { id: '#10231', date: 'Dec 15, 2024', status: 'Delivered', total: '$356.00', items: ['CJC-1295', 'Melanotan II'], tracking: 'UPS111222333', shippedDate: 'Dec 13, 2024' },
    { id: '#10230', date: 'Nov 28, 2024', status: 'Delivered', total: '$189.00', items: ['BPC-157 10mg'], tracking: 'UPS444555666', shippedDate: 'Nov 26, 2024' },
    { id: '#10229', date: 'Nov 15, 2024', status: 'Delivered', total: '$499.00', items: ['HRT Consultation', 'Testosterone Program'], tracking: 'FDX777888999', shippedDate: 'Nov 13, 2024' }
  ]

  const savedItems = [
    { id: 1, name: 'Semaglutide 2.5mg', price: '$249.99', image: '💉', inStock: true, category: 'Weight Loss', rating: 4.8, reviews: 127 },
    { id: 2, name: 'NAD+ 500mg', price: '$189.99', image: '🧬', inStock: true, category: 'Anti-Aging', rating: 4.9, reviews: 89 },
    { id: 3, name: 'Tirzepatide 5mg', price: '$399.99', image: '💊', inStock: false, category: 'Weight Loss', rating: 4.7, reviews: 156 },
    { id: 4, name: 'GHK-Cu 50mg', price: '$159.99', image: '✨', inStock: true, category: 'Skin Health', rating: 4.6, reviews: 94 },
    { id: 5, name: 'PT-141 10mg', price: '$179.99', image: '💝', inStock: true, category: 'Wellness', rating: 4.5, reviews: 73 },
    { id: 6, name: 'Epithalon 10mg', price: '$219.99', image: '🌟', inStock: false, category: 'Longevity', rating: 4.8, reviews: 112 }
  ]

  const subscriptions = [
    { id: 1, product: 'Semaglutide Monthly Program', frequency: 'Monthly', nextDelivery: 'Feb 15, 2025', price: '$299.99', status: 'Active', dosage: '5mg', duration: '3 months remaining' },
    { id: 2, product: 'BPC-157 Recovery Protocol', frequency: 'Every 6 weeks', nextDelivery: 'Mar 1, 2025', price: '$189.99', status: 'Active', dosage: '10mg', duration: 'Ongoing' },
    { id: 3, product: 'HRT Testosterone Program', frequency: 'Monthly', nextDelivery: 'Paused', price: '$199.99', status: 'Paused', dosage: 'Custom', duration: 'Paused until consultation' },
    { id: 4, product: 'Anti-Aging Stack', frequency: 'Every 2 months', nextDelivery: 'Feb 28, 2025', price: '$449.99', status: 'Active', dosage: 'Multi-compound', duration: '6 months remaining' }
  ]

  const consultations = [
    { id: 1, date: 'Jan 20, 2025', time: '2:00 PM', doctor: 'Dr. Sarah Johnson', type: 'Weight Loss Consultation', status: 'Upcoming', duration: '30 min', meetingLink: 'https://meet.healthsolutions.com/abc123' },
    { id: 2, date: 'Dec 15, 2024', time: '10:30 AM', doctor: 'Dr. Michael Chen', type: 'HRT Follow-up', status: 'Completed', duration: '45 min', notes: 'Available' },
    { id: 3, date: 'Nov 22, 2024', time: '3:15 PM', doctor: 'Dr. Sarah Johnson', type: 'Initial Assessment', status: 'Completed', duration: '60 min', notes: 'Available' },
    { id: 4, date: 'Oct 18, 2024', time: '1:00 PM', doctor: 'Dr. Amanda Foster', type: 'Peptide Protocol Review', status: 'Completed', duration: '30 min', notes: 'Available' },
    { id: 5, date: 'Feb 25, 2025', time: '11:00 AM', doctor: 'Dr. Michael Chen', type: 'Lab Results Review', status: 'Scheduled', duration: '30 min', meetingLink: 'Will be sent 24hrs before' }
  ]

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      // Handle logout logic here
      alert('Logout functionality would be implemented here')
    }
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'orders':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h1 className="text-2xl font-bold mb-4">Order History</h1>
              <p className="text-gray-600 mb-6">Track and view all your past orders</p>
              
              {/* Order Statistics */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">6</div>
                  <div className="text-sm text-gray-600">Total Orders</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">$1,520</div>
                  <div className="text-sm text-gray-600">Total Spent</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">4</div>
                  <div className="text-sm text-gray-600">Delivered</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">1</div>
                  <div className="text-sm text-gray-600">Processing</div>
                </div>
              </div>
              
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-6 hover:bg-gray-50">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-blue-600 text-lg">{order.id}</h3>
                        <p className="text-sm text-gray-500">Ordered: {order.date}</p>
                        {order.shippedDate && (
                          <p className="text-sm text-gray-500">Shipped: {order.shippedDate}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded text-sm font-medium ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                        <p className="font-bold text-lg mt-1">{order.total}</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-1">Items Ordered:</p>
                      <p className="text-sm text-gray-600">{order.items.join(', ')}</p>
                    </div>
                    
                    {order.tracking !== 'Pending' && (
                      <div className="bg-blue-50 p-3 rounded mb-4">
                        <p className="text-sm font-medium text-blue-700 mb-1">Tracking Number:</p>
                        <p className="text-sm text-blue-600 font-mono">{order.tracking}</p>
                      </div>
                    )}
                    
                    <div className="flex gap-3 flex-wrap">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium border border-blue-200 px-3 py-1 rounded hover:bg-blue-50">
                        View Details
                      </button>
                      <button className="text-green-600 hover:text-green-800 text-sm font-medium border border-green-200 px-3 py-1 rounded hover:bg-green-50">
                        Reorder
                      </button>
                      {order.status === 'Delivered' && (
                        <button className="text-purple-600 hover:text-purple-800 text-sm font-medium border border-purple-200 px-3 py-1 rounded hover:bg-purple-50">
                          Write Review
                        </button>
                      )}
                      {order.tracking !== 'Pending' && order.status !== 'Delivered' && (
                        <button className="text-orange-600 hover:text-orange-800 text-sm font-medium border border-orange-200 px-3 py-1 rounded hover:bg-orange-50">
                          Track Package
                        </button>
                      )}
                      <button className="text-gray-600 hover:text-gray-800 text-sm font-medium border border-gray-200 px-3 py-1 rounded hover:bg-gray-50">
                        Download Invoice
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'saved':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Saved Items</h1>
                <div className="text-sm text-gray-500">
                  {savedItems.length} items saved
                </div>
              </div>
              <p className="text-gray-600 mb-6">Your wishlist and saved products</p>
              
              {/* Filter by category */}
              <div className="flex gap-2 mb-6 flex-wrap">
                {['All', 'Weight Loss', 'Anti-Aging', 'Skin Health', 'Wellness', 'Longevity'].map((category) => (
                  <button key={category} className="px-3 py-1 text-sm border rounded-full hover:bg-blue-50 hover:border-blue-300">
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="grid md:grid-cols-1 gap-4">
                {savedItems.map((item) => (
                  <div key={item.id} className="border rounded-lg p-6 hover:shadow-md transition">
                    <div className="flex items-center gap-6">
                      <div className="text-6xl">{item.image}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-lg">{item.name}</h3>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 mb-2">
                          <p className="text-2xl font-bold text-blue-600">{item.price}</p>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-400">★</span>
                            <span className="text-sm font-medium">{item.rating}</span>
                            <span className="text-sm text-gray-500">({item.reviews} reviews)</span>
                          </div>
                        </div>
                        <p className={`text-sm font-medium ${item.inStock ? 'text-green-600' : 'text-red-600'}`}>
                          {item.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <button 
                          className={`px-6 py-3 rounded-lg text-sm font-medium transition ${
                            item.inStock 
                              ? 'bg-blue-600 text-white hover:bg-blue-700' 
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                          disabled={!item.inStock}
                        >
                          {item.inStock ? 'Add to Cart' : 'Notify When Available'}
                        </button>
                        <button className="px-6 py-3 border border-red-300 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition">
                          Remove from Wishlist
                        </button>
                        <button className="px-6 py-3 border border-gray-300 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Recommendations */}
              <div className="mt-8 pt-6 border-t">
                <h3 className="text-lg font-semibold mb-4">Recommended for You</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {['DSIP 5mg', 'Thymosin Beta-4', 'Hexarelin 5mg'].map((name, i) => (
                    <div key={i} className="border rounded-lg p-4 text-center hover:shadow-md transition">
                      <div className="text-3xl mb-2">💊</div>
                      <h4 className="font-semibold mb-1">{name}</h4>
                      <p className="text-blue-600 font-bold">${199 + i * 30}</p>
                      <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700">
                        Add to Wishlist
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 'subscriptions':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Subscriptions</h1>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium">
                  + Add New Subscription
                </button>
              </div>
              <p className="text-gray-600 mb-6">Manage your recurring orders and save up to 15%</p>
              
              {/* Subscription Stats */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">3</div>
                  <div className="text-sm text-gray-600">Active Subscriptions</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">$939</div>
                  <div className="text-sm text-gray-600">Monthly Total</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">$156</div>
                  <div className="text-sm text-gray-600">Savings This Year</div>
                </div>
              </div>
              
              <div className="space-y-6">
                {subscriptions.map((sub) => (
                  <div key={sub.id} className="border rounded-lg p-6 hover:shadow-md transition">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{sub.product}</h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Frequency:</span> {sub.frequency}
                          </div>
                          <div>
                            <span className="font-medium">Dosage:</span> {sub.dosage}
                          </div>
                          <div>
                            <span className="font-medium">Next Delivery:</span> {sub.nextDelivery}
                          </div>
                          <div>
                            <span className="font-medium">Duration:</span> {sub.duration}
                          </div>
                        </div>
                      </div>
                      <div className="text-right ml-6">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          sub.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {sub.status}
                        </span>
                        <p className="font-bold text-xl mt-2">{sub.price}</p>
                        <p className="text-sm text-gray-500">per delivery</p>
                      </div>
                    </div>
                    
                    {sub.status === 'Active' && (
                      <div className="bg-green-50 p-3 rounded mb-4">
                        <p className="text-sm text-green-700">
                          ✓ Your next delivery is scheduled for <strong>{sub.nextDelivery}</strong>
                        </p>
                      </div>
                    )}
                    
                    {sub.status === 'Paused' && (
                      <div className="bg-yellow-50 p-3 rounded mb-4">
                        <p className="text-sm text-yellow-700">
                          ⏸️ This subscription is currently paused. Resume anytime.
                        </p>
                      </div>
                    )}
                    
                    <div className="flex gap-3 flex-wrap">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium border border-blue-200 px-4 py-2 rounded hover:bg-blue-50">
                        Edit Schedule
                      </button>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium border border-blue-200 px-4 py-2 rounded hover:bg-blue-50">
                        Change Dosage
                      </button>
                      {sub.status === 'Active' ? (
                        <button className="text-yellow-600 hover:text-yellow-800 text-sm font-medium border border-yellow-200 px-4 py-2 rounded hover:bg-yellow-50">
                          Pause Subscription
                        </button>
                      ) : (
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium border border-green-200 px-4 py-2 rounded hover:bg-green-50">
                          Resume Subscription
                        </button>
                      )}
                      <button className="text-gray-600 hover:text-gray-800 text-sm font-medium border border-gray-200 px-4 py-2 rounded hover:bg-gray-50">
                        View History
                      </button>
                      <button className="text-red-600 hover:text-red-800 text-sm font-medium border border-red-200 px-4 py-2 rounded hover:bg-red-50">
                        Cancel
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'consultations':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Consultations</h1>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium">
                  📅 Book New Consultation
                </button>
              </div>
              <p className="text-gray-600 mb-6">Your health and wellness consultations with our medical experts</p>
              
              {/* Consultation Stats */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">5</div>
                  <div className="text-sm text-gray-600">Total Consultations</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">3</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">2</div>
                  <div className="text-sm text-gray-600">Upcoming</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">4.9</div>
                  <div className="text-sm text-gray-600">Avg Rating</div>
                </div>
              </div>
              
              {/* Upcoming Consultations */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-green-600">🟢 Upcoming Consultations</h3>
                {consultations.filter(c => c.status === 'Upcoming' || c.status === 'Scheduled').map((consultation) => (
                  <div key={consultation.id} className="border-2 border-green-200 rounded-lg p-6 mb-4 bg-green-50">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-green-800">{consultation.type}</h4>
                        <p className="text-sm text-gray-600 mb-2">with {consultation.doctor}</p>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium">📅 Date:</span> {consultation.date}
                          </div>
                          <div>
                            <span className="font-medium">🕐 Time:</span> {consultation.time}
                          </div>
                          <div>
                            <span className="font-medium">⏱️ Duration:</span> {consultation.duration}
                          </div>
                          <div>
                            <span className="font-medium">🔗 Meeting:</span> {consultation.meetingLink}
                          </div>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {consultation.status}
                      </span>
                    </div>
                    
                    <div className="flex gap-3 flex-wrap">
                      {consultation.status === 'Upcoming' && (
                        <button className="bg-green-600 text-white px-4 py-2 rounded font-medium hover:bg-green-700">
                          🎥 Join Video Call
                        </button>
                      )}
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium border border-blue-200 px-4 py-2 rounded hover:bg-blue-50">
                        📋 Preparation Guide
                      </button>
                      <button className="text-yellow-600 hover:text-yellow-800 text-sm font-medium border border-yellow-200 px-4 py-2 rounded hover:bg-yellow-50">
                        📅 Reschedule
                      </button>
                      <button className="text-red-600 hover:text-red-800 text-sm font-medium border border-red-200 px-4 py-2 rounded hover:bg-red-50">
                        ❌ Cancel
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Past Consultations */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-600">📋 Past Consultations</h3>
                <div className="space-y-4">
                  {consultations.filter(c => c.status === 'Completed').map((consultation) => (
                    <div key={consultation.id} className="border rounded-lg p-6 hover:shadow-md transition">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg">{consultation.type}</h4>
                          <p className="text-sm text-gray-600 mb-2">with {consultation.doctor}</p>
                          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                            <div>
                              <span className="font-medium">Date:</span> {consultation.date}
                            </div>
                            <div>
                              <span className="font-medium">Duration:</span> {consultation.duration}
                            </div>
                            <div>
                              <span className="font-medium">Notes:</span> {consultation.notes}
                            </div>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
                          {consultation.status}
                        </span>
                      </div>
                      
                      <div className="flex gap-3 flex-wrap">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium border border-blue-200 px-4 py-2 rounded hover:bg-blue-50">
                          📄 View Notes
                        </button>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium border border-blue-200 px-4 py-2 rounded hover:bg-blue-50">
                          📊 Download Report
                        </button>
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium border border-green-200 px-4 py-2 rounded hover:bg-green-50">
                          🔄 Book Follow-up
                        </button>
                        <button className="text-purple-600 hover:text-purple-800 text-sm font-medium border border-purple-200 px-4 py-2 rounded hover:bg-purple-50">
                          ⭐ Rate Experience
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 'profile':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h1 className="text-2xl font-bold mb-4">Profile Settings</h1>
              <p className="text-gray-600 mb-6">Manage your account information and preferences</p>
              
              {/* Profile Picture Section */}
              <div className="mb-8 text-center">
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center text-5xl mx-auto mb-4">
                  👤
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 mr-2">
                  Upload Photo
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50">
                  Remove
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 text-lg border-b pb-2">Personal Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        value={user.name}
                        onChange={(e) => setUser({...user, name: e.target.value})}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input 
                        type="tel" 
                        value={user.phone}
                        onChange={(e) => setUser({...user, phone: e.target.value})}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                      <input 
                        type="date" 
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                      <select className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        <option>Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4 text-lg border-b pb-2">Address & Shipping</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                      <input 
                        type="text" 
                        value={user.address}
                        onChange={(e) => setUser({...user, address: e.target.value})}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <input 
                          type="text" 
                          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                        <select className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option>Nevada</option>
                          <option>California</option>
                          <option>Texas</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                      <input 
                        type="text" 
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Health Information */}
              <div className="mt-8 pt-6 border-t">
                <h3 className="font-semibold mb-4 text-lg">Health Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
                    <div className="flex gap-2">
                      <input type="number" placeholder="5" className="w-20 border rounded-lg px-3 py-2" />
                      <span className="self-center">ft</span>
                      <input type="number" placeholder="10" className="w-20 border rounded-lg px-3 py-2" />
                      <span className="self-center">in</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Weight (lbs)</label>
                    <input type="number" className="w-full border rounded-lg px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact</label>
                    <input type="text" placeholder="Name and phone number" className="w-full border rounded-lg px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Primary Care Physician</label>
                    <input type="text" placeholder="Doctor name and contact" className="w-full border rounded-lg px-3 py-2" />
                  </div>
                </div>
              </div>
              
              {/* Account Security */}
              <div className="mt-8 pt-6 border-t">
                <h3 className="font-semibold mb-4 text-lg">Account Security</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                      <input 
                        type="password" 
                        placeholder="••••••••"
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                      <input 
                        type="password" 
                        placeholder="••••••••"
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                      <input 
                        type="password" 
                        placeholder="••••••••"
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Two-Factor Authentication</h4>
                      <p className="text-sm text-gray-600 mb-3">Add an extra layer of security to your account</p>
                      <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
                        Enable 2FA
                      </button>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Account Info</h4>
                      <p className="text-sm text-gray-600">Member since: {user.memberSince}</p>
                      <p className="text-sm text-gray-600">Account Type: Premium</p>
                      <p className="text-sm text-gray-600">Last Login: Today, 2:34 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8 pt-6 border-t">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium">
                  Save All Changes
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 font-medium">
                  Cancel Changes
                </button>
                <button className="border border-red-300 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 font-medium ml-auto">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8 flex-1">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-3">
                  👤
                </div>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <nav className="space-y-2">
                <button 
                  onClick={() => setActiveSection('orders')}
                  className={`w-full text-left block px-4 py-2 rounded ${
                    activeSection === 'orders' ? 'bg-blue-600 text-white' : 'hover:bg-gray-50'
                  }`}
                >
                  📦 Order History
                </button>
                <button 
                  onClick={() => setActiveSection('saved')}
                  className={`w-full text-left block px-4 py-2 rounded ${
                    activeSection === 'saved' ? 'bg-blue-600 text-white' : 'hover:bg-gray-50'
                  }`}
                >
                  💾 Saved Items
                </button>
                <button 
                  onClick={() => setActiveSection('subscriptions')}
                  className={`w-full text-left block px-4 py-2 rounded ${
                    activeSection === 'subscriptions' ? 'bg-blue-600 text-white' : 'hover:bg-gray-50'
                  }`}
                >
                  🔄 Subscriptions
                </button>
                <button 
                  onClick={() => setActiveSection('consultations')}
                  className={`w-full text-left block px-4 py-2 rounded ${
                    activeSection === 'consultations' ? 'bg-blue-600 text-white' : 'hover:bg-gray-50'
                  }`}
                >
                  📝 Consultations
                </button>
                <button 
                  onClick={() => setActiveSection('profile')}
                  className={`w-full text-left block px-4 py-2 rounded ${
                    activeSection === 'profile' ? 'bg-blue-600 text-white' : 'hover:bg-gray-50'
                  }`}
                >
                  👤 Profile
                </button>
                <button 
                  onClick={handleLogout}
                  className="w-full text-left block px-4 py-2 text-red-500 hover:bg-red-50 rounded"
                >
                  🚪 Logout
                </button>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}