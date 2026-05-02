# مستند ساختار پروژه

این فایل نقشه‌ی فنی پروژه است؛ اگر آن را به یک توسعه‌دهنده جدید بدهید، باید بتواند سریع بفهمد پروژه از چه بخش‌هایی ساخته شده، هر فایل چه مسئولیتی دارد و برای توسعه‌ی قابلیت جدید از کجا شروع کند.

## خلاصه پروژه

- **نوع پروژه:** قالب آماده‌ی Next.js با App Router، TypeScript، React Query، Tailwind CSS v4 و Storybook.
- **نسخه‌های اصلی فعلی:** `next@16.0.10`، `react@19.2.3`، `typescript@^5`، `tailwindcss@^4`، `@tanstack/react-query@^5.66.0`.
- **زبان و جهت UI:** فارسی و راست‌به‌چپ (`rtl`) با فونت محلی IRANYekanX.
- **هدف:** ایجاد اسکلت اولیه برای اپلیکیشن‌های مدرن Next.js شامل لایه API، مدیریت تم، کامپوننت‌های پایه، تقویم فارسی، Storybook و ساختار قابل توسعه.

## دستورات اصلی

| دستور | کاربرد |
| --- | --- |
| `pnpm dev` | اجرای محیط توسعه Next.js روی پورت پیش‌فرض `3000` |
| `pnpm build` | ساخت نسخه production |
| `pnpm start` | اجرای build تولیدی |
| `pnpm lint` | اجرای ESLint |
| `pnpm storybook` | اجرای Storybook روی پورت `6006` |
| `pnpm build-storybook` | ساخت خروجی استاتیک Storybook |

## نمای کلی ساختار

```txt
nextjs15-reactquery/
├── .storybook/                    # تنظیمات Storybook، preview و Vitest setup
├── public/                        # فایل‌های استاتیک عمومی
│   ├── fonts/                     # فونت‌های IRANYekanX
│   ├── images/                    # تصاویر عمومی و placeholderها
│   └── svg/                       # SVGهای عمومی
├── src/
│   ├── app/                       # Next.js App Router
│   │   └── example-route/         # نمونه ساختار route-specific
│   ├── components/
│   │   ├── ui/                    # primitiveهای reusable UI
│   │   └── modules/               # feature moduleهای reusable
│   ├── config/                    # تنظیمات runtime مثل فونت‌ها
│   ├── data/                      # داده‌های ثابت/نمایشی
│   ├── hooks/                     # hookهای مشترک
│   ├── lib/                       # helperهای عمومی، API و number
│   ├── providers/                 # Providerهای سراسری React
│   ├── services/                  # Axios، API config و fetch سمت سرور
│   └── types/                     # typeهای global
├── AGENTS.md                      # قوانین توسعه برای agentها و توسعه‌دهنده‌ها
├── PROJECT_STRUCTURE.md           # همین سند
└── فایل‌های config ریشه           # Next, TS, ESLint, Tailwind, Vitest, Docker
```

## `src/app`

لایه routeهای Next.js App Router. هر route اگر کامپوننت، hook یا type اختصاصی دارد باید در همان route و داخل فولدرهای `_components`، `_hooks` و `_types` نگهداری شود.

| مسیر | کاربرد |
| --- | --- |
| `src/app/layout.tsx` | layout اصلی برنامه؛ تنظیم `lang="fa"`، `dir="rtl"`، metadata، فونت IRANYekanX و اتصال `Providers`. |
| `src/app/page.tsx` | صفحه اصلی template؛ معرفی قابلیت‌ها و dependencyها با `framer-motion`. |
| `src/app/globals.css` | ورودی Tailwind v4، تعریف color tokenها، breakpointها، utilityهای global، scrollbar، select و loader. |
| `src/app/favicon.ico` | favicon اپلیکیشن. |
| `src/app/example-route/page.tsx` | route نمونه برای نشان‌دادن الگوی ساخت صفحه جدید. |
| `src/app/example-route/_components/example-component.tsx` | محل کامپوننت‌های مخصوص `example-route`. |
| `src/app/example-route/_hooks/example-hook.ts` | محل hookهای مخصوص `example-route`. |
| `src/app/example-route/_types/example-types.ts` | محل typeهای مخصوص `example-route`. |

## `src/components`

محل کامپوننت‌های قابل استفاده مجدد. در نسخه فعلی پروژه، primitiveهای پایه به `src/components/ui` منتقل شده‌اند و feature moduleها در `src/components/modules` نگهداری می‌شوند.

### `src/components/ui`

| مسیر | کاربرد |
| --- | --- |
| `src/components/ui/button/Button.tsx` | دکمه پایه با پشتیبانی از link، loading، سایز، variant رنگی و نوع‌های `solid/outline/ghost/glass`. |
| `src/components/ui/button/Button.stories.tsx` | Storybook برای Button و نمایش حالت‌های مختلف آن. |
| `src/components/ui/input/Input.tsx` | input پایه با label، error، password toggle، تبدیل اعداد فارسی به انگلیسی و حالت currency. |
| `src/components/ui/input/Input.stories.tsx` | Storybook برای Input، فرم نمونه و validation. |
| `src/components/ui/textarea/Textarea.tsx` | textarea پایه با label، error، سایز، حالت filled/outline و auto-resize. |
| `src/components/ui/textarea/Textarea.stories.tsx` | Storybook برای Textarea و حالت‌های controlled/auto-resize/error. |
| `src/components/ui/modal/Modal.tsx` | modal عمومی با `createPortal`، مدیریت overflow صفحه، header، close button و submit فرم. |
| `src/components/ui/NavLink.tsx` | لینک هوشمند Next.js که بر اساس pathname و در صورت نیاز query string کلاس `active` می‌گیرد. |
| `src/components/ui/loaders/Spinner.tsx` | spinner ساده با Tailwind و CSS مکمل. |
| `src/components/ui/loaders/Spinner.css` | استایل مکمل Spinner. |
| `src/components/ui/loaders/Loader.tsx` | loader سه‌نقطه‌ای مبتنی بر کلاس global `.loader`. |

### `src/components/modules`

| مسیر | کاربرد |
| --- | --- |
| `src/components/modules/ThemeToggle.tsx` | تغییر تم dark/light با `next-themes` و آیکون‌های `lucide-react`. |
| `src/components/modules/calendar/*` | ماژول کامل تقویم فارسی برای انتخاب تاریخ، بازه و زمان. |

### `src/components/modules/calendar`

| فایل | کاربرد |
| --- | --- |
| `CalendarModal.tsx` | کامپوننت اصلی modal تقویم؛ مدیریت state تاریخ شروع/پایان، range mode، time picker و خروجی ISO. |
| `CalendarHeader.tsx` | header تقویم و کنترل حرکت بین ماه‌ها. |
| `CalendarGrid.tsx` | رندر شبکه روزهای یک ماه. |
| `CalendarDay.tsx` | منطق و UI هر روز شامل امروز، گذشته، انتخاب‌شده، بازه و تعطیلی. |
| `QuickDatePresets.tsx` | انتخاب سریع تاریخ‌های آینده مثل یک ماه، سه ماه، شش ماه و یک سال. |
| `TimePicker.tsx` | انتخاب ساعت و دقیقه با input و دکمه‌های افزایش/کاهش. |
| `SelectedDateDisplay.tsx` | نمایش تاریخ یا بازه انتخاب‌شده. |
| `CalendarActions.tsx` | دکمه‌های تایید و انصراف. |
| `calendarUtils.ts` | تولید روزهای تقویم، تشخیص امروز/ماه جاری/تعطیلی و تبدیل تاریخ شمسی به ISO با timezone تهران. |
| `timezone-utils.ts` | helperهای تبدیل UTC و Tehran timezone. |
| `index.ts` | export متمرکز ماژول تقویم. |
| `CalendarModal.stories.tsx` | Storybook برای حالت تک‌تاریخ، بازه و انتخاب زمان. |

### آیکون‌ها

| فایل | کاربرد |
| --- | --- |
| `src/components/Icons.tsx` | محل آیکون‌های اختصاصی SVG/FontAwesome abstraction؛ فعلاً شامل `IEye` و `IEyeOff` است. |

## `src/providers`

Providerهای سراسری که در `layout.tsx` دور کل اپلیکیشن قرار می‌گیرند.

| فایل | کاربرد |
| --- | --- |
| `src/providers/providers.tsx` | ترکیب `QueryClientProvider`، `ThemeProvider` و `Toaster`. تنظیم React Query با `refetchOnWindowFocus: false`. |
| `src/providers/ThemeProvider.tsx` | wrapper روی `next-themes` برای مدیریت کلاس `dark/light`. |

## `src/services`

لایه ارتباط با API و abstractionهای request.

| فایل | کاربرد |
| --- | --- |
| `src/services/api-config.ts` | تعریف `API_LIST`، `baseURL` و endpointها؛ همچنین آبجکت `api` برای متدهای دامنه‌ای مثل auth login و refresh token. |
| `src/services/axios-client.ts` | ساخت Axios instance، خواندن access token از cookie، افزودن Authorization header، refresh token در خطای `401` و export متدهای `apiService`. |
| `src/services/server-api.ts` | wrapper سمت سرور برای `fetch` با token cookie و متدهای `serverApi`. |

> نکته: در وضعیت فعلی فولدرهای `queries` و `mutations` در پروژه وجود ندارند. اگر React Query hook جدید اضافه شد، مطابق قرارداد `AGENTS.md` زیر `src/services/queries` یا `src/services/mutations` ساخته شود.

## `src/lib`

helperهای عمومی پروژه در این فولدر هستند و اخیراً بخشی از helperها از `utils.tsx` جدا شده‌اند.

| فایل | کاربرد |
| --- | --- |
| `src/lib/utils.tsx` | helperهای عمومی UI/app مثل `cn`، تبدیل URL به File، shuffle، نام کامل کاربر، type guard فایل، `rgbaToHex`، حذف duplicate، زمان باقی‌مانده و logout. |
| `src/lib/api.ts` | helperهای مربوط به API: `handleApiError`، ساخت base URL، query string، URL همراه query و حذف origin از URL. |
| `src/lib/number.ts` | helperهای عددی: تبدیل اعداد فارسی/عربی به انگلیسی، format عدد و حذف جداکننده. |
| `src/lib/server-utils.ts` | server actionهای cookie شامل `setCookie`، `removeCookie` و `getCookie` با `next/headers`. |

## `src/hooks`

hookهای shared که به route خاصی وابسته نیستند.

| فایل | کاربرد |
| --- | --- |
| `src/hooks/useSearchQueries.tsx` | تغییر query stringهای URL با `next/navigation`. |
| `src/hooks/useScrollEvent.ts` | تشخیص section فعال هنگام scroll. |
| `src/hooks/useIsClient.tsx` | تشخیص client بودن render با `useSyncExternalStore` برای جلوگیری از mismatchهای SSR/client. |

## `src/config` و `src/data`

| فایل | کاربرد |
| --- | --- |
| `src/config/fonts.ts` | تعریف فونت محلی `FIranYekan` با weightهای مختلف و CSS variable. |
| `src/data/index-data.tsx` | داده‌های نمایشی صفحه اصلی شامل `features` و `dependencies`. |

## `src/types` و `src/enums.ts`

| فایل | کاربرد |
| --- | --- |
| `src/types/types.ts` | محل typeهای global و shared پروژه؛ فعلاً آماده توسعه است. |
| `src/enums.ts` | محل enumهای global و shared؛ فعلاً آماده توسعه است. |

## `public`

| مسیر | کاربرد |
| --- | --- |
| `public/fonts/*.woff2` | وزن‌های مختلف فونت IRANYekanX برای `next/font/local`. |
| `public/images/logo.png` | لوگوی پروژه/برند. |
| `public/images/avatar.jpg` | تصویر نمونه avatar. |
| `public/images/profile-placeholder.jpg` | placeholder تصویر پروفایل. |
| `public/images/image-placeholder.jpg` | placeholder عمومی تصویر. |
| `public/images/auth-background-image.jpg` | تصویر پس‌زمینه احتمالی صفحات auth. |
| `public/svg/image-placeholder.svg` | placeholder تصویر به فرمت SVG. |

## `.storybook`

| فایل | کاربرد |
| --- | --- |
| `.storybook/main.ts` | تنظیم Storybook با `@storybook/nextjs-vite`، addonها، مسیر storyها و static dir. |
| `.storybook/preview.tsx` | import کردن global styleها، تنظیم a11y و decorator فارسی/RTL. |
| `.storybook/storybook-fonts.css` | CSS اختصاصی فونت‌ها در Storybook. |
| `.storybook/vitest.setup.ts` | اتصال annotationهای Storybook و a11y برای تست با Vitest. |

## فایل‌های config ریشه

| فایل | کاربرد |
| --- | --- |
| `package.json` | dependencyها، devDependencyها و scriptهای پروژه. |
| `pnpm-lock.yaml` | قفل نسخه dependencyها برای نصب پایدار با pnpm. |
| `next.config.ts` | تنظیمات Next.js؛ فعلاً `reactCompiler: true` فعال است. |
| `tsconfig.json` | تنظیمات TypeScript، strict mode و alias `@/*` به `src/*`. |
| `tailwind.config.ts` | تنظیم dark mode با class و font family ایران‌یکان. |
| `postcss.config.mjs` | اتصال `@tailwindcss/postcss`. |
| `eslint.config.mjs` | تنظیم ESLint برای Next، TypeScript و Storybook. |
| `vitest.config.ts` | تنظیم Vitest برای تست storyها با Playwright/Chromium. |
| `vitest.shims.d.ts` | type reference برای Vitest browser/playwright. |
| `Dockerfile` | build دو مرحله‌ای Node 20 و اجرای production روی پورت `3001`. |
| `.editorconfig` | یکسان‌سازی indentation، line ending و charset. |
| `.prettierrc` | تنظیم Prettier و مرتب‌سازی کلاس‌های Tailwind. |
| `.gitignore` | حذف dependencyها، خروجی build، envها و فایل‌های موقت از git. |
| `README.md` | معرفی template و راهنمای عمومی پروژه. |
| `AGENTS.md` | قوانین توسعه و معماری برای agentها و توسعه‌دهنده‌ها. |

## جریان اجرای UI

1. `src/app/layout.tsx` روی `html` جهت `rtl` و زبان `fa` تنظیم می‌کند.
2. فونت `FIranYekan` از `src/config/fonts.ts` روی `body` اعمال می‌شود.
3. `Providers` کل اپلیکیشن را داخل React Query، Theme Provider و Toaster قرار می‌دهد.
4. صفحه اصلی از `src/data/index-data.tsx` داده می‌گیرد و با `ThemeToggle` و `framer-motion` رندر می‌شود.

## جریان API

1. endpointها در `src/services/api-config.ts` تعریف می‌شوند.
2. درخواست‌های client-side از `apiService` در `src/services/axios-client.ts` استفاده می‌کنند.
3. `axios-client.ts` access token را از cookie می‌گیرد و در header می‌گذارد.
4. در خطای `401`، refresh token endpoint صدا زده می‌شود و request اصلی retry می‌شود.
5. درخواست‌های server-side از `serverApi` در `src/services/server-api.ts` استفاده می‌کنند.
6. helperهای ساخت URL و error handling در `src/lib/api.ts` قرار دارند.

## مسیر پیشنهادی برای توسعه قابلیت جدید

### قابلیت route-specific

```txt
src/app/dashboard/
├── page.tsx
├── _components/
├── _hooks/
└── _types/
```

- کامپوننت، hook و type فقط همان route باید داخل همان route بماند.
- اگر بعداً در چند route استفاده شد، آن را به محل shared مناسب منتقل کنید.

### قابلیت reusable

- primitive عمومی UI: `src/components/ui`
- feature module قابل استفاده در چند بخش: `src/components/modules`
- hook مشترک: `src/hooks`
- helper عمومی: `src/lib`
- API config و request layer: `src/services`
- type و enum مشترک: `src/types/types.ts` و `src/enums.ts`

## نکات مهم وضعیت فعلی

- نام فولدر پروژه `nextjs15-reactquery` است، اما نسخه فعلی Next.js در `package.json` برابر `16.0.10` است.
- برخی متن‌های فارسی داخل فایل‌های قدیمی README، story و component به صورت mojibake دیده می‌شوند؛ اگر همان فایل‌ها تغییر کردند بهتر است encoding/متن فارسی‌شان هم اصلاح شود.
- چند کامپوننت قدیمی هنوز از رنگ‌های خام Tailwind مثل `gray`، `blue` و `purple` استفاده می‌کنند؛ برای کدهای جدید یا فایل‌های touched بهتر است طبق `AGENTS.md` از tokenهای پروژه در `globals.css` استفاده شود.
- Storybook برای `Button`، `Input`، `Textarea` و `CalendarModal` وجود دارد و بهترین محل بررسی visual stateهای این primitiveهاست.
