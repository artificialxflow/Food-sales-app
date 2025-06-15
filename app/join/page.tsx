import React from 'react';

export default function JoinPage() {
  return (
    <main className="container py-5" dir="rtl">
      <h1 className="h4 fw-bold mb-4 text-primary text-end">درخواست همکاری</h1>
      <div className="alert alert-warning text-end mb-4">
        ثبت‌نام در این پلتفرم فقط توسط ادمین انجام می‌شود و امکان ثبت‌نام مستقیم وجود ندارد.
      </div>
      <p className="mb-4 text-end text-muted">در صورتی که تمایل به همکاری و دریافت دسترسی دارید، لطفاً با تیم پشتیبانی تماس بگیرید یا فرم تماس با ما را تکمیل نمایید.</p>
      <div className="text-end">
        <a href="/contact" className="btn btn-primary px-4">ارتباط با پشتیبانی</a>
      </div>
    </main>
  );
} 