export default function Home() {
  return (
    <main className="container py-5">
      {/* Hero Section */}
      <section className="row align-items-center mb-5">
        <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0 text-end">
          <h1 className="display-4 fw-bold mb-3">
            پلتفرم فروش B2B اختصاصی<br />
            <span className="text-primary">با قیمت‌گذاری ویژه</span>
          </h1>
          <p className="lead mb-4">
            تجربه فروش B2B با ثبت‌نام کنترل‌شده توسط ادمین، قیمت‌گذاری شخصی‌سازی‌شده، سیستم اعتبار داخلی و فرآیند سفارش‌دهی سریع و امن.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-end align-items-center mb-3">
            <a href="#join" className="btn btn-primary btn-lg px-4">درخواست عضویت</a>
            <a href="#contact" className="btn btn-outline-primary btn-lg px-4">تماس با تیم فروش</a>
          </div>
          <div className="d-flex flex-wrap gap-3 justify-content-end align-items-center mt-3">
            <span className="badge bg-light text-dark fw-normal border px-3 py-2">ثبت‌نام فقط توسط ادمین</span>
            <span className="badge bg-light text-dark fw-normal border px-3 py-2">قیمت‌گذاری اختصاصی</span>
            <span className="badge bg-light text-dark fw-normal border px-3 py-2">سفارش آسان</span>
          </div>
        </div>
        <div className="col-lg-6 order-lg-1 text-center">
          <div className="bg-white rounded-4 shadow p-3 p-lg-4 d-inline-block position-relative">
            <img
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&fit=crop&w=600&q=80"
              alt="جلسه کسب‌وکار B2B"
              className="img-fluid rounded-3 shadow"
              style={{maxHeight: 320, minWidth: 260}}
            />
            {/* Floating Cards */}
            <div className="position-absolute top-0 start-0 bg-white rounded-3 shadow px-3 py-2 d-flex align-items-center gap-2" style={{transform: 'translate(-30%,-50%)'}}>
              <span className="badge bg-success rounded-circle" style={{width: 10, height: 10}}></span>
              <span className="small text-secondary">پشتیبانی ۲۴/۷</span>
            </div>
            <div className="position-absolute bottom-0 end-0 bg-white rounded-3 shadow px-3 py-2 d-flex align-items-center gap-2" style={{transform: 'translate(30%,30%)'}}>
              <span className="badge bg-primary rounded-circle" style={{width: 10, height: 10}}></span>
              <span className="small text-secondary">پلتفرم امن</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mb-5">
        <h2 className="h3 fw-bold mb-4 text-primary text-center">ویژگی‌های کلیدی پلتفرم</h2>
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
        </div>
      </section>

      {/* How to Get Started Section */}
      <section id="how" className="mb-5">
        <h2 className="h4 fw-bold mb-4 text-center text-primary">مراحل شروع همکاری</h2>
        <div className="row justify-content-center mb-4">
          <div className="col-lg-10">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
              {/* Step 1 */}
              <div className="text-center flex-fill">
                <div className="bg-primary bg-opacity-10 text-primary rounded-circle mx-auto mb-2" style={{width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32}}>
                  📝
                </div>
                <div className="fw-bold">ارسال درخواست</div>
                <div className="text-muted small">فرم درخواست عضویت را تکمیل و ارسال کنید.</div>
              </div>
              {/* Arrow */}
              <div className="d-none d-md-block" style={{fontSize: 32}}>&larr;</div>
              {/* Step 2 */}
              <div className="text-center flex-fill">
                <div className="bg-primary bg-opacity-10 text-primary rounded-circle mx-auto mb-2" style={{width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32}}>
                  👨‍💼
                </div>
                <div className="fw-bold">بررسی توسط ادمین</div>
                <div className="text-muted small">ادمین اطلاعات شما را بررسی و تایید می‌کند.</div>
              </div>
              {/* Arrow */}
              <div className="d-none d-md-block" style={{fontSize: 32}}>&larr;</div>
              {/* Step 3 */}
              <div className="text-center flex-fill">
                <div className="bg-primary bg-opacity-10 text-primary rounded-circle mx-auto mb-2" style={{width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32}}>
                  🔑
                </div>
                <div className="fw-bold">دسترسی به حساب کاربری</div>
                <div className="text-muted small">پس از تایید، اطلاعات ورود برای شما ارسال می‌شود.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a href="#join" className="btn btn-outline-primary btn-lg px-5">شروع فرآیند عضویت</a>
        </div>
      </section>

      {/* Product Categories Section */}
      <section id="products" className="mb-5">
        <h2 className="h4 fw-bold mb-4 text-center text-primary">دسته‌بندی محصولات</h2>
        <p className="text-center text-muted mb-4">با تنوعی از محصولات صنعتی، اداری و فناوری، هر دسته با قیمت‌گذاری اختصاصی و ویژه برای هر مشتری ارائه می‌شود.</p>
        <div className="row g-4 justify-content-center">
          {/* Category 1 */}
          <div className="col-md-4 col-sm-6">
            <div className="card h-100 shadow-sm border-0 text-end">
              <img src="https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg?auto=compress&fit=crop&w=400&q=80" className="card-img-top" alt="تجهیزات صنعتی" style={{height:180,objectFit:'cover'}} />
              <div className="card-body">
                <h5 className="card-title">تجهیزات صنعتی</h5>
                <p className="card-text small text-muted">انواع ماشین‌آلات و تجهیزات صنعتی با قیمت ویژه همکاری.</p>
                <a href="#" className="btn btn-link p-0">مشاهده بیشتر</a>
              </div>
            </div>
          </div>
          {/* Category 2 */}
          <div className="col-md-4 col-sm-6">
            <div className="card h-100 shadow-sm border-0 text-end">
              <img src="https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&fit=crop&w=400&q=80" className="card-img-top" alt="لوازم اداری" style={{height:180,objectFit:'cover'}} />
              <div className="card-body">
                <h5 className="card-title">لوازم اداری</h5>
                <p className="card-text small text-muted">کامل‌ترین مجموعه لوازم اداری و مصرفی سازمانی.</p>
                <a href="#" className="btn btn-link p-0">مشاهده بیشتر</a>
              </div>
            </div>
          </div>
          {/* Category 3 */}
          <div className="col-md-4 col-sm-6">
            <div className="card h-100 shadow-sm border-0 text-end">
              <img src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&fit=crop&w=400&q=80" className="card-img-top" alt="سخت‌افزار فناوری" style={{height:180,objectFit:'cover'}} />
              <div className="card-body">
                <h5 className="card-title">سخت‌افزار فناوری</h5>
                <p className="card-text small text-muted">انواع تجهیزات و قطعات سخت‌افزاری با قیمت همکاری.</p>
                <a href="#" className="btn btn-link p-0">مشاهده بیشتر</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-5">
        <h2 className="h4 fw-bold mb-4 text-center text-primary">ارتباط با ما</h2>
        <div className="row justify-content-center g-4">
          {/* Contact Info */}
          <div className="col-lg-5 col-md-6">
            <div className="card h-100 shadow-sm border-0 text-end">
              <div className="card-body">
                <h5 className="card-title mb-3">اطلاعات تماس</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><span className="fw-bold">تلفن:</span> <a href="tel:02112345678" className="text-decoration-none">021-12345678</a></li>
                  <li className="mb-2"><span className="fw-bold">ایمیل:</span> <a href="mailto:info@b2bshop.ir" className="text-decoration-none">info@b2bshop.ir</a></li>
                  <li className="mb-2"><span className="fw-bold">آدرس:</span> تهران، خیابان مثال، پلاک ۱۲۳</li>
                  <li><span className="fw-bold">ساعات پاسخگویی:</span> ۹ تا ۱۷ (شنبه تا چهارشنبه)</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="col-lg-7 col-md-6">
            <div className="card h-100 shadow-sm border-0 text-end">
              <div className="card-body">
                <h5 className="card-title mb-3">ارسال پیام</h5>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="نام و نام خانوادگی" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control" placeholder="ایمیل" required />
                    </div>
                    <div className="col-12">
                      <input type="text" className="form-control" placeholder="موضوع پیام" required />
                    </div>
                    <div className="col-12">
                      <textarea className="form-control" rows={3} placeholder="متن پیام" required></textarea>
                    </div>
                  </div>
                  <div className="text-end mt-3">
                    <button type="submit" className="btn btn-primary px-4">ارسال پیام</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Entry Section */}
      <section className="mb-5 text-center">
        <div className="d-inline-block bg-primary bg-opacity-10 rounded-4 shadow-sm p-4 px-5 mb-3">
          <div className="fs-1 mb-2">💼</div>
          <h2 className="h5 fw-bold mb-2 text-primary">ورود به داشبورد مشتری</h2>
          <p className="mb-3 text-muted">برای مشاهده قیمت‌های اختصاصی، مدیریت اعتبار و ثبت سفارش، وارد پنل کاربری خود شوید.</p>
          <a href="/dashboard" className="btn btn-primary btn-lg px-5">ورود به داشبورد <span className="ms-2">↗️</span></a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-5">
        <h3 className="fw-bold mb-3">آیا آماده همکاری هستید؟</h3>
        <p className="mb-4">برای دریافت حساب کاربری و شروع همکاری، با ما تماس بگیرید.</p>
        <a href="#contact" className="btn btn-outline-primary btn-lg">درخواست عضویت</a>
      </section>
    </main>
  );
}
