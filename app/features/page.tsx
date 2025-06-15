import React from 'react';

export default function FeaturesPage() {
  return (
    <main className="container py-5" dir="rtl">
      <h1 className="h4 fw-bold mb-4 text-primary text-end">امکانات پلتفرم</h1>
      <p className="mb-5 text-end text-muted">در این بخش با مهم‌ترین ویژگی‌ها و امکانات پلتفرم فروشگاهی B2B ما آشنا می‌شوید.</p>
      <div className="row g-4 justify-content-center">
        <div className="col-md-4 col-sm-6">
          <div className="card h-100 shadow-sm border-0 text-end">
            <div className="card-body">
              <div className="mb-3 fs-2">🔒</div>
              <h5 className="card-title">ثبت‌نام فقط توسط ادمین</h5>
              <p className="card-text">امنیت و کنترل کامل روی ورود کاربران و مشتریان جدید.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card h-100 shadow-sm border-0 text-end">
            <div className="card-body">
              <div className="mb-3 fs-2">💰</div>
              <h5 className="card-title">قیمت‌گذاری اختصاصی</h5>
              <p className="card-text">هر مشتری فقط قیمت‌های ویژه خود را مشاهده می‌کند.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card h-100 shadow-sm border-0 text-end">
            <div className="card-body">
              <div className="mb-3 fs-2">💳</div>
              <h5 className="card-title">سیستم اعتبار داخلی</h5>
              <p className="card-text">خرید سریع و آسان با اعتبار داخلی و مدیریت موجودی.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card h-100 shadow-sm border-0 text-end">
            <div className="card-body">
              <div className="mb-3 fs-2">⚡</div>
              <h5 className="card-title">سفارش‌گذاری سریع</h5>
              <p className="card-text">ثبت سفارش فقط روی محصولات تعریف‌شده برای هر مشتری.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card h-100 shadow-sm border-0 text-end">
            <div className="card-body">
              <div className="mb-3 fs-2">🛡️</div>
              <h5 className="card-title">امنیت و محرمانگی</h5>
              <p className="card-text">دسترسی و اطلاعات هر مشتری کاملاً محرمانه و اختصاصی.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card h-100 shadow-sm border-0 text-end">
            <div className="card-body">
              <div className="mb-3 fs-2">📊</div>
              <h5 className="card-title">گزارش‌گیری و سوابق</h5>
              <p className="card-text">مشاهده سوابق سفارش و اعتبار باقیمانده به صورت شفاف.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6" id="pricing-plan">
          <div className="card h-100 shadow-sm border-0 text-end">
            <div className="card-body">
              <div className="mb-3 fs-2">📦</div>
              <h5 className="card-title">پلن قیمتی مخصوص هر مشتری</h5>
              <p className="card-text">هر مشتری فقط قیمت‌های مختص خودش را مشاهده می‌کند و پلن قیمتی ویژه خود را دارد.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6" id="wallet">
          <div className="card h-100 shadow-sm border-0 text-end">
            <div className="card-body">
              <div className="mb-3 fs-2">🏦</div>
              <h5 className="card-title">اعتبار اولیه و مدیریت اعتبار</h5>
              <p className="card-text">در زمان ثبت‌نام اعتبار اولیه دریافت می‌کنید و با هر خرید از آن کم می‌شود. امکان درخواست افزایش اعتبار نیز وجود دارد.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 