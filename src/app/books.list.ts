import { BooksInterface } from './books.interface';

export const BOOKS: BooksInterface[] = [
  {
    id: 1,
    author: 'Лаймен Фрэнк Баум',
    category: 'fantasy',
    published: new Date('17.05.1900'),
    title: 'Удивительный волшебник из страны Оз',
    desc: '«Удивительный Волшебник из Страны Оз» — ' +
      'детская книга американского писателя Лаймена Фрэнка Баума, вышедшая в свет в 1900 году.',
    price: 478,
    old_price: 520,
    left: 20,
  },
]
