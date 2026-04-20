// Catálogo real de Trouble Makers Shop (troublemakershop.es) — imágenes scrapeadas
// con Firecrawl desde Shopify CDN. Las URLs son públicas y servidas con CORS.

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

// Imágenes editoriales / lifestyle reales de la home de Trouble Makers
export const lifestyleHeroes = {
  primary: "https://troublemakershop.es/cdn/shop/files/A9765489-CB11-4CEA-A179-4BFE40F71FCE_1200x.jpg?v=1744149222",
  secondary: "https://troublemakershop.es/cdn/shop/files/IMG_9247_51983162-ca8b-40bc-9e59-71014f6277dc_1200x.jpg?v=1727576255",
  tertiary: "https://troublemakershop.es/cdn/shop/files/IMG_9246_113c6df2-0ef4-4ea1-b457-cd44e4a8fa68_1200x.jpg?v=1727576253",
  brand: "https://troublemakershop.es/cdn/shop/files/IMG_9198_1200x.jpg?v=1712654197",
};

// Comunidad #TravelWithTrouble — fotos reales subidas por la marca
export const ugcImages = [
  "https://troublemakershop.es/cdn/shop/files/C38F8E38-7ED3-47BA-9CCF-8E52F354ECC7_1200x.jpg?v=1753036356",
  "https://troublemakershop.es/cdn/shop/files/59F9A192-451D-40D2-84C3-7493A2DF5A29_1200x.jpg?v=1753036356",
  "https://troublemakershop.es/cdn/shop/files/7741E31A-7B89-4836-BF43-A134F0B91CA7_1200x.jpg?v=1753036355",
  "https://troublemakershop.es/cdn/shop/files/D9EC6BA1-B3D8-42E9-9E8F-63F2CB15807B_1200x.jpg?v=1753036355",
  "https://troublemakershop.es/cdn/shop/files/6B6E8C4C-E4CE-4EF3-90DE-51AB41FF6163_1200x.jpg?v=1738430541",
  "https://troublemakershop.es/cdn/shop/files/BFBCFED3-9B3B-404B-8779-2086C2E39709_1200x.jpg?v=1738429922",
  "https://troublemakershop.es/cdn/shop/files/CD6B13A8-F2C6-4EDB-BDD5-3118DD4949FB_1200x.jpg?v=1738429861",
  "https://troublemakershop.es/cdn/shop/files/BF5032E5-814C-418C-A064-0C3FE035B8F0_1200x.jpg?v=1738429531",
];

export const products: Product[] = [
  {
    slug: "anillo-mandala",
    name: "Anillo Mandala",
    collection: "Anillos · Acero",
    price: 9,
    badge: "Bestseller",
    stock: 4,
    images: [
      "https://troublemakershop.es/cdn/shop/products/image_df5dc353-1de7-4e55-bfb2-b007c669d5f8_1200x.jpg?v=1611779286",
      "https://troublemakershop.es/cdn/shop/products/image_201fdb23-047c-4aae-b1c0-2b4aca9a1d13_1200x.jpg?v=1611779292",
      "https://troublemakershop.es/cdn/shop/products/image_0a51fc1b-8eb3-43a5-82cb-5f70386a6f6b_1200x.jpg?v=1615628037",
      "https://troublemakershop.es/cdn/shop/products/image_b712c641-ff71-48ce-b92e-8da0556a39d5_1200x.jpg?v=1611778870",
    ],
    lifestyle: [lifestyleHeroes.primary, lifestyleHeroes.secondary],
    description:
      "Anillo en acero quirúrgico con grabado tipo mandala. Resistente al agua y a los perfumes, perfecto para llevar todos los días sin que pierda brillo.",
    materials: "Acero inoxidable quirúrgico 316L. Hipoalergénico, no se oxida.",
    measurements: "Talla ajustable · Ancho 6 mm",
  },
  {
    slug: "anillo-ola",
    name: "Anillo Ola",
    collection: "Anillos · Plata 925",
    price: 12,
    oldPrice: 16,
    badge: "Nuevo",
    stock: 8,
    images: [
      "https://troublemakershop.es/cdn/shop/products/image_f883979c-9d3f-448d-ab20-fd3a7cd12b3a_1200x.jpg?v=1611778955",
      "https://troublemakershop.es/cdn/shop/products/image_bd30a634-7fa7-4698-812e-b522a78c148a_1200x.jpg?v=1611779656",
      "https://troublemakershop.es/cdn/shop/products/image_4d343b20-bee9-43d1-b1a1-728e8d1205d2_1200x.jpg?v=1611778667",
    ],
    lifestyle: [ugcImages[0], ugcImages[2]],
    description:
      "Anillo inspirado en las olas del Mediterráneo. Plata de ley con acabado mate, ligero y minimalista.",
    materials: "Plata de ley 925. Hipoalergénico.",
    measurements: "Tallas 12, 14, 16 · Ancho 4 mm",
  },
  {
    slug: "pendientes-conchas",
    name: "Pendientes Conchas",
    collection: "Pendientes",
    price: 14,
    badge: "Bestseller",
    stock: 3,
    images: [
      "https://troublemakershop.es/cdn/shop/products/RNI-Films-IMG-9564C1F3-82A0-4BB6-BC18-0D27CC05A548_1200x.jpg?v=1606247295",
      "https://troublemakershop.es/cdn/shop/products/8823ef22-46a6-47b8-bbda-ab0d719ce162_1200x.jpg?v=1606247295",
      "https://troublemakershop.es/cdn/shop/products/image_a2f45cee-f3a5-4924-b437-3ab10dad960b_1200x.jpg?v=1615027490",
    ],
    lifestyle: [ugcImages[3], ugcImages[5]],
    description:
      "Pendientes en forma de concha bañados en oro. Inspirados en el mar, ligeros y con cierre seguro tipo presión.",
    materials: "Latón con baño de oro 18k. Cierre de presión.",
    measurements: "1,5 cm de alto",
  },
  {
    slug: "colgante-cruz-brillante",
    name: "Colgante Cruz Brillante",
    collection: "Colgantes",
    price: 16,
    badge: "Edición limitada",
    stock: 5,
    images: [
      "https://troublemakershop.es/cdn/shop/products/RNI-Films-IMG-AAEA52DE-A8D1-43A5-8205-2F21E639DC77_1200x.jpg?v=1606565670",
      "https://troublemakershop.es/cdn/shop/products/RNI-Films-IMG-37AFDDA2-8E9E-413F-9EB6-6CC024CC1DD9_1200x.jpg?v=1606565670",
      "https://troublemakershop.es/cdn/shop/products/image_b3042d3d-ca9a-4cc3-baf1-85da96399795_1200x.jpg?v=1616434564",
    ],
    lifestyle: [ugcImages[1], ugcImages[4]],
    description:
      "Cadena fina con dije de cruz cubierta de circonitas brillantes. Pieza versátil que combina con todo tu fondo de joyero.",
    materials: "Plata 925 + circonitas. Cadena ajustable.",
    measurements: "Cadena 42 cm + extensor 5 cm",
  },
  {
    slug: "pendientes-aros-estrellas",
    name: "Pendientes Aros Estrellas",
    collection: "Pendientes · Gold",
    price: 12,
    badge: "Nuevo",
    stock: 9,
    images: [
      "https://troublemakershop.es/cdn/shop/products/RNI-Films-IMG-1E1BAA6C-AEDB-44C7-8531-1A2C940AE780_59674c22-aee3-4a50-8097-f03327857493_1200x.jpg?v=1606411623",
      "https://troublemakershop.es/cdn/shop/products/RNI-Films-IMG-7E1CDEB7-3C26-405D-8D9C-5D350B5DDDB7_1f840b09-ea36-4517-85b4-60d0894f805f_1200x.jpg?v=1606411623",
    ],
    lifestyle: [ugcImages[6]],
    description: "Aros dorados con dije de estrella. Tendencia atemporal para combinar con cualquier look.",
    materials: "Latón con baño de oro 18k.",
    measurements: "Aro 2 cm de diámetro",
  },
  {
    slug: "colgante-tigre",
    name: "Colgante Tigre",
    collection: "Colgantes",
    price: 14,
    badge: "Bestseller",
    stock: 6,
    images: [
      "https://troublemakershop.es/cdn/shop/products/RNI-Films-IMG-87CB2EF9-E94B-4EE7-A193-201C88A9175C2_1200x.jpg?v=1606561296",
    ],
    lifestyle: [ugcImages[7]],
    description: "Colgante de tigre, símbolo de fuerza y carácter. La pieza statement de la temporada.",
    materials: "Plata 925 con baño dorado.",
    measurements: "Cadena 45 cm · dije 2 cm",
  },
  {
    slug: "mini-aritos-piedras-fucsias",
    name: "Mini Aritos Piedras Fucsias",
    collection: "Mini Aritos",
    price: 8,
    badge: "Nuevo",
    stock: 12,
    images: [
      "https://troublemakershop.es/cdn/shop/products/image_92632c52-5cb8-4e7e-be2c-980e257b7a27_1200x.jpg?v=1615027243",
      "https://troublemakershop.es/cdn/shop/products/image_6cb3bd12-52d9-4a61-8f6a-a9ed2ab1bb2a_1200x.jpg?v=1615027253",
    ],
    lifestyle: [ugcImages[2]],
    description: "Mini aros de plata con piedras color fucsia. Perfectos para el segundo agujero o cartílago.",
    materials: "Plata 925 + piedras de cristal.",
    measurements: "0,8 cm de diámetro",
  },
  {
    slug: "mini-aritos-rayo",
    name: "Mini Aritos Rayo",
    collection: "Mini Aritos",
    price: 7,
    stock: 14,
    images: [
      "https://troublemakershop.es/cdn/shop/products/image_4fb3f5e5-4cc4-48df-8bd5-8bb4eba79581_1200x.jpg?v=1614894810",
    ],
    lifestyle: [ugcImages[5]],
    description: "Aritos diminutos con dije de rayo. Discretos pero con personalidad.",
    materials: "Plata 925.",
    measurements: "0,8 cm de diámetro",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
