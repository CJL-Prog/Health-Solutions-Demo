import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your journey to optimal health in four simple steps
          </p>
        </div>
      </div>

      {/* Four Step Process */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-32 left-0 right-0 h-0.5 bg-blue-200 hidden lg:block"></div>
            
            {/* Steps */}
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                {
                  step: '1',
                  icon: '📝',
                  title: 'Sign Up',
                  desc: 'Create your account and complete our comprehensive health questionnaire to help us understand your needs.',
                  color: 'bg-blue-600'
                },
                {
                  step: '2',
                  icon: '💬',
                  title: 'Consultation',
                  desc: 'Schedule a video consultation with our licensed medical providers who specialize in hormone optimization.',
                  color: 'bg-purple-600'
                },
                {
                  step: '3',
                  icon: '🔬',
                  title: 'Lab Work',
                  desc: 'Complete blood work at a local lab or with our at-home collection kit for comprehensive analysis.',
                  color: 'bg-green-600'
                },
                {
                  step: '4',
                  icon: '📦',
                  title: 'Personalized Plan',
                  desc: 'Receive your custom treatment plan and medications delivered discreetly to your door.',
                  color: 'bg-orange-600'
                }
              ].map((item, i) => (
                <div key={i} className="text-center relative">
                  <div className={`w-24 h-24 ${item.color} text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-lg relative z-10`}>
                    {item.step}
                  </div>
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link href="/contact" className="bg-blue-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition inline-block">
              Get Started Today →
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '✅', title: 'FDA Registered', desc: 'All products from FDA-registered facilities' },
              { icon: '🔒', title: 'Secure & Private', desc: 'HIPAA compliant and discreet shipping' },
              { icon: '🏥', title: 'Medical Experts', desc: 'Licensed physicians specializing in hormones' },
              { icon: '🇺🇸', title: '100% USA Made', desc: 'All products manufactured in the USA' },
              { icon: '📞', title: '24/7 Support', desc: 'Always available when you need us' },
              { icon: '💰', title: 'Best Prices', desc: 'Competitive pricing with payment plans' },
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}