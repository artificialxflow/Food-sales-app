import React from 'react';

export default function HowToPage() {
  return (
    <main className="container py-5" dir="rtl">
      <h1 className="h4 fw-bold mb-4 text-primary text-end">نحوه همکاری با ما</h1>
      <p className="mb-5 text-end text-muted">برای پیوستن به پلتفرم فروشگاهی B2B و بهره‌مندی از امکانات ویژه، کافیست مراحل زیر را دنبال کنید:</p>
      <ol className="list-group list-group-numbered mb-5 text-end">
        <li className="list-group-item border-0 ps-0">تماس با تیم فروش و ارسال درخواست همکاری</li>
        <li className="list-group-item border-0 ps-0">بررسی و تایید اطلاعات کسب‌وکار توسط ادمین</li>
        <li className="list-group-item border-0 ps-0">دریافت نام کاربری و رمز عبور اختصاصی</li>
        <li className="list-group-item border-0 ps-0">ورود به پنل مشتری و مشاهده قیمت‌های ویژه</li>
        <li className="list-group-item border-0 ps-0">ثبت سفارش و مدیریت اعتبار داخلی</li>
      </ol>
      <div className="alert alert-info text-end">در صورت نیاز به راهنمایی بیشتر، با پشتیبانی تماس بگیرید.</div>
    </main>
  );
} 