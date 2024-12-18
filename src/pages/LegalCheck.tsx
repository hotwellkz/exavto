import React from 'react';
import { PhoneCall, Shield, FileCheck, AlertTriangle, Search, MessageCircle, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';

function LegalCheck() {
  return (
    <Layout>
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Онлайн проверка юридической чистоты авто
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Профессиональная проверка автомобиля на залоги, аресты и ограничения перед покупкой в Казахстане
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-green-400" />
              <span>Официальные базы данных</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileCheck className="w-6 h-6 text-green-400" />
              <span>Полный отчёт</span>
            </div>
            <div className="flex items-center space-x-2">
              <Search className="w-6 h-6 text-green-400" />
              <span>Проверка за 15 минут</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Комплексная проверка юридической чистоты автомобиля
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  Что мы проверяем
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Наличие залогов в банках</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Аресты и ограничения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>История регистрационных действий</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Проверка на угон</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Количество владельцев</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-yellow-500" />
                  Почему это важно
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-yellow-500 rounded-full"></span>
                    <span>Защита от мошенничества</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-yellow-500 rounded-full"></span>
                    <span>Предотвращение потери денег</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-yellow-500 rounded-full"></span>
                    <span>Избежание проблем с законом</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-yellow-500 rounded-full"></span>
                    <span>Уверенность в чистоте сделки</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Как происходит проверка
              </h3>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Сбор данных</strong>
                  <p>Проверяем VIN-код или гос.номер автомобиля по всем доступным базам данных</p>
                </li>
                <li>
                  <strong>Анализ информации</strong>
                  <p>Изучаем историю регистрационных действий и проверяем на обременения</p>
                </li>
                <li>
                  <strong>Формирование отчёта</strong>
                  <p>Составляем подробный отчёт о юридической чистоте автомобиля</p>
                </li>
                <li>
                  <strong>Консультация</strong>
                  <p>Предоставляем экспертное заключение и рекомендации</p>
                </li>
                <li>
                  <strong>Проверка утилизационного сбора</strong>
                  <p>Проверяем оплату утилизационного сбора и его актуальный статус</p>
                </li>
                <li>
                  <strong>Проверка таможенного оформления</strong>
                  <p>Проверяем корректность растаможки и все необходимые таможенные документы</p>
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
            Закажите проверку юридической чистоты
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
              href="https://wa.me/77474360975?text=Здравствуйте!%20Я%20по%20поводу%20проверки%20юридической%20чистоты%20авто."
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

export default LegalCheck;