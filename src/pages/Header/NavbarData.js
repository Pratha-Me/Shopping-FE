
const DATA = [
  {
    title: "Men's",
    items: [
      {
        title: "Men's Clothing",
        item: [
          {
            title: 'T-Shirts',
          },
          {
            title: 'Shirts',
          },
          {
            title: 'Jeans, Pants & Shorts',
          },
          {
            title: 'Trousers & Chinos',
          },
          {
            title: 'Coats & Blazers',
          },
          {
            title: 'Sweater & Jackets',
          },
          {
            title: 'Hoodies & Sweatshirts',
          },
          {
            title: 'Rain Coats & Trenches',
          },
          {
            title: 'Seasonal & Winter',
          },
          {
            title: 'Cloths',
          },
          {
            title: 'Swimwear & Innerwear',
          },
        ],
      },
      {
        title: "Men's Accessories",
        item: [
          {
            title: 'Skin and Body Care',
          },
          {
            title: 'Hair Care',
          },
          {
            title: "Men's Grooming",
          },
          {
            title: 'Perfume & Roll On',
          },
          {
            title: 'Watches',
          },
          {
            title: 'Sunglasses',
          },
          {
            title: 'Trimmer',
          },
          {
            title: 'Bags',
          },
          {
            title: 'Wallets',
          },
          {
            title: 'Gloves & Belts',
          },
        ],
      },
      {
        title: "Men's Footwear",
        item: [
          {
            title: 'Formal Shoes',
          },
          {
            title: 'Casual & Sports Shoes',
          },
          {
            title: 'Sandals & Slippers',
          },
          {
            title: 'Boots',
          },
          {
            title: 'Socks',
          },
          {
            title: 'Shoe Polish',
          },
        ],
      },
    ],
  },
  {
    title: "Women's",
    items: [
      {
        title: "Women's Clothing",
        item: [
          {
            title: 'Dresses, Skirs & Shorts',
          },
          {
            title: 'Shirts, T-Shirts & Tops',
          },
          {
            title: 'Traditional Wear',
          },
          {
            title: 'Pant & Trousers',
          },
          {
            title: 'Kurtha & kurtis',
          },
          {
            title: 'Hoodies & Sweatshirts',
          },
          {
            title: 'Sweater & Woolen',
          },
          {
            title: 'Cloths',
          },
          {
            title: 'Jackets & Coats',
          },
          {
            title: 'Thermal Wear',
          },
        ],
      },
      {
        title: "Women's Accessories",
        item: [
          {
            title: 'Beauty Care',
          },
          {
            title: "Skin & Body Care",
          },
          {
            title: 'Hair Care',
          },
          {
            title: 'Make Up & Accessories',
          },
          {
            title: 'Deodrants & Pefumes',
          },
          {
            title: 'Watches For Women',
          },
          {
            title: 'Sunglasses',
          },
          {
            title: 'Gloves',
          },
          {
            title: 'Women\'s Hygiene',
          },
        ],
      },
      {
        title: "Women's Footwear",
        item: [
          {
            title: 'Boots',
          },
          {
            title: 'Casual & Sports Shoes',
          },
          {
            title: 'Flats, Sandals & Slippers',
          },
          {
            title: 'Formal Shoes',
          },
          {
            title: 'Heels & Wedges',
          },
          {
            title: 'Socks',
          },
        ],
      },
      {
        title: "Lingeries & Sleepwear",
        item: [
          {
            title: 'Bras',
          },
          {
            title: 'Panties',
          },
          {
            title: 'Shape Wear',
          },
          {
            title: 'Women\'s Swimwear',
          },
        ],
      },
      {
        title: "Women's Bag & Purse",
        item: [
          {
            title: 'Party Clutch',
          },
          {
            title: 'Shoulder Bags',
          },
        ],
      },

      {
        title: "Women's Fashion",
        item: [
          {
            title: 'Jewellery',
          },
        ],
      },
    ],
  },
  {
    title: 'Kids',
    items: [
      {
        title: "Kid's Essentials",
        item: [
          {
            title: 'Clothing',
          },
          {
            title: "Kid's Toys and Games",
          },
          {
            title: 'Footwear & Socks',
          },
        ],
      },
      {
        title: "Boy's & Girl's Clothing",
        item: [
          {
            title: 'Jackets, Coats & SweatShirts',
          },
          {
            title: 'Dress & Skirt',
          },
          {
            title: 'Jeans, Shorts & Trousers',
          },
          {
            title: 'T-Shirts & Closets',
          },
          {
            title: 'Baby Clothing & Closets',
          },
          {
            title: 'Kids Swimwear',
          },
          {
            title: 'Winter Wear',
          },
        ],
      },
      {
        title: 'Baby Care',
        item: [
          {
            title: 'Baby Safety',
          },
          {
            title: 'Baby Personal Care',
          },
          {
            title: 'Baby Bedding',
          },
          {
            title: 'Baby Feeding',
          },
          {
            title: 'Diapers, Wipers & Baths',
          },
          {
            title: "Baby's Momma Care",
          },
        ],
      },
      {
        title: "Kid's Watches",
        item: [
          {
            title: "Boy's Watches",
          },
          {
            title: "Girl's Watches",
          },
        ],
      },
    ],
  },
  {
    title: "Electronics",
    items: [
      {
        title: "Mobile Phone & Tablet",
        item: [
          {
            title: 'Apple',
          },
          {
            title: 'Xiaomi & MI',
          },
          {
            title: 'Samsung',
          },
          {
            title: 'Diamond',
          },
        ],
      },
      {
        title: "Mobile Accessories",
        item: [
          {
            title: 'Earphone & Headphones',
          },
          {
            title: "Memory Cards",
          },
          {
            title: 'Portable Power Banks',
          },
          {
            title: 'Mobile Covers & Cases',
          },
          {
            title: 'Selfie Stick & Stand',
          },
          {
            title: 'Smart Watches & Gadgets',
          },
          {
            title: 'Charger & USB',
          },
          {
            title: 'Cables',
          },
        ],
      },
      {
        title: "Laptop & Desktop",
        item: [
          {
            title: 'MSI',
          },
          {
            title: 'Apple',
          },
          {
            title: 'Acer',
          },
          {
            title: 'Dell',
          },
          {
            title: 'Lenovo',
          },
          {
            title: 'HP',
          },
          {
            title: 'Assembled PC',
          },
          {
            title: 'Branded PC & Server',
          },
        ],
      },
      {
        title: "Computer Accessories",
        item: [
          {
            title: 'Monitor',
          },
          {
            title: 'Keyboard & Mouse',
          },
          {
            title: 'Printer Scanner Copier',
          },
          {
            title: 'Software & Subscriptions',
          },
          {
            title: 'Laptop Bag',
          },
          {
            title: 'Storage Devices',
          },
          {
            title: 'Router & Networking Accessories',
          },
          {
            title: 'Pen Drive',
          },
        ],
      },
      {
        title: "Audio & Video",
        item: [
          {
            title: 'Television',
          },
          {
            title: 'TV Accessories',
          },
          {
            title: 'Cameras & Lenses',
          },
          {
            title: 'Speaker & Woofer',
          },
          {
            title: 'Projector',
          },
          {
            title: 'MIC',
          },
        ],
      },

      {
        title: "Home & Office Automation",
        item: [
          {
            title: 'Dry Cell Battery',
          },
          {
            title: 'Accessories',
          },
        ],
      },
    ],
  },
  {
    title: 'Grocery',
    items: [
      {
        title: "Grocery",
        item: [
          {
            title: 'Oil & Cooking',
          },
          {
            title: "Rice & Flour",
          },
          {
            title: 'Lentils, Beans & Pulses',
          },
          {
            title: 'Pasta & Noodles',
          },
          {
            title: "Spices",
          },
          {
            title: 'Home Banking & Premix',
          },
          {
            title: 'Oil & Cooking Ingredients',
          },
          {
            title: "Sauce & Seasoning",
          },
          {
            title: 'Achar & Pickles',
          },
          {
            title: 'Cammed Food',
          },
          {
            title: "Jam Spreads & Honey",
          },
          {
            title: 'Breakfast & Cereals',
          },
        ],
      },
      {
        title: "Farm Fresh",
        item: [
          {
            title: 'Vegetables',
          },
          {
            title: 'Fruits',
          },
          {
            title: 'Local Eggs',
          },
          {
            title: 'Local Chicken',
          },
        ],
      },
      {
        title: 'Frozen Food & Meat',
        item: [
          {
            title: 'Frozen Meat',
          },
          {
            title: 'Frozen Food',
          },
        ],
      },
      {
        title: "Fresh Cake",
        item: [
          {
            title: "Cheese Cake",
          },
          {
            title: "Red Velvet Cake",
          },
        ],
      },
    ],
  },
  {
    title: 'Bakery',
    items: [
      {
        title: "Bakery",
        item: [
          {
            title: 'Cakes',
          },
          {
            title: "Cheese Cakes",
          },
          {
            title: 'Doughnouts',
          },
          {
            title: 'Pastery',
          },
          {
            title: 'Popcorn',
          },
          {
            title: 'Chips & Bhujiya',
          },
          {
            title: 'Biscuits & Cookies',
          },
          {
            title: 'Pops',
          },
          {
            title: 'Bread',
          },
          {
            title: 'Muffins',
          },
          {
            title: 'Chocolates & Confectionery',
          },
          {
            title: 'Sweets & Namkeen',
          },
          {
            title: 'Juice',
          },
          {
            title: 'Ready To Eat Snacks',
          },
        ],
      },
    ],
  },
  {
    title: 'Cleaniness & Hygine',
    items: [
      {
        title: "Cleaniness & Hygine",
        item: [
          {
            title: 'Air Freshners',
          },
          {
            title: "Wipes & Tissues",
          },
          {
            title: 'Oral Care',
          },
          {
            title: 'Detergent & Dish',
          },
          {
            title: 'Washing',
          },
          {
            title: 'Cleaning & Disinfected',
          },
          {
            title: 'After Shave',
          },
          {
            title: 'Maks',
          },
          {
            title: 'Hair Comb',
          },
          {
            title: 'Sanitary Pads',
          },
          {
            title: 'Hand Sanitizer',
          },
          {
            title: 'Soap, Shampoo & Conditioner',
          },
        ],
      },
    ],
  },
];

export default DATA;
