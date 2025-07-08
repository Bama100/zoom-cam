import Header from '../../components/Header';
import Footer from '../../components/Footer';

const products = [
  { id: 1, name: 'كاميرا مراقبة', image: '/camera.jpg', price: '1500 EGP', desc: 'أحدث كاميرا بدقة عالية' },
  { id: 2, name: 'جهاز إنذار', image: '/alarm.jpg', price: '1200 EGP', desc: 'نظام حماية متكامل' },
  { id: 3, name: 'Access Control', image: '/access.jpg', price: '1800 EGP', desc: 'بوابة تحكم ذكي' },
  { id: 4, name: 'كابلات وأكسسوارات', image: '/cables.jpg', price: '350 EGP', desc: 'جميع أنواع الكابلات' },
];

export default function Products() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto py-10 px-4 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-10">منتجات Zoom Cam</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.desc}</p>
                <p className="text-blue-900 font-bold mb-4">{product.price}</p>
                <button className="w-full py-2 bg-blue-900 text-white rounded hover:bg-blue-700">أطلب الآن</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
