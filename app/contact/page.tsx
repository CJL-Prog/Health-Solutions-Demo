'use client'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: 'general',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Form submitted! (This is a demo)')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">We&apos;re here to help with your health journey</p>
        </div>
      </div>

      <div className="py-16 flex-1">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.inquiry}
                      onChange={(e) => setFormData({...formData, inquiry: e.target.value})}
                    >
                      <option value="general">General Question</option>
                      <option value="orders">Order Support</option>
                      <option value="hrt">HRT Consultation</option>
                      <option value="peptides">Peptides Information</option>
                      <option value="medical">Medical Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Submit Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <span className="text-2xl mr-3">📍</span> Address
                </h3>
                <p className="text-gray-600">
                  Health Solutions, Inc.<br />
                  123 Medical Plaza, Suite 400<br />
                  Las Vegas, NV 89101
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <span className="text-2xl mr-3">📞</span> Phone
                </h3>
                <p className="text-blue-600 font-semibold text-xl">1-888-PEPTIDE</p>
                <p className="text-gray-600 text-sm">(1-888-737-8433)</p>
                <p className="text-gray-500 text-xs mt-2">Mon-Fri: 8AM-8PM PST</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <span className="text-2xl mr-3">✉️</span> Email
                </h3>
                <p className="text-gray-600">
                  <strong>General:</strong><br />
                  support@healthsolutions.com<br /><br />
                  <strong>Medical:</strong><br />
                  medical@healthsolutions.com
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <span className="text-2xl mr-3">💬</span> Live Chat
                </h3>
                <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition">
                  Start Live Chat
                </button>
                <p className="text-gray-500 text-xs mt-2">Available during business hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}