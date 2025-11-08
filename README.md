# 🚀 Next.js 15 + React Query Template

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

تمپلیت حرفه‌ای و آماده برای شروع سریع پروژه‌های Next.js با تمام کانفیگ‌های لازم

[مشاهده دمو](#) • [گزارش باگ](../../issues) • [درخواست ویژگی](../../issues)

</div>

---

## ✨ ویژگی‌های کلیدی

### 🎯 Framework & Core

- ⚡ **Next.js 16** - آخرین نسخه با React 19.2
- 🔷 **TypeScript** - با تنظیمات کامل و Path Aliases
- 🎨 **Tailwind CSS v4** - جدیدترین نسخه
- 🌙 **Next Themes** - پشتیبانی از Dark Mode

### 📦 State Management & Data Fetching

- 🔄 **TanStack Query (React Query)** - مدیریت حرفه‌ای State Server-side
- 🐻 **Zustand** - State Management سبک و قدرتمند
- 🌐 **Axios** - با Interceptors و Error Handling کامل

### 📝 Forms & Validation

- 📋 **React Hook Form** - مدیریت فرم‌های پیچیده
- ✅ **Zod** - اعتبارسنجی قدرتمند داده‌ها

### 🎭 UI & Animations

- ✨ **Framer Motion** - انیمیشن‌های حرفه‌ای
- 🖼️ **Lucide React** - آیکون‌های زیبا و سبک
- 🎪 **Swiper & Embla Carousel** - اسلایدرهای حرفه‌ای

### 📅 Date & Time

- 📆 **Moment Jalaali** - پشتیبانی کامل از تاریخ شمسی
- 🗓️ **React Multi Date Picker** - انتخابگر تاریخ حرفه‌ای

### 🛠️ Developer Experience

- 🔍 **ESLint** - با تنظیمات Next.js و React Query
- 💅 **Prettier** - فرمت‌دهی خودکار کد
- 🐋 **Docker** - آماده برای Deploy

### 📚 Storybook

- 📖 **Storybook v10** - مستندسازی و توسعه کامپوننت‌ها
- 🧩 **2 کامپوننت آماده** (در حال توسعه و افزایش)
- ♿ **Accessibility Testing** - با addon-a11y
- 🧪 **Vitest Integration** - تست کامپوننت‌ها در Storybook

### 🔒 Security & Utils

- 🔐 **Jose** - JWT و رمزنگاری
- 🍪 **JS Cookie** - مدیریت Cookie

---

## 🚀 شروع سریع

### نصب

```bash
# Clone کردن پروژه
git clone https://github.com/mersadhabibi/nextjs-starter-template.git

# ورود به پوشه پروژه
cd nextjs-starter-template

# نصب وابستگی‌ها
pnpm install
# یا
npm install
# یا
yarn install
```

### اجرای پروژه

```bash
# حالت Development
pnpm dev

# Build برای Production
pnpm build

# اجرای Build شده
pnpm start

# Lint و بررسی کد
pnpm lint

# اجرای Storybook
pnpm storybook

# Build کردن Storybook
pnpm build-storybook
```

- پروژه روی [http://localhost:3000](http://localhost:3000) اجرا می‌شود
- Storybook روی [http://localhost:6006](http://localhost:6006) اجرا می‌شود

---

## 📚 Storybook

این پروژه از **Storybook v10** برای مستندسازی و توسعه کامپوننت‌ها استفاده می‌کند.

### 🚀 اجرای Storybook

```bash
pnpm storybook
```

Storybook روی [http://localhost:6006](http://localhost:6006) اجرا می‌شود.

### ✨ ویژگی‌های Storybook این پروژه

- ✅ **Accessibility Testing** - بررسی خودکار دسترسی‌پذیری
- ✅ **Vitest Integration** - تست کامپوننت‌ها
- ✅ **Auto Docs** - مستندسازی خودکار
- ✅ **Interactive Testing** - تست تعاملی کامپوننت‌ها
- ✅ **Dark Mode Support** - پشتیبانی از حالت تاریک

### 🧩 کامپوننت‌های آماده

در حال حاضر **2 کامپوننت** آماده و مستندسازی شده است:

1. **Button** - دکمه با variants مختلف
2. **Input** - فیلد ورودی با حالت‌های مختلف

> 🚧 **در حال توسعه:** کامپوننت‌های بیشتری به زودی اضافه می‌شوند!

### 📦 Addons نصب شده

- `@storybook/addon-a11y` - تست دسترسی‌پذیری
- `@storybook/addon-docs` - مستندسازی خودکار
- `@storybook/addon-interactions` - تست تعاملی
- `@storybook/addon-vitest` - اجرای تست‌ها
- `@storybook/addon-console` - لاگ‌های کنسول

---

## 📁 ساختار پروژه

```
nextjs-starter-template/
├── src/
│   ├── app/                    # App Router (Next.js 13+)
│   │   ├── layout.tsx          # Layout اصلی
│   │   ├── page.tsx            # صفحه اصلی
│   │   └── globals.css         # استایل‌های Global
│   ├── components/             # کامپوننت‌های React
│   │   ├── Icons.tsx
│   │   └── modules/            # کامپوننت‌های ماژولار
│   │       ├── buttons/
│   │       ├── inputs/
│   │       └── ...
│   ├── services/               # سرویس‌های API
│   │   ├── axios-client.ts     # تنظیمات Axios
│   │   ├── api-config.ts       # کانفیگ API
│   │   ├── queries/            # React Query Queries
│   │   └── mutations/          # React Query Mutations
│   ├── hooks/                  # Custom Hooks
│   ├── lib/                    # توابع کمکی
│   ├── types/                  # TypeScript Types
│   └── providers/              # React Providers
├── public/                     # فایل‌های Static
│   ├── fonts/                  # فونت ایران یکان
│   ├── images/
│   └── svg/
├── tailwind.config.ts          # تنظیمات Tailwind
├── tsconfig.json               # تنظیمات TypeScript
└── package.json
```

---

## 🎨 تنظیمات Tailwind CSS

### 🎨 سیستم رنگ‌بندی سفارشی

پروژه دارای یک سیستم رنگ‌بندی حرفه‌ای با پشتیبانی کامل از **Dark Mode** است.

**💡 مزیت اصلی:** همه رنگ‌ها به صورت خودکار در Dark Mode تغییر می‌کنند!

📖 **راهنمای کامل:** [COLOR_USAGE_EXAMPLES.md](./src/styles/COLOR_USAGE_EXAMPLES.md)

---

## 🔧 تنظیمات Axios

Axios با ویژگی‌های زیر کانفیگ شده:

- ✅ Interceptors برای Request/Response
- ✅ مدیریت خودکار Error
- ✅ پشتیبانی از Authentication Token
- ✅ Retry برای درخواست‌های ناموفق

مسیر: `src/services/axios-client.ts`

---

## 🔄 React Query Setup

TanStack Query با تنظیمات بهینه:

- ✅ Devtools فعال در حالت Development
- ✅ Caching هوشمند
- ✅ Automatic Refetching
- ✅ Optimistic Updates

مثال استفاده:

```typescript
// Query
const { data, isLoading } = useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
});

// Mutation
const mutation = useMutation({
  mutationFn: createUser,
  onSuccess: () => {
    queryClient.invalidateQueries(["users"]);
  },
});
```

---

## 🌙 Dark Mode

Dark Mode با استفاده از `next-themes` پیاده‌سازی شده:

```tsx
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      تغییر تم
    </button>
  );
}
```

## 📝 فرم‌ها و Validation

مثال استفاده از React Hook Form + Zod:

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('ایمیل معتبر نیست'),
  password: z.string().min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد'),
});

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
    </form>
  );
}
```

---

## 🚢 Deploy

### Vercel (توصیه می‌شود)

```bash
# نصب Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```bash
# Build Image
docker build -t nextjs-app .

# اجرای Container
docker run -p 3000:3000 nextjs-app
```

---

## 📦 لیست کامل پکیج‌ها (58 پکیج)

| پکیج                           | نسخه     | دسته‌بندی        | نوع           |
| ------------------------------ | -------- | ---------------- | ------------- |
| **CORE & FRAMEWORK**           |          |                  |               |
| next                           | 16.0.1   | Core             | dependency    |
| react                          | 19.2.0   | Core             | dependency    |
| react-dom                      | 19.2.0   | Core             | dependency    |
| typescript                     | ^5       | Core             | devDependency |
| **STATE MANAGEMENT**           |          |                  |               |
| @tanstack/react-query          | ^5.66.0  | State Management | dependency    |
| @tanstack/react-query-devtools | ^5.66.0  | State Management | devDependency |
| @tanstack/eslint-plugin-query  | ^5.66.0  | State Management | devDependency |
| zustand                        | ^5.0.3   | State Management | dependency    |
| **NETWORKING**                 |          |                  |               |
| axios                          | ^1.9.0   | Network          | dependency    |
| **FORMS & VALIDATION**         |          |                  |               |
| react-hook-form                | ^7.54.2  | Forms            | dependency    |
| @hookform/resolvers            | ^3.10.0  | Forms            | dependency    |
| zod                            | ^3.24.1  | Validation       | dependency    |
| **STYLING & ANIMATION**        |          |                  |               |
| tailwindcss                    | ^4       | Styling          | devDependency |
| @tailwindcss/postcss           | ^4       | Styling          | devDependency |
| postcss                        | ^8       | Styling          | devDependency |
| prettier                       | ^3.4.2   | Styling          | devDependency |
| prettier-plugin-tailwindcss    | ^0.6.11  | Styling          | devDependency |
| framer-motion                  | ^12.4.3  | Animation        | dependency    |
| **UI COMPONENTS & THEMES**     |          |                  |               |
| next-themes                    | ^0.4.6   | UI               | dependency    |
| lucide-react                   | ^0.474.0 | Icons            | dependency    |
| sonner                         | ^2.0.7   | Notifications    | dependency    |
| react-dropzone                 | ^14.3.5  | File Upload      | dependency    |
| react-color                    | ^2.19.3  | Color Picker     | dependency    |
| react-circular-progressbar     | ^2.2.0   | Progress         | dependency    |
| swiper                         | ^11.2.10 | Carousel         | dependency    |
| embla-carousel-react           | ^8.5.2   | Carousel         | dependency    |
| **DATE & TIME**                |          |                  |               |
| moment-jalaali                 | ^0.10.4  | Date (Persian)   | dependency    |
| react-multi-date-picker        | ^4.5.2   | Date Picker      | dependency    |
| **SECURITY**                   |          |                  |               |
| jose                           | ^5.9.6   | Security (JWT)   | dependency    |
| **UTILITIES**                  |          |                  |               |
| clsx                           | ^2.1.1   | Utils            | dependency    |
| tailwind-merge                 | ^3.0.1   | Utils            | dependency    |
| usehooks-ts                    | ^3.1.0   | Hooks            | dependency    |
| uuid                           | ^11.0.5  | Utils            | dependency    |
| js-cookie                      | ^3.0.5   | Utils            | dependency    |
| sharp                          | ^0.33.5  | Image Processing | dependency    |
| **LINTING & FORMATTING**       |          |                  |               |
| eslint                         | ^9       | Linting          | devDependency |
| eslint-config-next             | 16.0.1   | Linting          | devDependency |
| eslint-plugin-storybook        | 10.0.5   | Linting          | devDependency |
| @eslint/eslintrc               | ^3       | Linting          | devDependency |
| **TESTING**                    |          |                  |               |
| vitest                         | ^4.0.7   | Testing          | devDependency |
| @vitest/browser-playwright     | ^4.0.7   | Testing          | devDependency |
| @vitest/coverage-v8            | ^4.0.7   | Testing          | devDependency |
| playwright                     | ^1.56.1  | Testing          | devDependency |
| **STORYBOOK**                  |          |                  |               |
| storybook                      | 10.0.5   | Storybook        | devDependency |
| @storybook/nextjs-vite         | ^10.0.5  | Storybook        | devDependency |
| @storybook/react               | ^10.0.5  | Storybook        | devDependency |
| @storybook/addon-a11y          | 10.0.5   | Storybook Addon  | devDependency |
| @storybook/addon-docs          | 10.0.5   | Storybook Addon  | devDependency |
| @storybook/addon-onboarding    | 10.0.5   | Storybook Addon  | devDependency |
| @storybook/addon-vitest        | 10.0.5   | Storybook Addon  | devDependency |
| @storybook/addon-console       | ^3.0.0   | Storybook Addon  | devDependency |
| @storybook/addon-interactions  | ^8.6.14  | Storybook Addon  | devDependency |
| @storybook/components          | ^8.6.14  | Storybook        | devDependency |
| @storybook/core-events         | ^8.6.14  | Storybook        | devDependency |
| @storybook/manager-api         | ^8.6.14  | Storybook        | devDependency |
| @storybook/test                | ^8.6.14  | Storybook        | devDependency |
| @storybook/theming             | ^8.6.14  | Storybook        | devDependency |
| @storybook/types               | ^8.6.14  | Storybook        | devDependency |
| @chromatic-com/storybook       | ^3.2.7   | Storybook        | devDependency |
| **TYPE DEFINITIONS**           |          |                  |               |
| @types/node                    | ^20      | Types            | devDependency |
| @types/react                   | ^19      | Types            | devDependency |
| @types/react-dom               | ^19      | Types            | devDependency |
| @types/react-dropzone          | ^5.1.0   | Types            | devDependency |
| @types/uuid                    | ^10.0.0  | Types            | devDependency |
| @types/js-cookie               | ^3.0.6   | Types            | devDependency |

---

## 🤝 مشارکت

مشارکت شما همیشه خوشایند است! لطفاً:

1. پروژه را Fork کنید
2. برنچ جدید بسازید (`git checkout -b feature/amazing-feature`)
3. تغییرات را Commit کنید (`git commit -m 'Add amazing feature'`)
4. به برنچ خود Push کنید (`git push origin feature/amazing-feature`)
5. Pull Request باز کنید

---

## 📝 لایسنس

این پروژه تحت لایسنس MIT منتشر شده است.

---

## 💬 پشتیبانی

اگر سوالی دارید یا به کمک نیاز دارید:

- 🐛 [گزارش باگ](../../issues)
- 💡 [درخواست ویژگی جدید](../../issues)
- 📧 ایمیل: mersadhabibi.work@gmail.com

---

<div align="center">

**ساخته شده با ❤️ برای توسعه‌دهندگان ایرانی**

⭐ اگر این پروژه به درد شما خورد، یک ستاره بدهید!

</div>
