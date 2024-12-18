import React from 'react';
import { PhoneCall, Car, Shield, CheckCircle, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { services } from '../data/services';

function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            АвтоЭксперт - Ваш надежный помощник в выборе автомобиля.
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Профессиональная диагностика и подбор автомобилей в Алматы от экспертов с 8-летним опытом. АвтоЭксперт - это гарантия безопасной покупки авто.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-green-400" />
              <span>Гарантия от АвтоЭксперт</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>Современное оборудование</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-green-400" />
              <span>Выезд по всему Казахстану</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-6 h-6 text-green-400" />
              <span>Оперативная проверка</span>
            </div>
          </div>
          <div className="mt-8">
            <Link 
              to="/car-selection"
              className="inline-flex items-center text-sm text-blue-300 hover:text-white transition-colors"
            >
              <span>Узнать о подборе авто</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="services">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Услуги АвтоЭксперт в Алматы
            </h2>
            <p className="text-gray-600 text-lg">
              Комплексная проверка и подбор автомобилей от профессионалов АвтоЭксперт
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-start gap-3 md:gap-4 mb-3 p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-blue-100 rounded-full text-blue-900 text-sm md:text-base">
                  {idx + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-blue-900">
                      {service.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              АвтоЭксперт использует профессиональное диагностическое оборудование x431 pro v3
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-blue-50 text-blue-900 px-4 py-2 rounded-full text-sm font-medium">
                Официальная гарантия АвтоЭксперт
              </div>
              <div className="bg-blue-50 text-blue-900 px-4 py-2 rounded-full text-sm font-medium">
                Выезд по всему Казахстану
              </div>
              <div className="bg-blue-50 text-blue-900 px-4 py-2 rounded-full text-sm font-medium">
                Сертифицированные специалисты
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Свяжитесь с АвтоЭксперт прямо сейчас
          </h2>
          <p className="text-xl mb-8">
            Доверьте проверку автомобиля профессионалам АвтоЭксперт
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="tel:+77474360975"
              className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              <PhoneCall className="w-6 h-6" />
              <span>Позвонить</span>
            </a>
            <a
              href="https://wa.me/77474360975?text=Здравствуйте!%20Я%20по%20поводу%20осмотра%20авто."
              className="inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Написать в WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;
