export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      {/* Legal Disclaimer Banner */}
      <div className="bg-red-600 text-white p-4 text-center font-semibold">
        ⚠️ Must be 18+. All products are for research use only. Not for human consumption.
      </div>
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Shop All Peptides</li>
              <li>HRT Programs</li>
              <li>Consultations</li>
              <li>Lab Results</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Research</li>
              <li>FAQs</li>
              <li>Dosage Guide</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>About Us</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Medical Disclaimer</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          © 2025 Health Solutions. All rights reserved. | FDA Registered | cGMP Certified
        </div>
      </div>
    </footer>
  )
}