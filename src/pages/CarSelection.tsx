import React from 'react';
import { PhoneCall, Car, Shield, CheckCircle, MapPin, Clock, MessageCircle, Search, Wrench, FileCheck } from 'lucide-react';
import Layout from '../components/Layout';

function CarSelection() {
  return (
    <Layout>
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Профессиональный подбор авто в Алматы
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Поможем выбрать надежный автомобиль с гарантией технической и юридической чистоты
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-green-400" />
              <span>Гарантия результата</span>
            </div>
            <div className="flex items-center space-x-2">
              <Search className="w-6 h-6 text-green-400" />
              <span>Тщательный отбор</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wrench className="w-6 h-6 text-green-400" />
              <span>Полная диагностика</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileCheck className="w-6 h-6 text-green-400" />
              <span>Проверка документов</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Профессиональный подбор автомобиля под ключ
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Наша команда экспертов предоставляет полный комплекс услуг по подбору автомобиля в Алматы и по всему Казахстану. 
                Мы берем на себя все этапы выбора и проверки автомобиля, чтобы вы могли получить надежное транспортное средство.
              </p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Почему стоит доверить подбор авто нам?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>8 лет успешной работы на рынке автоподбора</li>
                <li>Более 1000 успешно подобранных автомобилей</li>
                <li>Профессиональное диагностическое оборудование</li>
                <li>Тщательная проверка технического состояния</li>
                <li>Полная проверка юридической чистоты</li>
                <li>Помощь в оформлении документов</li>
                <li>Гарантия на наши услуги</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Этапы подбора автомобиля</h3>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Консультация и определение требований</strong>
                  <p>Выясняем ваши пожелания, бюджет и требования к автомобилю</p>
                </li>
                <li>
                  <strong>Поиск вариантов</strong>
                  <p>Анализируем рынок и отбираем наиболее подходящие варианты</p>
                </li>
                <li>
                  <strong>Первичная проверка</strong>
                  <p>Проверяем историю, документы и техническое состояние</p>
                </li>
                <li>
                  <strong>Полная диагностика</strong>
                  <p>Проводим детальную техническую проверку выбранного автомобиля</p>
                </li>
                <li>
                  <strong>Проверка документов</strong>
                  <p>Проверяем юридическую чистоту и историю владения</p>
                </li>
                <li>
                  <strong>Сопровождение сделки</strong>
                  <p>Помогаем с оформлением документов и проведением сделки</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Закажите подбор автомобиля прямо сейчас
          </h2>
          <p className="text-xl mb-8">
            Доверьте поиск автомобиля профессионалам
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
              href="https://wa.me/77474360975?text=Здравствуйте!%20Я%20по%20поводу%20подбора%20авто."
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

export default CarSelection;