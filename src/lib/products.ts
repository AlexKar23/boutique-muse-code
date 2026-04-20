// Catálogo placeholder de Trouble Makers Shop. Imágenes desde Unsplash (gratis).
export type Product = {
  slug: string;
  name: string;
  collection: string;
  price: number;
  oldPrice?: number;
  badge?: "Nuevo" | "Bestseller" | "Sale" | "Edición limitada";
  stock: number;
  images: string[];
  lifestyle: string[];
  description: string;
  materials: string;
  measurements: string;
};

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=80`;

export const products: Product[] = [
  {
    slug: "aretes-luna-creciente",
    name: "Aretes Luna Creciente",
    collection: "Colección Celeste",
    price: 18,
    oldPrice: 24,
    badge: "Bestseller",
    stock: 3,
    images: [
      u("photo-1535632787350-4e68ef0ac584"),
      u("photo-1611591437281-460bfbe1220a"),
      u("photo-1599643478518-a784e5dc4c8f"),
      u("photo-1602173574767-37ac01994b2a"),
    ],
    lifestyle: [u("photo-1581338834647-b0fb40704e21"), u("photo-1496217590455-aa63a8350eea")],
    description:
      "Pendientes de plata de ley con baño de oro de 18k. Inspirados en las noches del Mediterráneo, cada par se pule a mano en nuestro estudio de Pozuelo.",
    materials: "Plata 925 con baño de oro 18k. Hipoalergénico. Libre de níquel.",
    measurements: "1,8 cm de alto · 0,9 g por pendiente",
  },
  {
    slug: "anillo-ola-dorada",
    name: "Anillo Ola Dorada",
    collection: "Nueva Colección",
    price: 12,
    badge: "Nuevo",
    stock: 8,
    images: [u("photo-1605100804763-247f67b3557e"), u("photo-1603561596112-db542b9f9d8f")],
    lifestyle: [u("photo-1515562141207-7a88fb7ce338")],
    description:
      "Ajustable, ligero, perfecto para llevar todos los días. Su acabado mate captura la luz de forma única.",
    materials: "Latón con baño de oro 18k. Ajustable.",
    measurements: "Ancho: 4 mm",
  },
  {
    slug: "collar-perla-barroca",
    name: "Collar Perla Barroca",
    collection: "Edición Limitada",
    price: 22,
    badge: "Edición limitada",
    stock: 5,
    images: [u("photo-1599643477877-530eb83abc8e"), u("photo-1611652022419-a9419f74343d")],
    lifestyle: [u("photo-1521334884684-d80222895322")],
    description:
      "Cadena de plata 925 con perla cultivada de agua dulce. Cada perla es única, igual que tú.",
    materials: "Plata 925 + perla natural cultivada.",
    measurements: "Cadena 42 cm + extensor 5 cm",
  },
  {
    slug: "pulsera-trenza",
    name: "Pulsera Trenza Hilo",
    collection: "#TravelWithTrouble",
    price: 9,
    badge: "Nuevo",
    stock: 14,
    images: [u("photo-1611591437281-460bfbe1220a")],
    lifestyle: [u("photo-1490481651871-ab68de25d43d")],
    description: "Hilo encerado trenzado a mano con dije de plata. Resistente al agua.",
    materials: "Hilo encerado + dije de plata 925.",
    measurements: "Ajustable de 14 a 22 cm",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
