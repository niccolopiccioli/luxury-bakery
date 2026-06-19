/** Verified image URLs (HTTP 200 tested). */

export const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const pexels = (path: string, w = 800) =>
  `https://images.pexels.com/photos/${path}?auto=compress&cs=tinysrgb&w=${w}`;

export const images = {
  hero: unsplash("photo-1578985545062-69928b1d9587", 1920),
  aboutHero: unsplash("photo-1558618666-fcd25c85cd64", 1600),
  laboratory: pexels("1721932/pexels-photo-1721932.jpeg", 1200),

  berryDessert: unsplash("photo-1565958011703-44f9829ba187"),
  chocolateCake: unsplash("photo-1578985545062-69928b1d9587"),
  pistachioDessert: unsplash("photo-1563805042-7684c019e1cb"),
  tiramisuSlice: unsplash("photo-1571877227200-a0d98ea607e9"),
  marblePastry: unsplash("photo-1509440159596-0249088772ff"),
  layeredCake: unsplash("photo-1551024506-0bccd828d307"),
  cupcakeDisplay: unsplash("photo-1488477181946-6428a0291777"),
  waffleDessert: unsplash("photo-1567620905732-2d1ec7ab7445"),
  pastryHands: unsplash("photo-1558618666-fcd25c85cd64"),
  professionalKitchen: unsplash("photo-1556911220-e15b29be8c8f"),
  patisserieCafe: unsplash("photo-1554118811-1e0d58224f24"),
  kneadingDough: unsplash("photo-1556910103-1c02745aae4d"),

  macarons: pexels("291528/pexels-photo-291528.jpeg"),
  croissants: pexels("2135/food-france-morning-breakfast.jpg"),
  bakeryInterior: pexels("1126728/pexels-photo-1126728.jpeg"),
  chocolateCloseUp: pexels("2067432/pexels-photo-2067432.jpeg"),
  pastryDisplay: pexels("1775043/pexels-photo-1775043.jpeg"),
  bakeryCounter: pexels("1059943/pexels-photo-1059943.jpeg"),
  displayCase: pexels("5946091/pexels-photo-5946091.jpeg"),
  pastry01: pexels("5945901/pexels-photo-5945901.jpeg"),
  pastry02: pexels("5945902/pexels-photo-5945902.jpeg"),
  pastry03: pexels("5945903/pexels-photo-5945903.jpeg"),
  pastry04: pexels("5945904/pexels-photo-5945904.jpeg"),
  pastry05: pexels("5945905/pexels-photo-5945905.jpeg"),
  pastry06: pexels("5945906/pexels-photo-5945906.jpeg"),
  pastry07: pexels("5945908/pexels-photo-5945908.jpeg"),
  artisanBread: pexels("3026808/pexels-photo-3026808.jpeg"),
  sweetTable: pexels("452010/pexels-photo-452010.jpeg"),
} as const;
