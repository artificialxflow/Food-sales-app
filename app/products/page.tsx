import React from 'react';

const products = [
  { id: 1, name: 'برنج ایرانی', desc: 'برنج ممتاز شمال مناسب رستوران‌ها و فروشگاه‌ها', img: '/placeholder.png' },
  { id: 2, name: 'روغن مایع', desc: 'روغن سرخ‌کردنی مخصوص مصارف عمده', img: '/placeholder.png' },
  { id: 3, name: 'شکر سفید', desc: 'شکر تصفیه‌شده با کیفیت عالی', img: '/placeholder.png' },
  { id: 4, name: 'رب گوجه‌فرنگی', desc: 'رب گوجه‌فرنگی غلیظ و خوش‌طعم', img: '/placeholder.png' },
  { id: 5, name: 'چای سیاه', desc: 'چای سیاه عطری مخصوص پذیرایی', img: '/placeholder.png' },
  { id: 6, name: 'عدس درجه یک', desc: 'عدس پاک‌شده و بسته‌بندی شده', img: '/placeholder.png' },
  { id: 7, name: 'ماکارونی', desc: 'ماکارونی رشته‌ای مخصوص فروش عمده', img: '/placeholder.png' },
  { id: 8, name: 'کنسرو لوبیا', desc: 'کنسرو لوبیا با کیفیت و قیمت مناسب', img: '/placeholder.png' },
];

export default function ProductsPage() {
  return (
    <main className="container py-5" dir="rtl">
      <h1 className="h4 fw-bold mb-4 text-primary text-end">محصولات ما</h1>
      <p className="mb-5 text-end text-muted">در این بخش می‌توانید برخی از محصولات قابل عرضه را مشاهده کنید. برای دریافت لیست کامل و قیمت‌ها، وارد پنل مشتری شوید.</p>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-3 col-sm-6" key={product.id}>
            <div className="card h-100 shadow-sm border-0 text-end">
              <img src={product.img} alt={product.name} className="card-img-top bg-light" style={{height:180, objectFit:'contain'}} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text small">{product.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 