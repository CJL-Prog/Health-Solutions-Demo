import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function HRT() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">Personalized Hormone Optimization</h1>
            <p className="text-xl mb-8 opacity-90">Expert medical guidance for your hormonal health journey</p>
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold inline-block hover:bg-gray-100 transition">
              Schedule Consultation
            </Link>
          </div>
          <div className="bg-white/10 rounded-lg p-12 text-center">
            <span className="text-6xl">👨‍⚕️</span>
            <p className="mt-4">Doctor Telehealth</p>
          </div>
        </div>
      </div>
      
      {/* Services Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '💪', title: 'Testosterone Replacement (TRT)', desc: 'Optimize testosterone levels' },
              { icon: '👨', title: "Men's Health", desc: 'Comprehensive male wellness' },
              { icon: '👩', title: "Women's Hormone Balancing", desc: 'Restore hormonal balance' },
              { icon: '⚖️', title: 'Weight Loss Programs', desc: 'Semaglutide & Tirzepatide' },
              { icon: '🔬', title: 'Lab Testing & Analysis', desc: 'Complete hormone panels' },
              { icon: '📱', title: 'Ongoing Telehealth Support', desc: '24/7 provider access' },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Process Timeline */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Your Journey to Better Health</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Online Intake', desc: 'Complete health questionnaire' },
              { num: '2', title: 'Provider Consultation', desc: 'Video call with physician' },
              { num: '3', title: 'Lab Orders', desc: 'Blood work at home or lab' },
              { num: '4', title: 'Prescription Delivery', desc: 'Medications to your door' },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Health?</h2>
        <p className="text-xl mb-8 opacity-90">Join thousands who have transformed their lives</p>
        <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold inline-block hover:bg-gray-100 transition">
          Start Now →
        </Link>
      </div>
      
      <Footer />
    </div>
  )
}