import React from 'react';
import { PhoneCall, Car, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Car className="w-8 h-8" />
            <span className="text-2xl font-bold">АвтоЭксперт</span>
          </Link>
          <div className="flex items-center gap-2 md:gap-4">
            <a 
              href="tel:+77474360975" 
              className="flex items-center space-x-1 md:space-x-2 bg-blue-600 hover:bg-blue-700 px-3 md:px-4 py-2 rounded-lg transition-colors text-sm md:text-base"
            >
              <PhoneCall className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden md:inline">Позвонить</span>
            </a>
            <a 
              href="https://wa.me/77474360975" 
              className="flex items-center space-x-1 md:space-x-2 bg-green-500 hover:bg-green-600 px-3 md:px-4 py-2 rounded-lg transition-colors text-sm md:text-base"
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>

      {children}

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-2 md:col-span-3">
              <Car className="w-6 h-6" />
              <span className="text-xl font-bold">АвтоЭксперт</span>
            </div>
            
            {/* Navigation Links */}
            <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:col-span-6 text-sm">
              <div className="space-y-2">
                <Link to="/" className="block hover:text-blue-400 transition-colors">Главная</Link>
                <Link to="/car-selection" className="block hover:text-blue-400 transition-colors">Подбор авто</Link>
                <Link to="/legal-check" className="block hover:text-blue-400 transition-colors">Проверка юридической чистоты</Link>
              </div>
              <div className="space-y-2">
                <Link to="/computer-diagnostics" className="block hover:text-blue-400 transition-colors">Компьютерная диагностика</Link>
                <Link to="/car-search" className="block hover:text-blue-400 transition-colors">Автопоиск</Link>
                <Link to="/car-inspection" className="block hover:text-blue-400 transition-colors">Проверка авто</Link>
              </div>
              <div className="space-y-2">
                <Link to="/document-check" className="block hover:text-blue-400 transition-colors">Проверка документов авто</Link>
                <Link to="/car-purchase" className="block hover:text-blue-400 transition-colors">Покупка авто</Link>
              </div>
            </nav>
            
            {/* Contact Buttons */}
            <div className="flex flex-col space-y-3 md:col-span-3">
              <a 
                href="tel:+77474360975"
                className="flex items-center justify-center md:justify-start space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <PhoneCall className="w-5 h-5" />
                <span>+7 747 436 0975</span>
              </a>
              <a 
                href="https://wa.me/77474360975"
                className="flex items-center justify-center md:justify-start space-x-2 text-green-500 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Написать в WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;