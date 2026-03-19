export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Аромат «Нуар»",
    description: "Глубокий восточный парфюм с нотами уда, амбры и чёрной орхидеи. Стойкость 24 часа.",
    price: 18900,
    category: "Парфюм",
    image: "https://cdn.poehali.dev/projects/37331b1f-a794-4b1c-80b2-cc0e8648fbbf/files/76a36dfc-f63d-42c4-a96c-84e60b690c1f.jpg",
    badge: "Новинка"
  },
  {
    id: 2,
    name: "Шёлковый платок «Эдем»",
    description: "100% натуральный шёлк, ручная роспись. Авторский дизайн с флоральными мотивами.",
    price: 12500,
    category: "Аксессуары",
    image: "https://cdn.poehali.dev/projects/37331b1f-a794-4b1c-80b2-cc0e8648fbbf/files/76a36dfc-f63d-42c4-a96c-84e60b690c1f.jpg",
  },
  {
    id: 3,
    name: "Браслет «Золотой век»",
    description: "Браслет из 18-каратного золота с бриллиантами огранки багет. Ручная работа.",
    price: 89000,
    category: "Ювелирные украшения",
    image: "https://cdn.poehali.dev/projects/37331b1f-a794-4b1c-80b2-cc0e8648fbbf/files/76a36dfc-f63d-42c4-a96c-84e60b690c1f.jpg",
    badge: "Лимитированный"
  },
  {
    id: 4,
    name: "Крем «Vélours»",
    description: "Ночной крем с экстрактом чёрной икры и 24-каратным золотом. Интенсивное омоложение.",
    price: 34500,
    category: "Уход за кожей",
    image: "https://cdn.poehali.dev/projects/37331b1f-a794-4b1c-80b2-cc0e8648fbbf/files/76a36dfc-f63d-42c4-a96c-84e60b690c1f.jpg",
  },
  {
    id: 5,
    name: "Портмоне «Артизан»",
    description: "Портмоне из кожи крокодила ручной выделки. Классический дизайн, 8 отделений.",
    price: 45000,
    category: "Аксессуары",
    image: "https://cdn.poehali.dev/projects/37331b1f-a794-4b1c-80b2-cc0e8648fbbf/files/76a36dfc-f63d-42c4-a96c-84e60b690c1f.jpg",
    badge: "Бестселлер"
  },
  {
    id: 6,
    name: "Свеча «Монако»",
    description: "Соевый воск, аромат жасмина и сандалового дерева. Время горения — 80 часов.",
    price: 6800,
    category: "Декор",
    image: "https://cdn.poehali.dev/projects/37331b1f-a794-4b1c-80b2-cc0e8648fbbf/files/76a36dfc-f63d-42c4-a96c-84e60b690c1f.jpg",
  },
];

export const categories = ["Все", "Парфюм", "Аксессуары", "Ювелирные украшения", "Уход за кожей", "Декор"];
