import React from 'react';

export default function OrderPage() {
  return (
    <main className="container py-5" dir="rtl">
      <h1 className="h4 fw-bold mb-4 text-primary text-end">ثبت سفارش جدید</h1>
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="card shadow-sm border-0 text-end">
            <div className="card-body">
              <form>
                {/* Product Selection */}
                <div className="mb-4">
                  <label className="form-label fw-bold">انتخاب محصول</label>
                  <select className="form-select text-end" required>
                    <option value="">یک محصول را انتخاب کنید...</option>
                    <option value="1">تجهیزات صنعتی</option>
                    <option value="2">لوازم اداری</option>
                    <option value="3">سخت‌افزار فناوری</option>
                  </select>
                </div>
                {/* Quantity */}
                <div className="mb-4">
                  <label className="form-label fw-bold">تعداد</label>
                  <input type="number" className="form-control text-end" min="1" defaultValue="1" required />
                </div>
                {/* Price Display */}
                <div className="mb-4">
                  <label className="form-label fw-bold">قیمت کل</label>
                  <div className="fs-5 fw-bold text-primary">۵,۰۰۰,۰۰۰ ریال</div>
                </div>
                {/* Wallet Balance */}
                <div className="mb-4">
                  <label className="form-label fw-bold">موجودی کیف پول شما</label>
                  <div className="fs-6 fw-bold text-success">۲۵,۰۰۰,۰۰۰ ریال</div>
                </div>
                {/* Submit Button */}
                <div className="text-end">
                  <button type="submit" className="btn btn-primary px-5">ثبت سفارش</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 