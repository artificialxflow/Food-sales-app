import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2">
      <div className="container">
        {/* Logo & Brand */}
        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" href="/">
          <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" alt="لوگو" width="36" height="36" style={{marginLeft: 8}} />
          فروش B2B
        </Link>
        {/* Toggler for mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="تغییر منو">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3 rounded-4 px-3 py-2 bg-white bg-opacity-75 shadow-sm align-items-center" style={{borderRadius: '1.5rem', boxShadow: '0 2px 12px 0 rgba(80,120,200,0.07)'}}>
            <li className="nav-item">
              <Link className="nav-link" href="/">خانه</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">امکانات</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/features#wallet">اعتبار داخلی</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#how">نحوه همکاری</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">محصولات</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/order">ثبت سفارش</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary px-3 fw-bold d-flex align-items-center gap-2" href="/dashboard">
                <span className="fs-5">💼</span>
                ورود به داشبورد مشتری
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">تماس با ما</a>
            </li>
          </ul>
          <a href="#join" className="btn btn-primary ms-lg-4 mt-3 mt-lg-0">درخواست عضویت</a>
        </div>
      </div>
    </header>
  );
} 