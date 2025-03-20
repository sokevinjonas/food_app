import { Product } from '../interfaces/product.interface';

export const products: Product[] = [
  // Gâteaux
  {
    id: 13,
    name: 'Gâteau au Chocolat',
    description:
      "Notre Gâteau au Chocolat est un chef-d'œuvre décadent composé de couches de génoise au chocolat moelleuse et d'un glaçage crémeux. Parfaitement sucré et riche, c'est un délice pour les amateurs de chocolat et une pièce maîtresse pour les célébrations. Savourez l'indulgence du cacao premium à chaque bouchée.",
    rating: 4.5,
    image: 'assets/products/chocolate-cake.jpg',
    category_id: 5,
    seller_id: 2,
    default_price: 15000,
    cut_price: 30000,
    type: 'veg',
    varieties: [
      { id: 7, unit: 'Kg', quantity: 0.5, price: 9000, is_default: false },
      { id: 8, unit: 'Kg', quantity: 1, price: 15000, is_default: true },
      { id: 9, unit: 'Kg', quantity: 1.5, price: 21000, is_default: false },
      { id: 10, unit: 'Kg', quantity: 2, price: 30000, is_default: false },
      { id: 11, unit: 'Kg', quantity: 4, price: 57000, is_default: false },
    ],
  },
  {
    id: 15,
    name: 'Forêt-Noire',
    type: 'veg',
    description:
      "Notre Forêt-Noire est un classique intemporel avec des couches de génoise au chocolat moelleuse, des cerises et de la crème fouettée fraîche. Surmonté de copeaux de chocolat et de cerises, c'est une véritable symphonie de saveurs et de textures. Idéal pour les célébrations ou pour combler vos envies sucrées.",
    rating: 4.8,
    image: 'assets/products/black_forest_cake.jpg',
    category_id: 5,
    seller_id: 2,
    default_price: 21000,
    cut_price: 90000,
    varieties: [
      { id: 17, unit: 'Kg', quantity: 0.5, price: 15000, is_default: false },
      { id: 18, unit: 'Kg', quantity: 1, price: 21000, is_default: true },
      { id: 19, unit: 'Kg', quantity: 1.5, price: 27000, is_default: false },
      { id: 20, unit: 'Kg', quantity: 2, price: 36000, is_default: false },
      { id: 21, unit: 'Kg', quantity: 4, price: 69000, is_default: false },
    ],
  },
  {
    id: 14,
    name: 'Gâteau Red Velvet',
    type: 'non-veg',
    description:
      "Le Gâteau Red Velvet est un dessert luxueux avec une texture veloutée et une touche de cacao. Recouvert d'un glaçage crémeux au fromage frais légèrement acidulé, c'est le choix idéal pour les grandes occasions. Sa couleur rouge vibrante et son goût raffiné en font un plaisir pour les yeux et le palais.",
    rating: 4.7,
    image: 'assets/products/red_velvet_cake.jpg',
    category_id: 5,
    seller_id: 2,
    default_price: 18000,
    cut_price: 90000,
    varieties: [
      { id: 12, unit: 'Kg', quantity: 0.5, price: 12000, is_default: false },
      { id: 13, unit: 'Kg', quantity: 1, price: 18000, is_default: true },
      { id: 14, unit: 'Kg', quantity: 1.5, price: 27000, is_default: false },
      { id: 15, unit: 'Kg', quantity: 2, price: 36000, is_default: false },
      { id: 16, unit: 'Kg', quantity: 4, price: 69000, is_default: false },
    ],
  },

  // Cupcakes
  {
    id: 1,
    name: 'Cupcake à la Vanille',
    description:
      "Notre Cupcake à la Vanille est une gourmandise exquise composée d'une génoise moelleuse à la vanille et d'un tourbillon de glaçage crémeux. Parfait pour satisfaire vos envies sucrées, il est préparé avec les meilleurs extraits de vanille. Une expérience fondante en bouche à chaque bouchée.",
    rating: 4.3,
    image: 'assets/products/vanilla-cupcake.jpg',
    category_id: 1,
    seller_id: 1,
    default_price: 9000,
    cut_price: 18000,
    type: 'veg',
    varieties: [
      { id: 1, unit: 'Pièce', quantity: 1, price: 9000, is_default: true },
    ],
  },
  {
    id: 3,
    name: 'Cupcake au Chocolat',
    type: 'non-veg',
    description:
      "Savourez notre Cupcake au Chocolat, préparé avec du cacao de première qualité et recouvert d'un riche glaçage au chocolat. Son équilibre parfait entre douceur et intensité en fait un incontournable pour les amateurs de chocolat. Un plaisir à déguster à toute occasion.",
    rating: 4.7,
    image: 'assets/products/chocolate-cupcake.jpg',
    category_id: 1,
    seller_id: 1,
    default_price: 12000,
    cut_price: 30000,
    varieties: [
      { id: 2, unit: 'Pièce', quantity: 1, price: 12000, is_default: true },
    ],
  },

  // Donuts
  {
    id: 7,
    name: 'Donut Glacé',
    type: 'non-veg',
    description:
      "Notre Donut Glacé est une douceur moelleuse enrobée d'une couche brillante de glaçage sucré. L'équilibre parfait entre texture et saveur, il est préparé frais chaque jour pour une expérience irrésistible. Dégustez-le avec un café ou seul, à tout moment de la journée.",
    rating: 4.7,
    image: 'assets/products/glazed_donut.jpg',
    category_id: 3,
    seller_id: 2,
    default_price: 4800,
    cut_price: 9000,
    varieties: [
      { id: 3, unit: 'Pièce', quantity: 1, price: 4800, is_default: true },
    ],
  },
  {
    id: 8,
    name: 'Donut au Chocolat et Vermicelles',
    type: 'veg',
    description:
      "Ce Donut au Chocolat et Vermicelles est un régal pour les yeux et le palais. Il est composé d'une base moelleuse, d'une couche de glaçage au chocolat riche et d'une généreuse garniture de vermicelles colorés. Un snack parfait pour tous les âges et toutes les occasions.",
    rating: 4.9,
    image: 'assets/products/chocolate_sprinkled_donut.jpg',
    category_id: 3,
    seller_id: 2,
    default_price: 6000,
    varieties: [
      { id: 4, unit: 'Pièce', quantity: 1, price: 6000, is_default: true },
    ],
  },
];
