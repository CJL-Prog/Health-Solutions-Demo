import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Account() {
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
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-gray-600">john@email.com</p>
              </div>
              <nav className="space-y-2">
                <a href="#" className="block px-4 py-2 bg-blue-600 text-white rounded">📦 Order History</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-50 rounded">💾 Saved Items</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-50 rounded">🔄 Subscriptions</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-50 rounded">📝 Consultations</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-50 rounded">👤 Profile</a>
                <a href="#" className="block px-4 py-2 text-red-500 hover:bg-red-50 rounded">🚪 Logout</a>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h1 className="text-2xl font-bold mb-2">Hi John, welcome back!</h1>
              <p className="text-gray-600">Here&apos;s what&apos;s happening with your account.</p>
            </div>
            
            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/products" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">📦</span>
                  <div>
                    <h3 className="font-semibold">View My Orders</h3>
                    <p className="text-sm text-gray-600">3 orders last 30 days</p>
                  </div>
                </div>
              </Link>
              <Link href="/cart" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">🛒</span>
                  <div>
                    <h3 className="font-semibold">Continue Checkout</h3>
                    <p className="text-sm text-orange-600">2 items in cart</p>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Recent Orders */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Recent Orders</h2>
              </div>
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order #</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-blue-600 font-medium">#10234</td>
                    <td className="px-6 py-4">Jan 15, 2025</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Delivered</span>
                    </td>
                    <td className="px-6 py-4 font-semibold">$487.00</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-blue-600 font-medium">#10233</td>
                    <td className="px-6 py-4">Jan 10, 2025</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Processing</span>
                    </td>
                    <td className="px-6 py-4 font-semibold">$199.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}