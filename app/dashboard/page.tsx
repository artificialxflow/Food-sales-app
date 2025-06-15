import React from 'react';

export default function Dashboard() {
  return (
    <main className="container py-5">
      {/* Dashboard Welcome Section */}
      <div className="row mb-4 justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-sm border-0 text-end bg-primary bg-opacity-10 p-4 mb-3">
            <div className="d-flex align-items-center gap-3 mb-2">
              <span className="fs-2">💼</span>
              <h1 className="h4 fw-bold text-primary mb-0">داشبورد مشتری</h1>
            </div>
            <p className="mb-0 text-muted">این پنل اصلی شما برای مدیریت سفارش‌ها، مشاهده قیمت‌های اختصاصی <span className="mx-1">📦</span>، اعتبار داخلی <span className="mx-1">🏦</span> و سوابق <span className="mx-1">📊</span> است.</p>
          </div>
        </div>
      </div>
      {/* Get Started Section */}
      <div className="row mb-4 justify-content-center">
        <div className="col-lg-10">
          <div className="alert alert-info d-flex align-items-center gap-3 text-end">
            <span className="fs-3">🚀</span>
            <div>
              <div className="fw-bold mb-1">از اینجا شروع کنید!</div>
              <div className="small">برای ثبت اولین سفارش، ابتدا اعتبار خود را بررسی کنید و سپس از بخش ثبت سفارش اقدام نمایید.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-4 mb-4">
        {/* Welcome Card */}
        <div className="col-lg-8 order-2 order-lg-1">
          <div className="card shadow-sm border-0 text-end h-100">
            <div className="card-body">
              <h5 className="card-title mb-2">خوش آمدید، علی رضایی!</h5>
              <p className="card-text text-muted mb-0">به پنل کاربری خود خوش آمدید. از اینجا می‌توانید سفارش ثبت کنید، موجودی کیف پول را مشاهده کنید و سوابق سفارشات خود را ببینید.</p>
            </div>
          </div>
        </div>
        {/* Wallet Balance */}
        <div className="col-lg-4 order-1 order-lg-2">
          <div className="card shadow-sm border-0 text-end bg-primary bg-opacity-10 h-100">
            <div className="card-body">
              <span className="fw-bold d-block mb-2">موجودی کیف پول</span>
              <div className="fs-3 fw-bold text-primary mb-2">۲۵,۰۰۰,۰۰۰ ریال</div>
              <a href="#" className="btn btn-outline-primary btn-sm">درخواست افزایش اعتبار</a>
            </div>
          </div>
        </div>
      </div>
      {/* Quick Links */}
      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <a href="#" className="card shadow-sm border-0 text-end text-decoration-none h-100 p-3">
            <div className="card-body p-0 d-flex flex-column align-items-end">
              <div className="fw-bold mb-1">ثبت سفارش جدید</div>
              <div className="text-muted small mb-2">سریع و آسان سفارش دهید</div>
              <div className="fs-2 ms-2"><i className="bi bi-cart-plus"></i></div>
            </div>
          </a>
        </div>
        <div className="col-md-3">
          <a href="#" className="card shadow-sm border-0 text-end text-decoration-none h-100 p-3">
            <div className="card-body p-0 d-flex flex-column align-items-end">
              <div className="fw-bold mb-1">سوابق سفارشات</div>
              <div className="text-muted small mb-2">مشاهده و پیگیری سفارش‌ها</div>
              <div className="fs-2 ms-2"><i className="bi bi-box-seam"></i></div>
            </div>
          </a>
        </div>
        <div className="col-md-3">
          <a href="#" className="card shadow-sm border-0 text-end text-decoration-none h-100 p-3">
            <div className="card-body p-0 d-flex flex-column align-items-end">
              <div className="fw-bold mb-1">پروفایل کاربری</div>
              <div className="text-muted small mb-2">ویرایش اطلاعات شخصی</div>
              <div className="fs-2 ms-2"><i className="bi bi-person"></i></div>
            </div>
          </a>
        </div>
        <div className="col-md-3">
          <a href="#" className="card shadow-sm border-0 text-end text-decoration-none h-100 p-3">
            <div className="card-body p-0 d-flex flex-column align-items-end">
              <div className="fw-bold mb-1">ارتباط با پشتیبانی</div>
              <div className="text-muted small mb-2">ارسال پیام یا درخواست</div>
              <div className="fs-2 ms-2"><i className="bi bi-chat-dots"></i></div>
            </div>
          </a>
        </div>
      </div>
      {/* Recent Orders Table */}
      <div className="card shadow-sm border-0 text-end">
        <div className="card-body">
          <h5 className="card-title mb-3">آخرین سفارشات</h5>
          <div className="table-responsive">
            <table className="table table-striped align-middle text-end" dir="rtl">
              <thead>
                <tr>
                  <th>کد سفارش</th>
                  <th>تاریخ</th>
                  <th>مبلغ</th>
                  <th>وضعیت</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12345</td>
                  <td>1403/03/10</td>
                  <td>۵,۰۰۰,۰۰۰ ریال</td>
                  <td><span className="badge bg-success">تکمیل شده</span></td>
                </tr>
                <tr>
                  <td>12344</td>
                  <td>1403/02/28</td>
                  <td>۲,۵۰۰,۰۰۰ ریال</td>
                  <td><span className="badge bg-warning text-dark">در انتظار تایید</span></td>
                </tr>
                <tr>
                  <td>12343</td>
                  <td>1403/02/20</td>
                  <td>۳,۰۰۰,۰۰۰ ریال</td>
                  <td><span className="badge bg-danger">رد شده</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Pricing Plan Section */}
      <div className="row g-4 mb-4">
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 text-end h-100">
            <div className="card-body">
              <h5 className="card-title mb-3">پلن قیمتی مشتری</h5>
              <p className="text-muted small mb-3">در این بخش قیمت‌های ویژه شما برای برخی محصولات نمایش داده می‌شود:</p>
              <div className="table-responsive">
                <table className="table table-bordered text-end mb-0">
                  <thead>
                    <tr>
                      <th>محصول</th>
                      <th>قیمت اختصاصی شما</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>برنج ایرانی</td>
                      <td>۴۵,۰۰۰ ریال</td>
                    </tr>
                    <tr>
                      <td>روغن مایع</td>
                      <td>۳۵,۰۰۰ ریال</td>
                    </tr>
                    <tr>
                      <td>شکر سفید</td>
                      <td>۲۵,۰۰۰ ریال</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Wallet Section */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 text-end h-100 bg-info bg-opacity-10">
            <div className="card-body">
              <h5 className="card-title mb-3">اعتبار داخلی (کیف پول)</h5>
              <div className="mb-2">موجودی فعلی: <span className="fw-bold text-info">۲۵,۰۰۰,۰۰۰ ریال</span></div>
              <div className="mb-2">اعتبار مصرف‌شده این ماه: <span className="fw-bold text-danger">۵,۰۰۰,۰۰۰ ریال</span></div>
              <div className="mb-3">اعتبار اولیه شما: <span className="fw-bold">۳۰,۰۰۰,۰۰۰ ریال</span></div>
              <button className="btn btn-outline-info btn-sm">درخواست افزایش اعتبار</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 