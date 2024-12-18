import React from 'react';
import {
  Car,
  Wrench,
  Search,
  Shield,
  Gauge,
  Calculator,
  Laptop,
  FileSearch,
  CarFront,
  FileCheck,
  Bike
} from 'lucide-react';

export const services = [
  {
    title: 'Выездная диагностика',
    description: 'Профессиональная диагностика автомобиля с выездом в удобное для вас место',
    icon: <Car className="w-8 h-8" />
  },
  {
    title: 'Диагностика кузова',
    description: 'Тщательная проверка кузова на предмет аварий и восстановительных работ',
    icon: <CarFront className="w-8 h-8" />
  },
  {
    title: 'Проверка запчастей',
    description: 'Определение оригинальности установленных запчастей и их состояния',
    icon: <Wrench className="w-8 h-8" />
  },
  {
    title: 'Подлинность пробега',
    description: 'Проверка реального пробега автомобиля специальным оборудованием',
    icon: <Gauge className="w-8 h-8" />
  },
  {
    title: 'Проверка салона',
    description: 'Детальный осмотр состояния салона и его комплектации',
    icon: <Search className="w-8 h-8" />
  },
  {
    title: 'Эндоскопическая проверка',
    description: 'Визуальный осмотр труднодоступных мест с помощью эндоскопа',
    icon: <Search className="w-8 h-8" />
  },
  {
    title: 'Замер компрессии',
    description: 'Диагностика состояния двигателя путем замера компрессии',
    icon: <Calculator className="w-8 h-8" />
  },
  {
    title: 'Оценка авто',
    description: 'Профессиональная оценка рыночной стоимости автомобиля',
    icon: <Shield className="w-8 h-8" />
  },
  {
    title: 'Компьютерная диагностика',
    description: 'Полная диагностика электронных систем автомобиля',
    icon: <Laptop className="w-8 h-8" />
  },
  {
    title: 'Проверка VIN номера',
    description: 'Проверка подлинности VIN номера и истории автомобиля',
    icon: <FileSearch className="w-8 h-8" />
  },
  {
    title: 'Проверка ходовой',
    description: 'Диагностика подвески на профессиональном подъемнике',
    icon: <Wrench className="w-8 h-8" />
  },
  {
    title: 'Услуги такси',
    description: 'Встреча в аэропорту и трансфер по городу',
    icon: <Car className="w-8 h-8" />
  },
  {
    title: 'Юридическая проверка',
    description: 'Проверка на залоги, аресты, утиль сбор и юридическую чистоту',
    icon: <FileCheck className="w-8 h-8" />
  },
  {
    title: 'Проверка мототехники',
    description: 'Профессиональная диагностика мотоциклов и другой мототехники',
    icon: <Bike className="w-8 h-8" />
  }
];