// app/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HERO_IMAGES = ['/images/hero1.jpg', '/images/hero2.jpg', '/images/hero3.jpg'];

type Project = {
  id: string;
  title: string;
  desc: string;
  img: string;
};

const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Sindhi Dresses',
    desc: 'Traditional Dresses pattern with fine hand-stitching.',
    img: '/images/projects/sample-project-1.jpg',
  },
  {
    id: 'p2',
    title: 'Embroidered Shawl',
    desc: 'Elegant evening shawl with subtle metallic thread.',
    img: '/images/projects/sample-project-2.jpg',
  },
  {
    id: 'p3',
    title: 'Applic Work ',
    desc: 'Bold and aesthetic colorful applic work for festive occasions.',
    img: '/images/projects/sample-project-3.jpg',
  },
  {
    id: 'p4',
    title: 'Kids Wear',
    desc: 'Vibrant and comfortable embroidered outfits for children.',
    img: '/images/projects/sample-project-4.jpg',
  },
];

export default function Page(): JSX.Element {
  const [bgIndex, setBgIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // rotate backgrounds every 5 seconds
  useEffect(() => {
    const t = setInterval(() => setBgIndex((i) => (i + 1) % HERO_IMAGES.length), 5000);
    return () => clearInterval(t);
  }, []);

  const bgUrl = HERO_IMAGES[bgIndex];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Header (background rotates) */}
      <header
        className="sticky top-0 z-50 border-b border-gray-200"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url(${bgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backdropFilter: 'blur(4px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center font-bold text-gray-700">
                HB
              </div>
              <span className="font-semibold text-lg text-gray-800">HB Embroidery</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                About
              </Link>
              <a href="#projects" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded"
              >
                Contact
              </a>
            </nav>

            {/* Mobile */}
            <div className="md:hidden">
              <button
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                className="p-2 rounded-md bg-white/80 shadow-sm"
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
                <div className="absolute right-4 top-16 bg-white shadow rounded p-4 w-48">
                  <Link href="/" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-700">
                    Home
                  </Link>
                  <Link href="#about" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-700">
                    About
                  </Link>
                  <a href="#projects" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-700">
                    Projects
                  </a>
                  <a href="#contact" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-700">
                    Contact
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero (synchronized rotating background) */}
      <main className="flex-1">
        <section
          aria-label="Hero"
          className="relative flex items-center justify-center h-[68vh] min-h-[420px] sm:h-[64vh]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(${bgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="py-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                  Experience the beauty of <span className="text-gray-700">Sindhi Handicraft</span>
                </h1>
                <p className="mt-4 text-gray-700 max-w-xl">
                  HB Embroidery offers exquisite handcrafted pieces blending tradition and elegance — perfect for those
                  who appreciate timeless craftsmanship.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center px-5 py-3 bg-gray-800 text-white rounded-md text-sm font-medium"
                  >
                    View Projects
                  </a>
                  <Link
                    href="#about"
                    className="inline-flex items-center px-5 py-3 border border-gray-300 rounded-md text-gray-700 text-sm font-medium"
                  >
                    About Us
                  </Link>
                </div>
              </div>

              {/* Visual card for larger screens */}
              <div className="hidden lg:block">
                <div className="rounded-xl overflow-hidden border border-gray-100 shadow-lg">
                  <Image
                    src="/images/projects/sample-project-1.jpg"
                    alt="sample project"
                    width={720}
                    height={440}
                    className="w-full h-72 object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* subtle position indicator / dots for manual navigation (optional) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                aria-label={`Show background ${i + 1}`}
                onClick={() => setBgIndex(i)}
                className={`w-2.5 h-2.5 rounded-full ${i === bgIndex ? 'bg-gray-800' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">Our Projects</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">Handcrafted pieces made with care — explore some highlights below.</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROJECTS.map((p) => (
                <article
                  key={p.id}
                  className="bg-gray-50 border border-gray-100 rounded-lg overflow-hidden flex flex-col"
                >
                  <div className="relative h-44 w-full">
                    <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover' }} />
                  </div>

                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-semibold text-gray-900">{p.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 flex-1">{p.desc}</p>
                    {/* <div className="mt-3">
                      <a href="#" className="text-sm font-medium text-gray-800 hover:underline">
                        See details →
                      </a>
                    </div> */}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact + Footer top */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center font-bold text-gray-700">
                  HB
                </div>
                <div>
                  <div className="font-semibold text-gray-800">HB Embroidery</div>
                  <div className="text-sm text-gray-600">Sindhi Handicraft & Embroidery</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Experience the beauty of Sindhi Handicraft with HB Embroidery. Exquisite handcrafted pieces blending
                tradition and elegance.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">Quick links</h4>
              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <a href="#projects" className="hover:underline">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">Contact</h4>
              <p className="mt-3 text-sm text-gray-600">Email: hello@hb-embroidery.local</p>
              <p className="mt-1 text-sm text-gray-600">Phone: +92 300 0000000</p>

              <div id="contact" className="mt-4">
                <form className="grid gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    aria-label="Your name"
                    className="border border-gray-200 rounded px-3 py-2 text-sm"
                    placeholder="Your name"
                  />
                  <input
                    aria-label="Email"
                    className="border border-gray-200 rounded px-3 py-2 text-sm"
                    placeholder="Email"
                  />
                  <textarea
                    aria-label="Message"
                    className="border border-gray-200 rounded px-3 py-2 text-sm"
                    placeholder="Message"
                    rows={3}
                  />
                  <button className="mt-2 px-4 py-2 bg-gray-800 text-white rounded text-sm">Send</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer bottom */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
          <div>© {new Date().getFullYear()} HB Embroidery. All rights reserved.</div>
          <div className="mt-2 md:mt-0">Designed with care • Sindh</div>
        </div>
      </footer>
    </div>
  );
}
