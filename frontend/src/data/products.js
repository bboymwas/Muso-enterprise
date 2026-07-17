const products = [
  {
    id: 1,
    name: 'Multipurpose Liquid Soap',
    category: 'Liquid Soap',
    description: 'A concentrated soap for homes, offices and commercial cleaning routines.',
    longDescription:
      'Crafted for customers who want reliable daily cleaning with a fresh finish. This liquid soap lifts stubborn grease and works beautifully across kitchens, bathrooms and general-purpose washing.',
    price: 350,
    sizes: ['500ml', '1L', '5L'],
    images: [
      'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80',
    ],
    features: ['Concentrated formula', 'Fresh citrus scent', 'Suitable for hand and surface cleaning'],
    benefits: ['Cuts through grease quickly', 'Economical refill option', 'Easy to store and use'],
  },
  {
    id: 2,
    name: 'Jik Bleach',
    category: 'Jik/Bleach',
    description: 'Powerful bleaching and disinfecting solution for hygienic spaces.',
    longDescription:
      'Ideal when a space needs strong disinfection and visible freshness. This bleach solution is a dependable staple for toilets, floors and high-touch surfaces.',
    price: 280,
    sizes: ['500ml', '1L', '5L'],
    images: [
      'https://images.unsplash.com/photo-1608571424352-9261a1e1e6f8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1615485291233-a0b4f52f8e7c?auto=format&fit=crop&w=900&q=80',
    ],
    features: ['Strong disinfectant action', 'Quick dilution', 'Excellent for sanitation routines'],
    benefits: ['Boosts hygiene standards', 'Easy to mix and apply', 'Fits routine facility upkeep'],
  },
  {
    id: 3,
    name: 'Hand Sanitizer Gel',
    category: 'Sanitizers',
    description: 'Refreshing sanitizer gel for quick protection throughout the day.',
    longDescription:
      'A fast, practical hand sanitizer that helps teams and households stay safe in busy environments. The smooth gel formula is easy to carry and apply regularly.',
    price: 220,
    sizes: ['250ml', '500ml'],
    images: [
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
    ],
    features: ['Portable bottle', 'Fast-dry formula', 'Gentle fragrance'],
    benefits: ['Supports daily hygiene', 'Convenient for travel', 'Trusted for busy workplaces'],
  },
  {
    id: 4,
    name: 'Toilet Cleaner',
    category: 'Soaps',
    description: 'Heavy-duty cleaner designed for toilets, sinks and stubborn stains.',
    longDescription:
      'A strong formula that handles limescale and tough deposits while remaining simple to apply. It gives facilities a fresh, polished finish after each routine clean.',
    price: 310,
    sizes: ['500ml', '1L'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    ],
    features: ['Targeted bathroom cleaning', 'Effective on mineral buildup', 'Easy squeeze bottle'],
    benefits: ['Improves presentation', 'Cuts cleaning effort', 'Ideal for regular maintenance'],
  },
  {
    id: 5,
    name: 'Floor Mop Kit',
    category: 'Cleaning Accessories',
    description: 'Complete mop set for neat, fast floor care in homes and offices.',
    longDescription:
      'This accessory kit combines practical reach and durability so staff and families can keep floors spotless with less effort. It is designed for frequent use and easy storage.',
    price: 1450,
    sizes: ['Standard', 'Premium'],
    images: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=900&q=80',
    ],
    features: ['Reusable mop head', 'Ergonomic handle', 'Easy rinse design'],
    benefits: ['Improves daily upkeep', 'Saves time', 'Built for repeated use'],
  },
  {
    id: 6,
    name: 'Disinfectant Spray',
    category: 'Sanitizers',
    description: 'A quick-spray disinfectant for counters, desks and shared surfaces.',
    longDescription:
      'Perfect for high-traffic spaces where safety needs to stay visible. The spray format makes it simple to cover surfaces in seconds without unnecessary mess.',
    price: 420,
    sizes: ['500ml', '1L'],
    images: [
      'https://images.unsplash.com/photo-1615486365801-d49c4f39700c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1581578017432-3f4a1d4f4f05?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1625042834276-7f5ab7e81ab7?auto=format&fit=crop&w=900&q=80',
    ],
    features: ['Rapid spray action', 'Fresh scent', 'Ideal for shared areas'],
    benefits: ['Supports hygiene compliance', 'Fast application', 'Keeps surfaces presentable'],
  },
]

export const OWNER_PHONE = '254724465988'

export default products
