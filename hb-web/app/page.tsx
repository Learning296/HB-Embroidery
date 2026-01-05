"use client";

import React, { useEffect, useState } from 'react';
import { ShoppingBag, X, Check } from 'lucide-react';

const HERO_IMAGES = ['/images/p_1.png', '/images/p_2.png', '/images/black.png'];

type Product = {
  id: string;
  title: string;
  desc: string;
  img: string;
  price: number;
  salePrice: number;
};

const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'Sindhi Dresses',
    desc: 'Traditional Dresses pattern with fine hand-stitching.',
    img: '/images/black.png',
    price: 5000,
    salePrice: 2500,
  },
  {
    id: 'p2',
    title: 'Embroidered Shawl',
    desc: 'Elegant evening shawl with subtle metallic thread.',
    img: '/images/sh.jpg',
    price: 4400,
    salePrice: 2200,
  },
  {
    id: 'p3',
    title: 'Applic Work',
    desc: 'Bold and aesthetic colorful applic work for festive occasions.',
    img: '/images/p_2.png',
    price: 4800,
    salePrice: 2400,
  },
  {
    id: 'p4',
    title: 'Kids Wear',
    desc: 'Vibrant and comfortable embroidered outfits for children.',
    img: '/images/k.jpg',
    price: 4000,
    salePrice: 2000,
  },
];

export default function Page() {
  const [bgIndex, setBgIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPurchase, setShowPurchase] = useState(false);
  const [purchasedProduct, setPurchasedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const t = setInterval(() => setBgIndex((i) => (i + 1) % HERO_IMAGES.length), 5000);
    return () => clearInterval(t);
  }, []);

  const handleBuyNow = (product: Product) => {
    setPurchasedProduct(product);
    setShowPurchase(true);
    setTimeout(() => {
      setShowPurchase(false);
      setPurchasedProduct(null);
    }, 3000);
  };

  const bgUrl = HERO_IMAGES[bgIndex];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 relative">
      {/* Purchase Success Modal */}
      {showPurchase && purchasedProduct && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 sm:p-8 max-w-md w-full shadow-2xl animate-bounce">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-2">
              Successfully Purchased!
            </h3>
            <p className="text-center text-gray-600 mb-4">
              You bought <span className="font-semibold">{purchasedProduct.title}</span>
            </p>
            <p className="text-center text-2xl font-bold text-green-600">
              50% OFF - PKR {purchasedProduct.salePrice.toLocaleString()}
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="/" className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center font-bold text-white shadow-md">
                HB
              </div>
              <span className="font-bold text-base sm:text-lg text-gray-800">HB Embroidery</span>
            </a>

            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              <a href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition">
                Home
              </a>
              <a href="#products" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition">
                Shop
              </a>
              <a href="#about" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition">
                About
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-900 transition shadow-md"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative">
              <button
                aria-label="Toggle menu"
                onClick={() => setMenuOpen((v) => !v)}
                className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-48 border border-gray-100">
                  <a href="/" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-700 hover:text-gray-900 font-medium">
                    Home
                  </a>
                  <a href="#products" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-700 hover:text-gray-900 font-medium">
                    Shop
                  </a>
                  <a href="#about" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-700 hover:text-gray-900 font-medium">
                    About
                  </a>
                  <a href="#contact" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-700 hover:text-gray-900 font-medium">
                    Contact
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative flex items-center justify-center min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img src={bgUrl} alt={`Hero ${bgIndex + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                  🔥 50% OFF LIMITED TIME OFFER
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4 sm:mb-6">
                  Experience the beauty of <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">Sindhi Handicraft</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
                  HB Embroidery offers exquisite handcrafted pieces blending tradition and elegance — perfect for those
                  who appreciate timeless craftsmanship.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <a
                    href="#products"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg text-sm sm:text-base font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition"
                  >
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Shop Now - 50% OFF
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 rounded-lg text-gray-700 text-sm sm:text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Featured Product Card */}
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden border-2 border-gray-200 shadow-2xl bg-white transform hover:scale-105 transition duration-300">
                  <div className="relative">
                    <img
                      src="/images/black.png"
                      alt="Featured product"
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      50% OFF
                    </div>
                  </div>
                  {/* <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Sindhi Dress</h3>
                    <p className="text-gray-600 text-sm mb-4">Handcrafted with traditional patterns</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-400 line-through text-sm">PKR 12,000</span>
                        <span className="text-2xl font-bold text-gray-900 ml-2">PKR 6,000</span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                aria-label={`Show background ${i + 1}`}
                onClick={() => setBgIndex(i)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${i === bgIndex ? 'bg-gray-800 w-8 sm:w-10' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Premium Products</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Handcrafted pieces made with care — Shop now and save 50%
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {PRODUCTS.map((product) => (
                <article
                  key={product.id}
                  className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden flex flex-col hover:shadow-2xl hover:border-gray-300 transition duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-48 sm:h-56 w-full">
                    <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                      50% OFF
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-sm text-gray-600 flex-1 mb-4">{product.desc}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-gray-400 line-through text-xs sm:text-sm">
                            PKR {product.price.toLocaleString()}
                          </div>
                          <div className="text-xl sm:text-2xl font-bold text-gray-900">
                            PKR {product.salePrice.toLocaleString()}
                          </div>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleBuyNow(product)}
                        className="w-full px-4 py-2.5 sm:py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg text-sm sm:text-base font-bold hover:from-gray-900 hover:to-black transition shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Buy Now
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">About HB Embroidery</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-4">
                  We are dedicated to preserving the rich tradition of Sindhi handicraft and embroidery. Each piece is carefully handcrafted by skilled artisans who have mastered their craft over generations.
                </p>
                <p className="text-base sm:text-lg text-gray-600">
                  Our mission is to bring you authentic, high-quality embroidered products that celebrate our cultural heritage while meeting modern standards of excellence.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-6 rounded-xl text-center border border-gray-100">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center border border-gray-100">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center border border-gray-100">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Handcrafted</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center border border-gray-100">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">50%</div>
                  <div className="text-sm text-gray-600">Sale Active</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-50 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center font-bold text-white">
                    HB
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">HB Embroidery</div>
                    <div className="text-sm text-gray-600">Sindhi Handicraft</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Experience the beauty of Sindhi Handicraft with HB Embroidery. Exquisite handcrafted pieces blending
                  tradition and elegance.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-3">Quick Links</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li><a href="/" className="hover:text-gray-900 transition">Home</a></li>
                  <li><a href="#products" className="hover:text-gray-900 transition">Shop</a></li>
                  <li><a href="#about" className="hover:text-gray-900 transition">About</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-3">Contact Us</h4>
                <p className="text-sm text-gray-600 mb-1">Email: hello@hb-embroidery.local</p>
                <p className="text-sm text-gray-600 mb-4">Phone: +92 300 0000000</p>

                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Your name"
                  />
                  <input
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Email"
                  />
                  <textarea
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Message"
                    rows={3}
                  />
                  <button className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-900 transition">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-600">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div>© {new Date().getFullYear()} HB Embroidery. All rights reserved.</div>
            <div>Designed with care • Sindh, Pakistan</div>
          </div>
        </div>
      </footer>
    </div>
  );
}