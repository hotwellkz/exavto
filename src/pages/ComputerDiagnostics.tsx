import React from 'react';
import { PhoneCall, Laptop, Shield, CheckCircle, Wrench, MessageCircle, Settings, Gauge, AlertTriangle } from 'lucide-react';
import Layout from '../components/Layout';

function ComputerDiagnostics() {
  return (
    <Layout>
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Компьютерная диагностика автомобиля в Алматы
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Профессиональная диагностика электронных систем автомобиля с использованием современного оборудования x431 pro v3
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Laptop className="w-6 h-6 text-green-400" />
              <span>Современное оборудование</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-green-400" />
              <span>Гарантия качества</span>
            </div>
            <div className="flex items-center space-x-2">
              <Settings className="w-6 h-6 text-green-400" />
              <span>Все марки авто</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Профессиональная компьютерная диагностика
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
                    <span>Система управления двигателем</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>ABS и система безопасности</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Подушки безопасности</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Трансмиссия и АКПП</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Климат-контроль</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Gauge className="w-6 h-6 text-blue-500" />
                  Преимущества диагностики
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Выявление скрытых неисправностей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Предотвращение серьезных поломок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Экономия на ремонте</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    <span>Точное определение проблем</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Процесс компьютерной диагностики
              </h3>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Подключение оборудования</strong>
                  <p>Подключаем профессиональный сканер x431 pro v3 к диагностическому разъему автомобиля</p>
                </li>
                <li>
                  <strong>Считывание данных</strong>
                  <p>Получаем информацию о состоянии всех электронных систем автомобиля</p>
                </li>
                <li>
                  <strong>Анализ ошибок</strong>
                  <p>Проверяем наличие ошибок в системах и их причины</p>
                </li>
                <li>
                  <strong>Тестирование систем</strong>
                  <p>Проводим активное тестирование работы различных систем</p>
                </li>
                <li>
                  <strong>Заключение</strong>
                  <p>Предоставляем подробный отчет о состоянии автомобиля и рекомендации</p>
                </li>
              </ol>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-6 h-6 text-yellow-500" />
                  <h4 className="text-lg font-semibold text-yellow-800">Важно знать</h4>
                </div>
                <p className="text-yellow-800">
                  Регулярная компьютерная диагностика помогает выявить проблемы на ранней стадии и предотвратить дорогостоящий ремонт. Рекомендуется проводить диагностику каждые 15,000 км пробега или при появлении первых признаков неисправности.
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
            Закажите компьютерную диагностику
          </h2>
          <p className="text-xl mb-8">
            Профессиональная диагностика на современном оборудовании
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
              href="https://wa.me/77474360975?text=Здравствуйте!%20Я%20по%20поводу%20компьютерной%20диагностики%20авто."
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

export default ComputerDiagnostics;