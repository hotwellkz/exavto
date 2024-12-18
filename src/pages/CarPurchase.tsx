import React from 'react';
import { PhoneCall, Car, Shield, CheckCircle, MessageCircle, FileCheck, AlertTriangle, Gauge, Wrench } from 'lucide-react';
import Layout from '../components/Layout';

function CarPurchase() {
  return (
    <Layout>
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Безопасная покупка авто в Алматы
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Профессиональная помощь в выборе и покупке автомобиля с полной проверкой технического состояния и юридической чистоты
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-green-400" />
              <span>Гарантия безопасной сделки</span>
            </div>
            <div className="flex items-center space-x-2">
              <Car className="w-6 h-6 text-green-400" />
              <span>Проверенные автомобили</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileCheck className="w-6 h-6 text-green-400" />
              <span>Юридическая чистота</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Комплексное сопровождение покупки автомобиля
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  Наши услуги
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Подбор автомобиля по параметрам</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Комплексная техническая проверка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Проверка юридической чистоты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Торг с продавцом</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Оформление документов</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Gauge className="w-6 h-6 text-blue-500" />
                  Что проверяем
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Техническое состояние</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>История обслуживания</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Юридическая чистота</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Реальный пробег</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Состояние кузова</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Этапы покупки автомобиля с нами
              </h3>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Консультация</strong>
                  <p>Определяем ваши требования и бюджет</p>
                </li>
                <li>
                  <strong>Подбор вариантов</strong>
                  <p>Поиск подходящих автомобилей на рынке</p>
                </li>
                <li>
                  <strong>Техническая проверка</strong>
                  <p>Полная диагностика выбранного автомобиля</p>
                </li>
                <li>
                  <strong>Юридическая проверка</strong>
                  <p>Проверка документов и юридической чистоты</p>
                </li>
                <li>
                  <strong>Оценка стоимости</strong>
                  <p>Определение реальной рыночной цены</p>
                </li>
                <li>
                  <strong>Проведение сделки</strong>
                  <p>Помощь в оформлении и передаче автомобиля</p>
                </li>
              </ol>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-6 h-6 text-yellow-500" />
                  <h4 className="text-lg font-semibold text-yellow-800">Важно знать</h4>
                </div>
                <p className="text-yellow-800">
                  Покупка автомобиля - серьезное решение. Доверьте проверку профессионалам, 
                  чтобы избежать покупки проблемного автомобиля и сэкономить время и деньги.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Наши преимущества</h4>
                <ul className="space-y-2 text-blue-800">
                  <li>✓ 8 лет опыта на рынке</li>
                  <li>✓ Профессиональное диагностическое оборудование</li>
                  <li>✓ Полная проверка технического состояния</li>
                  <li>✓ Гарантия юридической чистоты</li>
                  <li>✓ Помощь в оформлении документов</li>
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
            Начните покупку автомобиля с профессионалами
          </h2>
          <p className="text-xl mb-8">
            Сделайте правильный выбор с экспертной поддержкой
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
              href="https://wa.me/77474360975?text=Здравствуйте!%20Я%20по%20поводу%20покупки%20авто."
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

export default CarPurchase;