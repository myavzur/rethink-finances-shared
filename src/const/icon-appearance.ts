import {ValueOf} from "../types";

export const IconAppearance = {
  // Базовые
  DEFAULT: 'default',
  FAVORITE: 'favorite',
  RECENT: 'recent',
  STARRED: 'starred',
  ARCHIVED: 'archived',

  // Работа и продуктивность
  WORK: 'work',
  MEETING: 'meeting',
  PROJECT: 'project',
  DEADLINE: 'deadline',
  URGENT: 'urgent',

  // Личная жизнь
  PERSONAL: 'personal',
  FAMILY: 'family',
  HOME: 'home',
  PETS: 'pets',

  // Покупки и финансы
  SHOPPING: 'shopping',
  GROCERIES: 'groceries',
  FINANCE: 'finance',
  BILLS: 'bills',

  // Здоровье и спорт
  HEALTH: 'health',
  EXERCISE: 'exercise',
  MEDICAL: 'medical',
  FITNESS: 'fitness',

  // Образование и развитие
  EDUCATION: 'education',
  LEARNING: 'learning',
  BOOKS: 'books',
  RESEARCH: 'research',

  // Путешествия и транспорт
  TRAVEL: 'travel',
  CAR: 'car',
  FLIGHT: 'flight',
  VACATION: 'vacation',

  // Еда и рестораны
  FOOD: 'food',
  RESTAURANT: 'restaurant',
  COFFEE: 'coffee',
  COOKING: 'cooking',

  // Развлечения
  ENTERTAINMENT: 'entertainment',
  MOVIES: 'movies',
  MUSIC: 'music',
  GAMING: 'gaming',

  // Технологии
  TECH: 'tech',
  CODE: 'code',
  PHONE: 'phone',
  COMPUTER: 'computer',

  // Природа и outdoors
  NATURE: 'nature',
  WEATHER: 'weather',
  GARDEN: 'garden',
  OUTDOORS: 'outdoors',

  // Социальное
  SOCIAL: 'social',
  FRIENDS: 'friends',
  EVENT: 'event',
  PARTY: 'party',

  // Творчество
  ART: 'art',
  DESIGN: 'design',
  PHOTOGRAPHY: 'photography',
  WRITING: 'writing'
} as const;

export type IIconAppearance = ValueOf<typeof IconAppearance>;