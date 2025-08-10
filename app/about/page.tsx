import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function About() {
  const team = [
    { name: 'Dr. Michael Chen', role: 'Chief Medical Officer', desc: '20+ years in endocrinology' },
    { name: 'Sarah Johnson, PhD', role: 'Head of Research', desc: 'Peptide biochemistry expert' },
    { name: 'Robert Martinez', role: 'CEO & Founder', desc: 'Former pharma executive' },
    { name: 'Dr. Amanda Foster', role: 'Clinical Director', desc: 'Women\'s hormone specialist' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Health Solutions</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Pioneering the future of personalized medicine through science-backed peptide therapy and hormone optimization
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          
          <div className="space-y-6 text-gray-600">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
                <span className="text-3xl mr-3">🎯</span> Our Mission
              </h3>
              <p className="leading-relaxed">
                Founded in 2020, Health Solutions emerged from a simple belief: everyone deserves access to cutting-edge therapeutic peptides 
                and hormone optimization treatments that were once available only to elite athletes and celebrities. We're committed to 
                democratizing access to these life-changing therapies while maintaining the highest standards of quality, safety, and medical oversight.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
                <span className="text-3xl mr-3">🏭</span> GMP Manufacturing Excellence
              </h3>
              <p className="leading-relaxed mb-4">
                All our peptides are manufactured in FDA-registered, cGMP-certified facilities that exceed industry standards. 
                Our rigorous quality control process includes:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded">✓ Third-Party Testing</div>
                <div className="bg-blue-50 p-4 rounded">✓ Sterile Processing</div>
                <div className="bg-blue-50 p-4 rounded">✓ HPLC/MS Analysis</div>
                <div className="bg-blue-50 p-4 rounded">✓ Certificate of Analysis</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
                <span className="text-3xl mr-3">🇺🇸</span> 100% USA-Based Operations
              </h3>
              <p className="leading-relaxed">
                We're proud to be a fully American company with all operations based in the United States. From sourcing raw materials 
                to final packaging, every step happens on American soil, ensuring complete transparency, FDA compliance, and fast shipping.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications & Accreditations</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: '🏆', label: 'FDA Registered Facility' },
              { icon: '✓', label: 'cGMP Certified' },
              { icon: '🔬', label: 'ISO 9001:2015' },
              { icon: '🛡️', label: 'PCAB Accredited' },
              { icon: '⚕️', label: 'Licensed Pharmacy' },
            ].map((cert, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl mb-3">{cert.icon}</div>
                <p className="font-semibold text-sm">{cert.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-5xl">
                  {member.name[0]}
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-blue-600 text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}