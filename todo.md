# Specialized E-commerce Platform (Design Prototype Phase)

**توجه:**
در این مرحله فقط طراحی اولیه رابط کاربری (UI) به صورت کاملاً راست‌چین (RTL)، مدرن و جذاب انجام می‌شود. هیچ اتصال یا عملکرد واقعی به دیتابیس یا بک‌اند وجود ندارد و همه صفحات و عملکردها به صورت استاتیک و نمایشی پیاده‌سازی می‌شوند تا قابلیت‌ها و تجربه کاربری به کارفرما نمایش داده شود. موارد مربوط به بک‌اند و دیتابیس با عبارت (فعلا نیاز به انجامشون نیست) مشخص شده‌اند و در این فاز انجام نمی‌شوند.

## Project Overview
A specialized e-commerce platform built with Next.js (manually installed) and Bootstrap, featuring admin-only registration, customer-specific pricing, and internal wallet system. **(This phase: UI/UX only, static, RTL, no backend)**

## Technical Stack
- **Frontend**: Next.js 14 with App Router
- **Styling**: Bootstrap 5 (RTL)
- **Design**: Modern, attractive, fully responsive, right-to-left
- **Backend/Database**: (فعلا نیاز به انجامشون نیست)
- **Authentication**: (فعلا نیاز به انجامشون نیست)
- **State Management**: (فعلا نیاز به انجامشون نیست)
- **Form Handling**: (فعلا نیاز به انجامشون نیست)
- **Notifications**: (فعلا نیاز به انجامشون نیست)

## Implemented UI Pages & Components
- [x] صفحه اصلی (home)
- [x] هدر و فوتر (header & footer)
- [x] داشبورد مشتری (customer dashboard)
- [x] صفحه سفارش (order)
- [x] امکانات (features)
- [x] نحوه همکاری (how-to)
- [x] محصولات (products)
- [x] تماس با ما (contact)
- [x] درخواست همکاری (join)
- [ ] ورود (login)
- [ ] ثبت‌نام (register)
- [ ] داشبورد ادمین (admin dashboard)
- [ ] پروفایل کاربر (profile)
- [ ] صفحه خطا/عدم دسترسی (error/forbidden)

## ویژگی‌های کلیدی (UI Prototype Only)
- [x] ثبت‌نام فقط توسط ادمین
- [x] قیمت‌گذاری اختصاصی برای هر مشتری (UI)
- [x] اعتبار داخلی (Wallet) و نمایش موجودی (UI)
- [ ] پلن قیمتی مخصوص هر مشتری (UI): هر مشتری فقط قیمت‌های مختص خودش را می‌بیند.
- [ ] اعتبار اولیه و مدیریت کاهش اعتبار با خرید (UI): اعتبار اولیه در زمان ثبت‌نام، کاهش با خرید، و درخواست افزایش اعتبار پس از اتمام.

> توجه: یک تصویر جایگزین با نام placeholder.png باید در پوشه public قرار گیرد تا کارت‌های محصول به درستی نمایش داده شوند.

## Core Features (UI Prototype)

### 1. Authentication & User Management
- [ ] Admin-only user registration system (فعلا نیاز به انجامشون نیست)
- [ ] Secure login with username/password (فعلا نیاز به انجامشون نیست)
- [ ] Role-based access control (Admin/Customer) (فعلا نیاز به انجامشون نیست)
- [ ] Password reset functionality (فعلا نیاز به انجامشون نیست)
- [ ] Session management (فعلا نیاز به انجامشون نیست)
- [ ] Activity logging (فعلا نیاز به انجامشون نیست)
- [ ] **صفحه لاگین و ثبت‌نام فقط به صورت نمایشی و استاتیک طراحی شود**

### 2. Customer Management
- [ ] Customer registration request system (فعلا نیاز به انجامشون نیست)
- [ ] Customer profile management (فعلا نیاز به انجامشون نیست)
- [ ] Customer grading system (فعلا نیاز به انجامشون نیست)
- [ ] Customer-specific product visibility (فعلا نیاز به انجامشون نیست)
- [ ] Customer wallet management (فعلا نیاز به انجامشون نیست)
- [ ] Customer activity history (فعلا نیاز به انجامشون نیست)
- [ ] **صفحات پروفایل و مدیریت مشتری فقط به صورت نمایشی و استاتیک طراحی شود**

### 3. Product Management
- [x] Product catalog (UI استاتیک در صفحه اصلی)
- [ ] Customer-specific pricing (فعلا نیاز به انجامشون نیست)
- [x] Product categorization (UI استاتیک در صفحه اصلی)
- [x] Product search and filtering (UI استاتیک در صفحه اصلی)
- [ ] Product availability tracking (فعلا نیاز به انجامشون نیست)
- [x] Product image management (UI استاتیک در صفحه اصلی)

### 4. Order System
- [ ] Order creation (UI استاتیک - در مرحله بعد)
- [ ] Order status management (فعلا نیاز به انجامشون نیست)
- [x] Order history (UI استاتیک در داشبورد مشتری)
- [ ] Order notifications (فعلا نیاز به انجامشون نیست)
- [ ] Order approval workflow (فعلا نیاز به انجامشون نیست)
- [ ] Order tracking (فعلا نیاز به انجامشون نیست)

### 5. Wallet System
- [ ] Initial credit assignment (فعلا نیاز به انجامشون نیست)
- [x] Credit balance tracking (UI استاتیک در داشبورد مشتری)
- [x] Credit usage history (UI استاتیک در داشبورد مشتری)
- [x] Credit top-up requests (UI استاتیک در داشبورد مشتری)
- [ ] Low balance notifications (فعلا نیاز به انجامشون نیست)
- [ ] Transaction logging (فعلا نیاز به انجامشون نیست)

### 6. Admin Dashboard
- [ ] Customer management interface (UI استاتیک)
- [ ] Product management interface (UI استاتیک)
- [ ] Order management interface (UI استاتیک)
- [ ] Wallet management interface (UI استاتیک)
- [ ] Reporting and analytics (UI استاتیک)
- [ ] System settings (UI استاتیک)

### 7. Customer Dashboard
- [x] Personal profile view (UI استاتیک - ساختار اولیه)
- [x] Order history (UI استاتیک)
- [x] Wallet balance (UI استاتیک)
- [x] Product catalog (filtered) (UI استاتیک در صفحه اصلی)
- [x] Order placement (UI استاتیک - در مرحله بعد)
- [x] Credit request (UI استاتیک)

### 8. Notification System
- [ ] Email notifications (فعلا نیاز به انجامشون نیست)
- [ ] SMS notifications (optional) (فعلا نیاز به انجامشون نیست)
- [ ] In-app notifications (فعلا نیاز به انجامشون نیست)
- [ ] Notification preferences (فعلا نیاز به انجامشون نیست)
- [ ] Notification history (فعلا نیاز به انجامشون نیست)
- [ ] Notification templates (فعلا نیاز به انجامشون نیست)

## Database Schema
(فعلا نیاز به انجامشون نیست)

## Implementation Steps (UI Prototype Phase)

### Phase 1: Project Setup
- [x] Initialize Next.js project (دستی انجام شده)
- [x] Set up Git repository (دستی انجام شده)
- [x] Configure Bootstrap (RTL)
- [x] Set up project structure
- [x] طراحی صفحه اصلی (Homepage) مدرن و راست‌چین
- [x] طراحی داشبورد مشتری (Customer Dashboard) استاتیک و راست‌چین
- [x] طراحی کامپوننت‌های اصلی (هدر، فوتر)
- [ ] طراحی صفحات کلیدی دیگر (ورود، ثبت‌نام، داشبورد ادمین، سفارش جدید، پروفایل و ...)
- [ ] نمایش عملکردها به صورت استاتیک و نمایشی
- [x] رعایت کامل راست‌چین بودن و ریسپانسیو بودن

### Phase 2: (فعلا نیاز به انجامشون نیست)
- [ ] اتصال به دیتابیس و پیاده‌سازی بک‌اند
- [ ] پیاده‌سازی احراز هویت و نقش‌ها
- [ ] پیاده‌سازی عملکردهای واقعی سفارش، کیف پول و ...

## Security Considerations
(فعلا نیاز به انجامشون نیست)

## Performance Optimization
(فعلا نیاز به انجامشون نیست)

## Documentation
- [x] مستندسازی ساختار صفحات و کامپوننت‌ها (UI)
- [ ] مستندسازی مراحل بعدی (فعلا نیاز به انجامشون نیست) 