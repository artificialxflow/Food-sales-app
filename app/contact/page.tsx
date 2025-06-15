import React from 'react';

export default function ContactPage() {
  return (
    <main className="container py-5" dir="rtl">
      <h1 className="h4 fw-bold mb-4 text-primary text-end">تماس با ما</h1>
      <p className="mb-5 text-end text-muted">برای ارتباط با تیم پشتیبانی یا ارسال درخواست همکاری، فرم زیر را تکمیل کنید.</p>
      <form className="mx-auto" style={{maxWidth:500}}>
        <div className="mb-3 text-end">
          <label htmlFor="name" className="form-label">نام و نام خانوادگی</label>
          <input type="text" className="form-control text-end" id="name" placeholder="نام شما" />
        </div>
        <div className="mb-3 text-end">
          <label htmlFor="phone" className="form-label">شماره تماس</label>
          <input type="tel" className="form-control text-end" id="phone" placeholder="مثلاً ۰۹۱۲۱۲۳۴۵۶۷" />
        </div>
        <div className="mb-3 text-end">
          <label htmlFor="message" className="form-label">پیام شما</label>
          <textarea className="form-control text-end" id="message" rows={4} placeholder="متن پیام..."></textarea>
        </div>
        <div className="text-end">
          <button type="submit" className="btn btn-primary px-4" disabled>ارسال پیام</button>
        </div>
      </form>
    </main>
  );
} 