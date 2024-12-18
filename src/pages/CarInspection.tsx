import React from 'react';
import { PhoneCall, Car, Shield, CheckCircle, Wrench, MessageCircle, Search, FileCheck, Gauge } from 'lucide-react';
import Layout from '../components/Layout';

function CarInspection() {
  return (
    <Layout>
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507977800135-0fdd36895d66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Профессиональная проверка авто в Алматы
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Комплексная диагностика автомобиля перед покупкой от экспертов с 8-летним опытом работы
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-green-400" />
              <span>Гарантия качества</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wrench className="w-6 h-6 text-green-400" />
              <span>Профессиональное оборудование</span>
            </div>
            <div className="flex items-center space-x-2">
              <Search className="w-6 h-6 text-green-400" />
              <span>Полная диагностика</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Комплексная проверка автомобиля перед покупкой
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  Что проверяем
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Техническое состояние двигателя</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Состояние кузова и следы ремонта</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Ходовая часть и подвеска</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Электронные системы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Салон и комплектация</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Gauge className="w-6 h-6 text-blue-500" />
                  Методы диагностики
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Компьютерная диагностика x431 pro v3</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Эндоскопическая проверка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Замер толщины лакокрасочного покрытия</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Проверка на подъемнике</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Процесс проверки автомобиля
              </h3>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Внешний осмотр</strong>
                  <p>Проверка кузова на повреждения, ремонт и окрас</p>
                </li>
                <li>
                  <strong>Диагностика двигателя</strong>
                  <p>Замер компрессии и эндоскопическая проверка</p>
                </li>
                <li>
                  <strong>Проверка ходовой</strong>
                  <p>Диагностика подвески на профессиональном подъемнике</p>
                </li>
                <li>
                  <strong>Компьютерная диагностика</strong>
                  <p>Проверка всех электронных систем автомобиля</p>
                </li>
                <li>
                  <strong>Проверка документов</strong>
                  <p>Юридическая чистота и история владения</p>
                </li>
              </ol>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Почему выбирают нас</h4>
                <ul className="space-y-2 text-blue-800">
                  <li>✓ 8 лет опыта в диагностике автомобилей</li>
                  <li>✓ Современное диагностическое оборудование</li>
                  <li>✓ Выезд в любую точку Алматы и области</li>
                  <li>✓ Подробный отчет о состоянии автомобиля</li>
                  <li>✓ Гарантия на все виды проверок</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Закажите проверку автомобиля
          </h2>
          <p className="text-xl mb-8">
            Защитите себя от покупки проблемного автомобиля
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
              href="https://wa.me/77474360975?text=Здравствуйте!%20Я%20по%20поводу%20проверки%20авто."
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

export default CarInspection;