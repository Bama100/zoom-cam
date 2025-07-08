import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">مرحبًا بك في Zoom Cam</h1>
        <p className="text-lg text-gray-600">أفضل حلول الأنظمة الأمنية والمراقبة الحديثة</p>
      </main>
      <Footer />
    </>
  );
}
