export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-4 shadow">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Zoom Cam 📷</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/">الرئيسية</a></li>
            <li><a href="/products">المنتجات</a></li>
            <li><a href="/services">طلب صيانة</a></li>
            <li><a href="/contact">اتصل بنا</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
