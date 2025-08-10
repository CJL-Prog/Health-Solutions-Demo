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
    { id: '#10234', date: 'Jan 15, 2025', status: 'Delivered', total: '$487.00', items: ['Vitamin D3', 'Omega-3 Fish Oil', 'Multivitamin'] },
    { id: '#10233', date: 'Jan 10, 2025', status: 'Processing', total: '$199.00', items: ['Protein Powder', 'Probiotics'] },
    { id: '#10232', date: 'Dec 28, 2024', status: 'Delivered', total: '$89.00', items: ['Zinc Supplements'] },
    { id: '#10231', date: 'Dec 15, 2024', status: 'Delivered', total: '$156.00', items: ['B-Complex', 'Magnesium'] }
  ]

  const savedItems = [
    { id: 1, name: 'Premium Vitamin C', price: '$29.99', image: '🍊', inStock: true },
    { id: 2, name: 'Organic Turmeric', price: '$24.99', image: '🌿', inStock: true },
    { id: 3, name: 'Collagen Peptides', price: '$39.99', image: '💪', inStock: false },
    { id: 4, name: 'Iron Supplements', price: '$19.99', image: '🔴', inStock: true }
  ]

  const subscriptions = [
    { id: 1, product: 'Multivitamin Pack', frequency: 'Monthly', nextDelivery: 'Feb 15, 2025', price: '$49.99', status: 'Active' },
    { id: 2, product: 'Omega-3 Fish Oil', frequency: 'Every 2 months', nextDelivery: 'Mar 1, 2025', price: '$34.99', status: 'Active' },
    { id: 3, product: 'Vitamin D3', frequency: 'Monthly', nextDelivery: 'Paused', price: '$19.99', status: 'Paused' }
  ]

  const consultations = [
    { id: 1, date: 'Jan 20, 2025', time: '2:00 PM', doctor: 'Dr. Sarah Johnson', type: 'Nutrition Consultation', status: 'Upcoming' },
    { id: 2, date: 'Dec 15, 2024', time: '10:30 AM', doctor: 'Dr. Michael Chen', type: 'Supplement Review', status: 'Completed' },
    { id: 3, date: 'Nov 22, 2024', time: '3:15 PM', doctor: 'Dr. Sarah Johnson', type: 'Initial Assessment', status: 'Completed' }
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
              
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-blue-600">{order.id}</h3>
                        <p className="text-sm text-gray-500">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded text-sm ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                        <p className="font-semibold mt-1">{order.total}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      Items: {order.items.join(', ')}
                    </div>
                    <div className="mt-3 flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View Details</button>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Reorder</button>
                      {order.status === 'Delivered' && (
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Write Review</button>
                      )}
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
              <h1 className="text-2xl font-bold mb-4">Saved Items</h1>
              <p className="text-gray-600 mb-6">Your wishlist and saved products</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {savedItems.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4 flex items-center gap-4">
                    <div className="text-4xl">{item.image}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-lg font-bold text-blue-600">{item.price}</p>
                      <p className={`text-sm ${item.inStock ? 'text-green-600' : 'text-red-600'}`}>
                        {item.inStock ? 'In Stock' : 'Out of Stock'}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button 
                        className={`px-4 py-2 rounded text-sm font-medium ${
                          item.inStock 
                            ? 'bg-blue-600 text-white hover:bg-blue-700' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={!item.inStock}
                      >
                        Add to Cart
                      </button>
                      <button className="px-4 py-2 border border-red-300 text-red-600 rounded text-sm font-medium hover:bg-red-50">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
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
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Add New Subscription
                </button>
              </div>
              <p className="text-gray-600 mb-6">Manage your recurring orders</p>
              
              <div className="space-y-4">
                {subscriptions.map((sub) => (
                  <div key={sub.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold">{sub.product}</h3>
                        <p className="text-sm text-gray-500">Every {sub.frequency.toLowerCase()}</p>
                        <p className="text-sm text-gray-500">Next: {sub.nextDelivery}</p>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded text-sm ${
                          sub.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {sub.status}
                        </span>
                        <p className="font-semibold mt-1">{sub.price}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Edit</button>
                      {sub.status === 'Active' ? (
                        <button className="text-yellow-600 hover:text-yellow-800 text-sm font-medium">Pause</button>
                      ) : (
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium">Resume</button>
                      )}
                      <button className="text-red-600 hover:text-red-800 text-sm font-medium">Cancel</button>
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
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Book Consultation
                </button>
              </div>
              <p className="text-gray-600 mb-6">Your health and nutrition consultations</p>
              
              <div className="space-y-4">
                {consultations.map((consultation) => (
                  <div key={consultation.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold">{consultation.type}</h3>
                        <p className="text-sm text-gray-500">with {consultation.doctor}</p>
                        <p className="text-sm text-gray-500">{consultation.date} at {consultation.time}</p>
                      </div>
                      <span className={`px-3 py-1 rounded text-sm ${
                        consultation.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {consultation.status}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {consultation.status === 'Upcoming' ? (
                        <>
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Join Video Call</button>
                          <button className="text-yellow-600 hover:text-yellow-800 text-sm font-medium">Reschedule</button>
                          <button className="text-red-600 hover:text-red-800 text-sm font-medium">Cancel</button>
                        </>
                      ) : (
                        <>
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View Notes</button>
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Download Report</button>
                          <button className="text-green-600 hover:text-green-800 text-sm font-medium">Book Follow-up</button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'profile':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h1 className="text-2xl font-bold mb-4">Profile Settings</h1>
              <p className="text-gray-600 mb-6">Manage your account information</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4">Personal Information</h3>
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <textarea 
                        value={user.address}
                        onChange={(e) => setUser({...user, address: e.target.value})}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Account Security</h3>
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
                    <div className="pt-2">
                      <p className="text-sm text-gray-500">Member since: {user.memberSince}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-6 pt-6 border-t">
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                  Save Changes
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

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