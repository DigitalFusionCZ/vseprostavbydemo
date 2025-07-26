'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.title = "Vše Pro Stavby";

    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3b82f6" /><stop offset="100%" stop-color="#2563eb" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      document.head.appendChild(faviconLink);
    }
    faviconLink.setAttribute('href', faviconUrl);

  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <a href="#hero" className="text-2xl font-bold text-blue-600">Vše Pro Stavby</a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <a href="#onas" className="hover:text-blue-600 transition-colors duration-300">O Nás</a>
            <a href="#sluzby" className="hover:text-blue-600 transition-colors duration-300">Služby</a>
            <a href="#kontakt" className="hover:text-blue-600 transition-colors duration-300">Kontakt</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
          <div className="flex flex-col space-y-2 p-4">
            <a href="#onas" onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300">O Nás</a>
            <a href="#sluzby" onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300">Služby</a>
            <a href="#kontakt" onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative bg-blue-600 text-white py-24 md:py-32 flex items-center justify-center min-h-screen-minus-nav">
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fadeInUp">Vše Pro Stavby</h1>
          <p className="text-lg md:text-xl mb-8 opacity-0 animate-fadeInUp animation-delay-300">Váš spolehlivý partner pro stavební projekty všeho druhu.</p>
          <a href="#kontakt" className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 scale-0 animate-zoomIn animation-delay-600">Napište nám</a>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-500 opacity-90"></div>
      </section>

      {/* About Us Section */}
      <section id="onas" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700">O Nás</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-4">
                Jsme dynamická společnost specializující se na komplexní dodávky a realizaci stavebních projektů.
                S dlouholetými zkušenostmi v oboru se zaměřujeme na kvalitu, spolehlivost a individuální přístup ke každému klientovi.
              </p>
              <p className="text-lg leading-relaxed">
                Naším cílem je přinášet inovativní a efektivní řešení, která splňují ty nejvyšší standardy
                a překračují očekávání našich zákazníků. Důraz klademe na detail a transparentní komunikaci
                po celou dobu projektu.
              </p>
            </div>
            <div className="flex justify-center items-center">
                <svg className="w-48 h-48 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="sluzby" className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700">Naše Služby</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
              <svg className="w-16 h-16 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M17 16h.01"></path></svg>
              <h3 className="text-xl font-semibold mb-3">Realizace staveb</h3>
              <p className="text-gray-600">Kompletní realizace novostaveb a rekonstrukcí na klíč.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
              <svg className="w-16 h-16 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m7 0V5a2 2 0 012-2h2a2 2 0 012 2v6m-6 0H6"></path></svg>
              <h3 className="text-xl font-semibold mb-3">Stavební dozor</h3>
              <p className="text-gray-600">Zajištění odborného dohledu nad průběhem stavebních prací.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
              <svg className="w-16 h-16 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4zm-4 8H4m4 0h16M19 12H9m10 0a2 2 0 002 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5a2 2 0 00-2-2h5"></path></svg>
              <h3 className="text-xl font-semibold mb-3">Poradenství</h3>
              <p className="text-gray-600">Odborné poradenství v oblasti stavebnictví a materiálů.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700">Kontaktujte Nás</h2>
          <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
            <p className="text-lg mb-4">
              Máte dotazy nebo potřebujete cenovou nabídku? Neváhejte nás kontaktovat!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span className="text-lg">info@vseprostavby.cz</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.042 11.042 0 005.516 5.516l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span className="text-lg">+420 777 123 456</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="text-lg">Ukázková 123, 110 00 Praha, Česká republika</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Vše Pro Stavby. Všechna práva vyhrazena.</p>
          <p className="text-sm mt-2">
            Vytvořeno s láskou od{' '}
            <a 
              href="https://digitalfusion.cz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              DigitalFusion
            </a>
          </p>
        </div>
      </footer>

      {/* Custom Styles for Animation Helpers */}
      <style jsx global>{`
        .min-h-screen-minus-nav {
          min-height: calc(100vh - 80px); /* Adjust based on your nav height */
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-zoomIn {
          animation: zoomIn 0.8s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        /* Ensure header elements don't get 'display: none' from Tailwind's hidden utility for client-side manipulation */
        html, body {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
