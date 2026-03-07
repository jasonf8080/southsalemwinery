import { Wine, Store, MapPin, Grape, BottleWine } from "lucide-react"


const links = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  // { id: 'contact', label: 'Contact', path: '/contact' },
  { id: 'shop', label: 'Shop', path: '/shop' },
]


const aboutHighlights = [
  {
    id: 'collection',
    title: 'Carefully crafted wines',
    synopsis:
      'Small-batch wines thoughtfully produced to express the character of our vineyard and the land it grows from.',
    icon: Wine,
  },
  {
    id: 'tastings',
    title: 'Coming summer of 2024',
    synopsis:
      'Join us for intimate vineyard tastings designed to showcase our wines in a relaxed, welcoming setting.',
    icon: BottleWine,
  },
  {
    id: 'ny-made',
    title: 'Farm to bottle within NY',
    synopsis:
      'Proudly grown, harvested, and bottled in New York, honoring local agriculture and craftsmanship.',
    icon: Grape,
  },
]

 const wines = [
  {
    id: 'cabernet-franc-750',
    name: 'Cabernet Franc',
    variant: 'Red',
    volume: '750ml',
    price: 49.00,
    currency: 'USD',
    description:
      'An elegant red wine with notes of dark fruit and subtle spice, offering a refined and balanced finish.',
    image: '/images/Cabernet-Franc.png',
    inStock: true,
  },
  {
    id: 'cabernet-sauvignon-750',
    name: 'Cabernet Sauvignon',
    variant: 'Red',
    volume: '750ml',
    price: 49.00,
    currency: 'USD',
    description:
      'A bold and structured red wine showcasing rich fruit flavors and a smooth, lingering finish.',
    image: '/images/Cabernet-Sauvignon.png',
    inStock: true,
  },
  {
    id: 'malbec-750',
    name: 'Malbec',
    variant: 'Red',
    volume: '750ml',
    price: 49.00,
    currency: 'USD',
    description:
      'A full-bodied red wine with deep color, ripe fruit character, and a velvety mouthfeel.',
    image: '/images/Malbec.png',
    inStock: true,
  },
  {
    id: 'chardonnay-750',
    name: 'Chardonnay',
    variant: 'White',
    volume: '750ml',
    price: 49.00,
    currency: 'USD',
    description:
      'A crisp and expressive white wine with bright acidity and a clean, refreshing profile.',
    image: '/images/Chardonay.png',
    inStock: true,
  },
  {
    id: 'rose-pinot-noir-750',
    name: 'Rosé of Pinot Noir',
    variant: 'Rosé',
    volume: '750ml',
    price: 49.00,
    currency: 'USD',
    description:
      'A delicate rosé with fresh fruit notes and a bright, elegant finish.',
    image: '/images/Rose-of-Pinot-Noir-&-Petit-Verdot.png',
    inStock: true,
  },
  {
    id: 'rose-zwiegelt-750',
    name: 'Rosé of Zweigelt',
    variant: 'Rosé',
    volume: '750ml',
    price: 49.00,
    currency: 'USD',
    description:
      'A vibrant rosé offering crisp acidity and subtle fruit character, perfect for warm days.',
    image: '/images/Rose-of-Zwiegelt.png',
    inStock: true,
  },
]

 const aboutSections = [
  {
    title: "The story behind our winery",
    content:
      "We are a small family owned micro winery dedicated to making the best wine possible. We source our grapes primarily from small vineyards on the north fork of Long Island. We produce small batches of wine, using long fermentations, soft presses, and barrel aging and no added chemicals.",
    image: "/images/OurStory.jpeg",
    imageAlt: "Winery"
  },
  {
    title: "Meet the winemaker: John Vuolo",
    content:
      "I was born in NYC in 1965. I started making wine at the age of five with my father along with my grandfather and have never stopped making it since. As a young man I fell in love with the art and craft of making wine. I have been making wine for almost 30 years now and enjoy crafting small batches of NYS wine at my micro winery in South Salem NY.",
    image: "https://www.insidehook.com/wp-content/uploads/2022/09/napawinemaker.jpg",
    imageAlt: "Picture of winemaker John Vuolo"
  },
  {
    title: "Inside the barrel room",
    content:
      "All of our wines are crafted in-house, from fermentation to bottling, allowing us to carefully guide every step of the winemaking process and ensure each bottle reflects our standards of quality and character.",
    image: "https://barrelbuilders.com/wp-content/uploads/2022/10/wooden-barrels-in-the-wine-cellar-2022-02-04-05-10-06-utc-scaled.jpg",
    imageAlt: "South Salem Winery Barrel Room"
  },
  {
    title: "Orient Point Vineyrds North Fork of Long Island N.Y",
    content:
      "From the North Fork of Long Island, this coastal vineyard produces expressive grapes shaped by maritime climate. We source select wines here to showcase the region’s distinctive character.",
    image: "https://www.zillowstatic.com/bedrock/app/uploads/sites/11/Thumbnail-04ad89.jpg",
    imageAlt: "North Fork Vineyard"
  },
];




export {links, aboutHighlights, wines, aboutSections}