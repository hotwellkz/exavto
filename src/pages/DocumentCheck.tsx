import React from 'react';
import { PhoneCall, FileCheck, Shield, CheckCircle, Search, MessageCircle, AlertTriangle, FileText } from 'lucide-react';
import Layout from '../components/Layout';

function DocumentCheck() {
  return (
    <Layout>
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Проверка документов авто в Алматы
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Профессиональная проверка документов и юридической чистоты автомобиля перед покупкой
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <FileCheck className="w-6 h-6 text-green-400" />
              <span>Полная проверка документов</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-green-400" />
              <span>Гарантия достоверности</span>
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
              Комплексная проверка документов автомобиля
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-green-500" />
                  Проверяемые документы
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Свидетельство о регистрации ТС</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Паспорт транспортного средства</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Договоры купли-продажи</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Таможенные документы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Сервисная документация</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-blue-500" />
                  Что проверяем
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Подлинность документов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>История регистраций</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Наличие ограничений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Нахождение в розыске</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Таможенный статус</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Процесс проверки документов
              </h3>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Проверка подлинности</strong>
                  <p>Экспертиза документов на подлинность и соответствие стандартам</p>
                </li>
                <li>
                  <strong>Проверка по базам</strong>
                  <p>Проверка по официальным базам данных МВД и таможни</p>
                </li>
                <li>
                  <strong>История владения</strong>
                  <p>Анализ истории владельцев и регистрационных действий</p>
                </li>
                <li>
                  <strong>Проверка ограничений</strong>
                  <p>Проверка на наличие залогов, арестов и ограничений</p>
                </li>
                <li>
                  <strong>Утилизационный сбор</strong>
                  <p>Проверка оплаты и статуса утилизационного сбора</p>
                </li>
                <li>
                  <strong>Таможенное оформление</strong>
                  <p>Проверка корректности таможенного оформления и документации</p>
                </li>
              </ol>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-6 h-6 text-yellow-500" />
                  <h4 className="text-lg font-semibold text-yellow-800">Важно знать</h4>
                </div>
                <p className="text-yellow-800">
                  Проверка документов - критически важный этап при покупке автомобиля. 
                  Это поможет избежать проблем с законом и финансовых потерь в будущем.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Закажите проверку документов
          </h2>
          <p className="text-xl mb-8">
            Защитите себя от мошенничества при покупке автомобиля
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
              href="https://wa.me/77474360975?text=Здравствуйте!%20Я%20по%20поводу%20проверки%20документов%20авто."
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

export default DocumentCheck;