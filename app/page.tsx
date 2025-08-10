import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Link from 'next/link'

export default function Home() {
  const products = [
    { name: 'Semaglutide', price: '$299', desc: 'GLP-1 for weight management' },
    { name: 'BPC-157', price: '$189', desc: 'Healing & recovery peptide' },
    { name: 'Ipamorelin', price: '$249', desc: 'Growth hormone peptide' },
    { name: 'TB-500', price: '$219', desc: 'Injury recovery' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                USA-Made Peptides, HRT, & Telehealth Consultations
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Look Better. Feel Better. Live Better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-center">
                  Shop Peptides
                </Link>
                <Link href="/hrt" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition text-center">
                  Book HRT Consult
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-white rounded-lg shadow-xl p-12 text-center">
                <div className="text-6xl mb-4">👨‍⚕️👩‍⚕️</div>
                <p className="text-gray-500">Happy, Healthy Individuals</p>
                <p className="text-sm text-gray-400 mt-2">[Hero Image Placeholder]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Boxes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition text-center">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-xl font-semibold mb-3">Shop Peptides</h3>
              <p className="text-gray-600 mb-4">Premium USA-manufactured peptides for weight loss, muscle growth, and anti-aging.</p>
              <Link href="/products" className="text-blue-600 font-medium hover:underline">
                Browse Catalog →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold mb-3">Hormone Replacement Therapy</h3>
              <p className="text-gray-600 mb-4">Personalized HRT programs designed by medical experts.</p>
              <Link href="/hrt" className="text-blue-600 font-medium hover:underline">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition text-center">
              <div className="text-4xl mb-4">⚕️</div>
              <h3 className="text-xl font-semibold mb-3">Book Doctor Consultation</h3>
              <p className="text-gray-600 mb-4">Connect with licensed physicians for personalized treatment plans.</p>
              <Link href="/contact" className="text-blue-600 font-medium hover:underline">
                Schedule Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <div key={i} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-4xl">💉</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-600">{product.price}</span>
                    <Link href="/cart" className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Sign Up', desc: 'Complete health assessment' },
              { step: '2', title: 'Consultation', desc: 'Meet with licensed physician' },
              { step: '3', title: 'Get Tested', desc: 'Lab work at home or clinic' },
              { step: '4', title: 'Receive Treatment', desc: 'Medications delivered to door' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Lost 35 pounds in 3 months with their Semaglutide program. Life-changing results!", author: "Sarah M." },
              { quote: "The HRT consultation was thorough and professional. Feel 10 years younger!", author: "Michael R." },
              { quote: "BPC-157 healed my shoulder injury faster than anything else I&apos;ve tried.", author: "James T." },
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}