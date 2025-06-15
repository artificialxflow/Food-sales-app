import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5 border-top">
      <div className="container">
        <div className="row align-items-start gy-4">
          {/* Brand & Description */}
          <div className="col-md-5 text-end">
            <div className="d-flex align-items-center gap-2 mb-2 justify-content-end">
              <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" alt="لوگو" width="32" height="32" style={{marginLeft: 8}} />
              <span className="fw-bold fs-5">فروش B2B</span>
            </div>
            <p className="small mb-0">
              پلتفرم فروشگاهی B2B با ثبت‌نام کنترل‌شده، قیمت‌گذاری اختصاصی و اعتبار داخلی برای کسب‌وکارها. تجربه خرید امن و حرفه‌ای برای مشتریان سازمانی.
            </p>
          </div>
          {/* Quick Links */}
          <div className="col-md-4 text-end">
            <h6 className="fw-bold mb-3">لینک‌های سریع</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">درباره ما</a></li>
              <li className="mb-2"><a href="#products" className="text-light text-decoration-none">محصولات</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">تماس با ما</a></li>
            </ul>
          </div>
          {/* Contact Info (Short) */}
          <div className="col-md-3 text-end">
            <h6 className="fw-bold mb-3">ارتباط سریع</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">تلفن: 021-12345678</li>
              <li className="mb-2">ایمیل: info@b2bshop.ir</li>
              <li>تهران، خیابان مثال</li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <div className="text-center small text-secondary">
          © {new Date().getFullYear()} فروش B2B - تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
} 