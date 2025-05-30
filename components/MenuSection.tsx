
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [ 'All','New','Fusion', 'Fruit', 'Chocolate', 'Classic'];

 const menuItems = [
  {
    id: 1,
    image: '/images/1.avif',
    name: 'SALTED CARAMEL CRUNCH (Gelato)',
    description:
      'Silky salted caramel gelato loaded with golden , crunchy honeycomb pieces.  (Contains milk and soy. May contain cereal, peanuts, tree nuts  )',
    category:'New',
  },
  {
    id: 2,
   image: '/images/1.avif',
    name: 'BLUEBERRY CHEESECAKE (Gelato)',
    description:
      'Creamy cheesecake gelato swirled with exotic blueberries and new york style cheeseckae bites. (Contains milk and soy. May contain cereal and nuts)',
    category:'New',
  },
  {
    id: 3,
    image: '/images/1.avif',
    name: 'COTTON CANDY BURST (Gelato)',
    description:
      'Tri-coloured cotton candy gelato with popping candy! (Contains milk and soy. May contain cereal and nuts)',
    category:'New',
  },
  {
    id: 4,
   image: '/images/1.avif',
    name: 'ALPHANSO MANGO',
    description: 'Delicious alphanso mango icecream made with alphanso mango pulp and titbits. (Contains milk) ',
    category:'Fruit',
  },
  {
    id:5,
   image: '/images/1.avif',
    name:'MINT MILK CHOCOLATE CHIPS',
    description:'An ice cream that tells the mint and chocolate love story like no other. (Contains milk and soy)',
    category:'Chocolate',
  },
  {
    id:6,
   image: '/images/1.avif',
    name:'BELGIAN BLISS',
    description:'Belgian chocolate ice cream loaded with caramel confectionery and cookies. (Contains milk, wheat and soy)',
    category:'Chocolate',
  },
    {
    id:7,
    image: '/images/1.avif',
    name:'SHOOTING STAR',
    description:'Blueberry merged with vanilla ice cream cherry confectionery , coloured sugar strands and popping candy. (Contains milk)',
    category:'Fruit',
  },
    {
    id:8,
   image: '/images/1.avif',
    name:'BLACK CURRANT',
    description:'Black currant flavoured ice cream loaded with black currant and raisins. (Contains Milk)',
    category:'Chocolate',
  },
    {
    id:9,
    image: '/images/1.avif',
    name:'SPLISH SPALSH',
    description:'Celesital low fat ice cream with raspberry and blueberry. (Contains milk)',
    category:'Fruit',
  },
    {
    id:10,
    image: '/images/1.avif',
    name:'BANANA AND STRAWBERRY',
    description:'Ice cream with real banana, strawberry pieces and a strawberry confectionery. (Contains milk) ',
    category:'Fruit',
  },
    {
    id:11,
    image: '/images/1.avif',
    name:'VERY BERRY STRAWBERRY',
    description:'Exquisite strawberry ice creams with strawberry pieces. (Contains milk)',
    category:'Fruit',
  },
    {
    id:12,
   image: '/images/1.avif',
    name:'FRUIT OVERLOAD',
    description:'Orange flavored ice cream adorned with exotic fruit chunks and jelly. (Contains milk)',
    category:'Fruit',
  },
    {
    id:13,
    image: '/images/1.avif',
    name:'FERRERO MOMENTS MOUSSE',
    description:'A rich hazelnut chocolate mousse ice cream swirled with chocolate ribbon and adorned with crushed ferrero moments. (Contains milk, cereal (wheat), nut (hazelnut) and soy)',
    category:'Chocolate',
  },
    {
    id:14,
    image: '/images/1.avif',
    name:'BAVARIAN CHOCOLATE',
    description:'Bavarian chocolate ice cream adorned with chocolate pieces and caramelized crunchy cashews. (Contains milk, nut (cashew) and soy)',
    category:'Chocolate',
  },
    {
    id:15,
    image: '/images/1.avif',
    name:'MOUSSE ROYALE',
    description:'Mischievous chocolate chips playing peekaboo with chocolate mousse ice cream. (Contains milk and soy!)',
    category:'Chocolate',
  },
    {
    id:16,
    image: '/images/1.avif',
    name:'PRALINES AND CREAM',
    description:'Vanilla ice cream decorated wit pecan pralines and delicate caramel confectionary. (Contains milk and tree nuts (pecan))',
    category:'Fusion',
  },
    {
    id:17,
    image: '/images/1.avif',
    name:'MISSISSIPPI MUD',
    description:'Delectable chocolate fudge ice cream with fudge confectionery and sprinkled with brownie cake pieces. (Contains milk, wheat and soy)',
    category:'Chocolate',
  },
    {
    id:18,
    image: '/images/1.avif',
    name:'ROASTED COFFEE CRÈME',
    description:'Creamy and luscious ice cream with freshly ground coffee. (Contains milk)',
    category:'Cocoa',
  },
    {
    id:19,
    image: '/images/1.avif',
    name:'DUTCH CHOCOLATE',
    description:'Tempting rich chocolate ice cream with a distinct hint of cocoa. (Contains milk)',
    category:'Cocoa',
  },
    {
    id:20,
    image: '/images/1.avif',
    name:'GOLD MEDAL RIBBON',
    description:'Flavorful fusion of vanilla and chocolate flavoured ice cream with luscious caramel. (Contains milk)',
    category:'Fusion',
  },
    {
    id:21,
    image: '/images/1.avif',
    name:'CHOCOLATE ALMOND PRALINE',
    description:'Delicious dark chocolate ice cream loaded with praline coated almonds. (Contains milk and tree nuts (almond))',
    category:'chocolate',
  },
    {
    id:22,
    image: '/images/1.avif',
    name:'NAUGHTY NUTELLA',
    description:'Heavenly nutella ice cream made with velvety nutella paste and premium chocolate. (Contains milk, tree nut (hazelnut) and soy. May contain cereal)',
     category:'chocolate',
  },
    {
    id:23,
    image: '/images/1.avif',
    name:'CRUNCHY HONEYCOMB',
    description:'Gourmet salted caramel ice crearn with crunchy golden honeycomb and exotic almond butter ribbon. (Contains milk, nuts (almond), and soy. May contain cereal)',
    category:'Fruit'
  },
    {
    id:24,
    image: '/images/1.avif',
    name:'BLUEBERRY AND WHITE CHOCOLATE',
    description:'Exotic blend of white chocolate ice cream with sweet blueberries, a purple scoop of joy! (Contains milk and soy)',
    category:'Fusion',
  },
    {
    id:25,
    description:'Vanilla flavoured ice cream swirled with butterscotch flavoured confectionary. (Contains milk)',
    name:'BUTTERSCOTCH RIBBON',
    image: '/images/1.avif',
    category:'Fusion',
  },
    {
    id:26,
   image: '/images/1.avif',
    name:'HONEY NUT CRUNCH',
    description:'Delicious ice cream with caramel and honey almond pralines. (Contains milk and tree nuts (almond))',
    category:'Fusion',
  },
    {
    id:27,
   image: '/images/1.avif',
    name:'COOKIES AND CREAM',
    description:'Premium vanilla ice cream adorned with cookie crumble. (Contains milk and wheat)',
    category:'Chocolate',
  },
    {
    id:28,
   image: '/images/1.avif',
    name:'VANILLA',
    description:'Mimeless and heavenly rich vanilla ice cream. (Contains milk)',
    category:'Classic',
  },
    {
    id:29,
   image: '/images/1.avif',
    name:'HOP SCOTCH BUTTERSCOTCH',
    description:'Butterscotch flavoured ice cream with butterscotch confectionery and cashew crunch. (Contains milk and tree nuts (cashew))',
    category:'Classic',
  },
    {
    id:30,
    image: '/images/1.avif',
    name:'ROASTED CALIFORNIAN ALMOND',
    description:'Vanilla ice cream with caramel confectionery and almond praline. (Contains milk and tree nuts (almond))',
    category:'Fusion',  
  },
   {
    id:31,
    image: '/images/1.avif',
    name:'THREE CHEERS CHOCOLATE',
    description:'',
    category:'chocolate',
  },
   {
    id:32,
    image: '/images/1.avif',
    name:'CALIFORNIA PISTACHIO',
    description:'Exquisite california pistachio ice cream made with authentic nutty pistachio paste and a hint of caramel. (Contains milk and tree nuts (pista and hazelnut))',
    category:'New',
  },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory]);

  const toggleExpand = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-[#2d2e32] tracking-tight">
        🍨 Premium Ice Cream Collection
      </h2>

      {/* Category Filter */}
      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 border backdrop-blur-md border-gray-300/40 shadow-sm hover:shadow-md ${
              activeCategory === cat
                ? 'bg-pink-500 text-white'
                : 'bg-white/40 text-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
  <AnimatePresence>
    {filteredItems.map((item, idx) => (
      <motion.div
        key={item.id}
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, delay: idx * 0.02 }}
        className="cursor-pointer bg-white/60 backdrop-blur-xl shadow-xl rounded-3xl p-4 flex items-start gap-4 hover:scale-[1.01] transition-transform duration-300 border border-white/30"
        onClick={() => setSelectedItem(item)}
      >
        {/* Image: 30% width */}
        <div className="w-[30%] min-w-[80px] aspect-square rounded-full overflow-hidden relative shadow-md">
          <Image
            src={item.image || '/images/placeholder.jpg'}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Text: 70% width */}
        <div className="flex-1 flex flex-col justify-between">
          <h3 className="text-md font-bold text-gray-800 leading-snug mb-1">
            {item.name}
          </h3>
          <p className="text-sm text-gray-600">
            {expandedItems.includes(item.id)
              ? item.description
              : `${item.description?.slice(0, 80)}...`}
            {item.description?.length > 80 && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpand(item.id);
                }}
                className="text-pink-500 cursor-pointer text-xs ml-1 inline-block"
              >
                {expandedItems.includes(item.id) ? 'Show less' : 'Read more'}
              </span>
            )}
          </p>
        </div>
      </motion.div>
    ))}
  </AnimatePresence>
</div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full text-center"
            >
              <div className="relative w-48 h-48 mx-auto rounded-lg overflow-hidden mb-4">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {selectedItem.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {selectedItem.description}
              </p>
              <button
                onClick={() => setSelectedItem(null)}
                className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-full shadow-md hover:shadow-lg transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}