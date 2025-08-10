'use client'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Research() {
  const articles = [
    {
      category: 'PEPTIDE SCIENCE',
      title: 'Understanding GLP-1 Agonists: A Comprehensive Guide',
      excerpt: 'Explore the mechanisms of action, clinical applications, and latest research on GLP-1 receptor agonists...',
      date: 'Jan 15, 2025',
      readTime: '8 min read'
    },
    {
      category: 'HORMONE THERAPY',
      title: 'The Role of Testosterone in Men\'s Health',
      excerpt: 'Recent studies reveal the critical importance of optimal testosterone levels for cardiovascular health...',
      date: 'Jan 10, 2025',
      readTime: '6 min read'
    },
    {
      category: 'WEIGHT LOSS',
      title: 'Semaglutide vs Tirzepatide: Clinical Comparison',
      excerpt: 'Head-to-head analysis of efficacy, safety profiles, and patient outcomes for these breakthrough medications...',
      date: 'Jan 5, 2025',
      readTime: '10 min read'
    },
    {
      category: 'WOMEN\'S HEALTH',
      title: 'Hormone Balancing for Women Over 40',
      excerpt: 'Evidence-based approaches to managing hormonal changes during perimenopause and menopause...',
      date: 'Dec 28, 2024',
      readTime: '7 min read'
    },
    {
      category: 'RECOVERY',
      title: 'BPC-157: Latest Research Update',
      excerpt: 'New clinical data demonstrates BPC-157\'s remarkable ability to accelerate tissue repair...',
      date: 'Dec 20, 2024',
      readTime: '5 min read'
    },
    {
      category: 'ANTI-AGING',
      title: 'The Science of Cellular Aging and Peptides',
      excerpt: 'Breakthrough research on how peptides influence telomere length and cellular regeneration...',
      date: 'Dec 15, 2024',
      readTime: '9 min read'
    }
  ]

  const resources = [
    {
      icon: '📕',
      title: 'The Complete Guide to Peptide Therapy',
      desc: '50-page comprehensive guide covering all aspects of peptide therapy',
      size: 'PDF (2.4 MB)'
    },
    {
      icon: '📗',
      title: 'HRT Starter Guide for Men',
      desc: 'Everything you need to know about starting hormone replacement therapy',
      size: 'PDF (1.8 MB)'
    },
    {
      icon: '📘',
      title: 'Women\'s Hormone Optimization Handbook',
      desc: 'Comprehensive resource for understanding female hormones',
      size: 'PDF (2.1 MB)'
    },
    {
      icon: '📙',
      title: 'GLP-1 Weight Loss Protocol',
      desc: 'Step-by-step guide to using Semaglutide and Tirzepatide safely',
      size: 'PDF (1.5 MB)'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-700 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Research & Education</h1>
          <p className="text-2xl opacity-90">Learn the Science Behind Our Products</p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Latest Research & Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <div key={i} className="bg-white border rounded-lg overflow-hidden hover:shadow-xl transition group cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-5xl">📚</span>
                </div>
                <div className="p-6">
                  <div className="text-blue-600 text-xs font-semibold mb-2">{article.category}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <Link href="#" className="text-blue-600 font-semibold mt-4 inline-block hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Downloadable Resources */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Free Educational Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex gap-4">
                <div className="text-5xl">{resource.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{resource.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{resource.size}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition">
                      Download PDF →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Research</h2>
          <p className="text-xl opacity-90 mb-8">Get weekly updates on peptide science and hormone optimization</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-800"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}