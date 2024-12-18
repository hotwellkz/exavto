import React from 'react';
import { PhoneCall, Car, Shield, Search, FileCheck, MessageCircle, CheckCircle, Clock, MapPin } from 'lucide-react';
import Layout from '../components/Layout';

function CarSearch() {
  return (
    <Layout>
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Автопоиск в Алматы - Найдем идеальный автомобиль
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Профессиональный поиск и подбор автомобиля под ваши требования с полной проверкой технического состояния
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Search className="w-6 h-6 text-green-400" />
              <span>Тщательный поиск</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-green-400" />
              <span>Гарантия качества</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-6 h-6 text-green-400" />
              <span>Быстрый результат</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-green-400" />
              <span>Поиск по всему Казахстану</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Профессиональный автопоиск под ключ
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  Как мы ищем
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Анализ всех площадок продаж</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Проверка частных объявлений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Работа с автосалонами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Поиск по базе перекупщиков</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Мониторинг новых объявлений</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Car className="w-6 h-6 text-blue-500" />
                  Что вы получаете
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Подбор по вашим критериям</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Полная проверка автомобиля</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Проверка юридической чистоты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Помощь в оформлении</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Торг с продавцом</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Этапы работы
              </h3>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Консультация</strong>
                  <p>Определяем ваши требования, бюджет и предпочтения по автомобилю</p>
                </li>
                <li>
                  <strong>Поиск вариантов</strong>
                  <p>Ежедневный мониторинг всех площадок и отбор подходящих автомобилей</p>
                </li>
                <li>
                  <strong>Первичная проверка</strong>
                  <p>Связь с продавцами и проверка истории автомобилей</p>
                </li>
                <li>
                  <strong>Осмотр</strong>
                  <p>Выезд и полная диагностика выбранных автомобилей</p>
                </li>
                <li>
                  <strong>Проверка документов</strong>
                  <p>Юридическая проверка и проверка на ограничения</p>
                </li>
                <li>
                  <strong>Сопровождение сделки</strong>
                  <p>Помощь в оформлении и торге с продавцом</p>
                </li>
              </ol>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Преимущества работы с нами</h4>
                <ul className="space-y-2 text-blue-800">
                  <li>✓ 8 лет опыта на рынке</li>
                  <li>✓ Более 1000 подобранных автомобилей</li>
                  <li>✓ Профессиональное оборудование для диагностики</li>
                  <li>✓ Работаем по всему Казахстану</li>
                  <li>✓ Гарантия качества услуг</li>
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
            Начните поиск автомобиля прямо сейчас
          </h2>
          <p className="text-xl mb-8">
            Доверьте поиск профессионалам и получите лучший результат
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
              href="https://wa.me/77474360975?text=Здравствуйте!%20Я%20по%20поводу%20поиска%20автомобиля."
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

export default CarSearch;