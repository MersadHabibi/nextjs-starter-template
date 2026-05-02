# مستند ساختار پروژه

این سند برای معرفی سریع و دقیق پروژه به توسعه‌دهنده، مدیر فنی یا هر فردی نوشته شده که می‌خواهد بدون جست‌وجوی زیاد بفهمد پروژه از چه بخش‌هایی تشکیل شده، هر فایل چه کاری انجام می‌دهد و برای توسعه‌ی قابلیت‌های جدید باید از کجا شروع کند.

## خلاصه پروژه

- **نوع پروژه:** قالب آماده‌ی Next.js با App Router، TypeScript، React Query، Tailwind CSS و Storybook.
- **نسخه‌های اصلی فعلی:** `next@16.0.10`، `react@19.2.3`، `typescript@^5`، `tailwindcss@^4`، `@tanstack/react-query@^5.66.0`.
- **جهت و زبان رابط کاربری:** فارسی، راست‌به‌چپ (`rtl`)، با فونت محلی ایران‌یکان.
- **هدف پروژه:** فراهم‌کردن اسکلت اولیه برای ساخت اپلیکیشن‌های Next.js شامل سیستم تم، API client، کامپوننت‌های پایه، Storybook و ساختار قابل توسعه.

## اجرای پروژه

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
├── .storybook/                  # تنظیمات Storybook و تست storyها
├── public/                      # فایل‌های استاتیک: فونت، تصویر، SVG
├── src/
│   ├── app/                     # مسیرها و layoutهای Next.js App Router
│   │   └── example-route/       # نمونه ساختار route-specific
│   ├── components/              # کامپوننت‌های UI و ماژول‌های قابل استفاده مجدد
│   │   └── modules/             # کامپوننت‌های عمومی سطح پروژه
│   ├── config/                  # تنظیمات runtime مثل فونت‌ها
│   ├── data/                    # داده‌های نمایشی/ثابت برای UI
│   ├── hooks/                   # hookهای مشترک
│   ├── lib/                     # utilityهای مشترک client/server
│   ├── providers/               # Providerهای سراسری React
│   ├── services/                # لایه API، Axios، query و mutation
│   └── types/                   # typeهای مشترک و دامنه‌ای
├── Dockerfile                   # build و اجرای کانتینری
├── package.json                 # وابستگی‌ها و اسکریپت‌ها
└── فایل‌های config ریشه         # Next, ESLint, Tailwind, TypeScript, Vitest, Prettier
```

## مسیرهای اصلی و نقش آن‌ها

### `src/app`

محل تعریف routeها در معماری App Router است. هر فولدر داخل `app` می‌تواند یک مسیر مستقل باشد و منطق اختصاصی هر مسیر باید طبق ساختار `_components`، `_hooks` و `_types` در همان مسیر بماند.

| مسیر | کاربرد |
| --- | --- |
| `src/app/layout.tsx` | layout اصلی پروژه؛ تنظیم `lang="fa"`، `dir="rtl"`، فونت ایران‌یکان، metadata و اتصال `Providers`. |
| `src/app/page.tsx` | صفحه اصلی template؛ نمایش معرفی پروژه، قابلیت‌ها و dependencyها با `framer-motion`. |
| `src/app/globals.css` | ورودی Tailwind v4، تعریف CSS variableها، tokenهای رنگ، breakpointها، scrollbar، select و loaderهای عمومی. |
| `src/app/favicon.ico` | favicon اپلیکیشن. |
| `src/app/example-route/page.tsx` | یک route نمونه برای نمایش الگوی ساخت مسیر جدید. |
| `src/app/example-route/_components/example-component.tsx` | محل کامپوننت‌های مخصوص همان route. |
| `src/app/example-route/_hooks/example-hook.ts` | محل hookهای مخصوص همان route. |
| `src/app/example-route/_types/example-types.ts` | محل typeهای مخصوص همان route. |

### `src/providers`

Providerهای سراسری که دور کل اپلیکیشن قرار می‌گیرند.

| فایل | کاربرد |
| --- | --- |
| `src/providers/providers.tsx` | ترکیب `QueryClientProvider`، `ThemeProvider` و `Toaster`. تنظیم پیش‌فرض React Query برای جلوگیری از refetch هنگام focus شدن window. |
| `src/providers/ThemeProvider.tsx` | wrapper ساده روی `next-themes` برای مدیریت کلاس `dark/light`. |

### `src/services`

لایه ارتباط با API و الگوی React Query در این بخش قرار دارد.

| فایل/مسیر | کاربرد |
| --- | --- |
| `src/services/api-config.ts` | تعریف `API_LIST` شامل `baseURL` و endpointها؛ همچنین آبجکت `api` برای متدهای دامنه‌ای مثل auth login و refresh token. |
| `src/services/axios-client.ts` | ساخت Axios instance، افزودن access token از cookie، مدیریت refresh token در خطای `401`، helperهای عمومی `get/post/put/patch/delete`. |
| `src/services/server-api.ts` | wrapper برای `fetch` سمت سرور با افزودن token از cookie و متدهای `serverApi`. |
| `src/services/queries/auth/useUserInfo.ts` | نمونه hook از نوع `useQuery` برای گرفتن اطلاعات کاربر؛ فعلاً بدنه API اصلی کامنت شده است. |
| `src/services/mutations/auth/useAuthMutation.ts` | نمونه hook از نوع `useMutation` برای login؛ فعلاً بدنه API اصلی کامنت شده است. |

### `src/components`

کامپوننت‌های قابل استفاده مجدد پروژه. طبق قوانین پروژه، primitiveهای واقعاً مشترک باید در `src/components/ui`، کامپوننت‌های business-level در `src/components/app` و feature moduleهای عمومی در `src/components/modules` باشند. در وضعیت فعلی، فولدرهای `ui` و `app` هنوز ساخته نشده‌اند و کامپوننت‌های موجود عمدتاً در `modules` هستند.

| فایل/مسیر | کاربرد |
| --- | --- |
| `src/components/Icons.tsx` | لایه آیکون‌های اختصاصی SVG/FontAwesome abstraction؛ فعلاً شامل `IEye` و `IEyeOff` و نمونه کامنت‌شده است. |
| `src/components/modules/ThemeToggle.tsx` | دکمه تغییر تم با `next-themes` و آیکون‌های `lucide-react`. |
| `src/components/modules/NavLink.tsx` | لینک هوشمند Next.js که بر اساس pathname و در صورت نیاز query string کلاس `active` می‌گیرد. |
| `src/components/modules/button/Button.tsx` | دکمه reusable با حالت link، loading، سایز، variant رنگی و نوع‌های `solid/outline/ghost/glass`. |
| `src/components/modules/button/Button.stories.tsx` | مستندات و سناریوهای Storybook برای Button. |
| `src/components/modules/input/Input.tsx` | input reusable با label، error، password toggle، تبدیل اعداد فارسی به انگلیسی و حالت currency. |
| `src/components/modules/input/Input.stories.tsx` | سناریوهای Storybook برای Input، فرم نمونه و validation. |
| `src/components/modules/textarea/Textarea.tsx` | textarea reusable با label، error، سایز، حالت filled/outline و auto-resize. |
| `src/components/modules/textarea/Textarea.stories.tsx` | مستندات و سناریوهای Storybook برای Textarea. |
| `src/components/modules/modal/Modal.tsx` | modal عمومی با portal، بستن overflow صفحه، header، close button و پشتیبانی از submit فرم. |
| `src/components/modules/loaders/Spinner.tsx` | spinner ساده مبتنی بر Tailwind و `Spinner.css`. |
| `src/components/modules/loaders/Spinner.css` | کلاس CSS مکمل spinner. |
| `src/components/modules/loaders/Loader.tsx` | loader سه‌نقطه‌ای که از کلاس‌های global در `globals.css` استفاده می‌کند. |

### `src/components/modules/calendar`

یک ماژول کامل تقویم فارسی برای انتخاب تاریخ و بازه تاریخی است. این ماژول از `react-multi-date-picker`، تقویم Persian و تبدیل timezone تهران استفاده می‌کند.

| فایل | کاربرد |
| --- | --- |
| `CalendarModal.tsx` | کامپوننت اصلی modal تقویم؛ مدیریت state تاریخ شروع/پایان، حالت range، time picker، تایید و خروجی ISO. |
| `CalendarHeader.tsx` | header تقویم و کنترل حرکت بین ماه‌ها. |
| `CalendarGrid.tsx` | رندر شبکه روزهای یک ماه. |
| `CalendarDay.tsx` | رندر و منطق هر روز: امروز، روز غیرفعال، انتخاب‌شده، بازه و تعطیل. |
| `QuickDatePresets.tsx` | presetهای انتخاب سریع مثل یک ماه، سه ماه، شش ماه و یک سال آینده. |
| `TimePicker.tsx` | انتخاب ساعت و دقیقه با input و کنترل‌های افزایش/کاهش. |
| `SelectedDateDisplay.tsx` | نمایش تاریخ یا بازه انتخاب‌شده به کاربر. |
| `CalendarActions.tsx` | دکمه‌های تایید و انصراف. |
| `calendarUtils.ts` | تولید روزهای تقویم، تشخیص امروز/ماه جاری/تعطیلی و تبدیل تاریخ شمسی به ISO با timezone تهران. |
| `timezone-utils.ts` | helperهای تبدیل UTC و timezone تهران. |
| `index.ts` | export متمرکز کامپوننت‌ها و utilityهای تقویم. |
| `CalendarModal.stories.tsx` | سناریوهای Storybook برای تقویم: تک‌تاریخ، بازه و انتخاب زمان. |

### `src/hooks`

hookهای مشترک و قابل استفاده در چند بخش پروژه.

| فایل | کاربرد |
| --- | --- |
| `src/hooks/useSearchQueries.tsx` | تغییر query stringهای URL با `next/navigation` بدون ساخت دستی URL. |
| `src/hooks/useScrollEvent.ts` | تشخیص section فعال هنگام scroll با خواندن `section`های صفحه. |

### `src/lib`

utilityهای عمومی پروژه.

| فایل | کاربرد |
| --- | --- |
| `src/lib/utils.tsx` | شامل `cn` برای ادغام classNameها، helperهای فایل، عدد، نام کامل کاربر، error API، logout و ساخت URLهای API. |
| `src/lib/server-utils.ts` | توابع server action برای `setCookie`، `removeCookie` و `getCookie` با `next/headers`. |

### `src/types` و `src/enums.ts`

تعریف typeها و enumهای مشترک. در حال حاضر بخشی از فایل‌ها placeholder هستند و پروژه برای دامنه‌های واقعی آینده آماده شده است.

| فایل/مسیر | کاربرد |
| --- | --- |
| `src/types/api.types.ts` | typeهای عمومی API؛ فعلاً فایل خالی/آماده توسعه است. |
| `src/types/types.ts` | محل typeهای global؛ فعلاً فایل خالی/آماده توسعه است. |
| `src/types/client/auth/types.ts` | type پاسخ اطلاعات کاربر (`TUserInfoResponse`). |
| `src/types/admin/placeholder.md` | placeholder برای typeهای بخش admin. |
| `src/enums.ts` | محل enumهای global؛ فعلاً آماده توسعه است. |

### `src/config` و `src/data`

| فایل | کاربرد |
| --- | --- |
| `src/config/fonts.ts` | تعریف فونت محلی `FIranYekan` با weightهای مختلف و variable CSS. |
| `src/data/index-data.tsx` | داده‌های نمایشی صفحه اصلی: لیست قابلیت‌ها و dependencyها. |

### `public`

فایل‌های عمومی که مستقیماً توسط مرورگر قابل دسترسی هستند.

| مسیر | کاربرد |
| --- | --- |
| `public/fonts/*.woff2` | وزن‌های مختلف فونت IRANYekanX برای استفاده در `next/font/local`. |
| `public/images/logo.png` | لوگوی پروژه/برند. |
| `public/images/avatar.jpg` | تصویر نمونه avatar. |
| `public/images/profile-placeholder.jpg` | placeholder تصویر پروفایل. |
| `public/images/image-placeholder.jpg` | placeholder عمومی تصویر. |
| `public/images/auth-background-image.jpg` | تصویر پس‌زمینه احتمالی صفحات احراز هویت. |
| `public/svg/image-placeholder.svg` | placeholder تصویر به فرمت SVG. |

### `.storybook`

تنظیمات توسعه، مستندسازی و تست کامپوننت‌ها.

| فایل | کاربرد |
| --- | --- |
| `.storybook/main.ts` | تنظیم Storybook با `@storybook/nextjs-vite`، addonها و مسیر storyها. |
| `.storybook/preview.tsx` | import کردن `globals.css`، تنظیم a11y، decorator فارسی/RTL و فونت. |
| `.storybook/storybook-fonts.css` | CSS اختصاصی فونت‌ها برای محیط Storybook. |
| `.storybook/vitest.setup.ts` | اتصال annotationهای Storybook و a11y برای تست با Vitest. |

## فایل‌های تنظیمات ریشه

| فایل | کاربرد |
| --- | --- |
| `package.json` | نام پروژه، اسکریپت‌ها، dependencyها و devDependencyها. |
| `pnpm-lock.yaml` | قفل نسخه‌های dependency برای نصب پایدار با pnpm. |
| `next.config.ts` | تنظیمات Next.js؛ در حال حاضر `reactCompiler: true` فعال است. |
| `tsconfig.json` | تنظیمات TypeScript، strict mode، alias `@/*` به `src/*`. |
| `tailwind.config.ts` | تنظیم Tailwind؛ dark mode با کلاس و fontFamily ایران‌یکان. |
| `postcss.config.mjs` | اتصال پلاگین `@tailwindcss/postcss`. |
| `eslint.config.mjs` | کانفیگ ESLint برای Next، TypeScript و Storybook همراه با ruleهای سفارشی. |
| `vitest.config.ts` | تنظیم Vitest برای اجرای تست storyها با Playwright/Chromium. |
| `vitest.shims.d.ts` | reference typeهای browser-playwright برای Vitest. |
| `Dockerfile` | build دو مرحله‌ای Node 20 برای ساخت و اجرای production روی پورت `3001`. |
| `.editorconfig` | یکسان‌سازی indentation، line ending و charset بین editorها. |
| `.prettierrc` | تنظیم Prettier و مرتب‌سازی کلاس‌های Tailwind با `prettier-plugin-tailwindcss`. |
| `.gitignore` | حذف dependencyها، خروجی build، envها، coverage و فایل‌های موقت از git. |
| `README.md` | معرفی template و راهنمای کلی؛ در وضعیت فعلی بخشی از متن فارسی آن با encoding خراب نمایش داده می‌شود. |
| `AGENTS.md` | قوانین اجباری معماری، styling، محل قرارگیری فایل‌ها و قراردادهای توسعه برای agentها/توسعه‌دهنده‌ها. |
| `next-env.d.ts` | فایل تولیدی Next.js برای typeهای محیطی؛ نباید دستی ویرایش شود. |

## جریان داده و API

1. `src/app/layout.tsx` کل برنامه را داخل `Providers` قرار می‌دهد.
2. `Providers`، `QueryClientProvider` را برای React Query و `ThemeProvider` را برای dark/light theme فعال می‌کند.
3. کامپوننت‌ها یا hookها برای درخواست‌های client-side از `api` یا `apiService` در `src/services` استفاده می‌کنند.
4. `axios-client.ts` قبل از هر request، `accessToken` را از cookie می‌خواند و در header می‌گذارد.
5. اگر پاسخ `401` باشد، تلاش می‌کند با `refreshToken` توکن جدید بگیرد و request قبلی را تکرار کند.
6. برای requestهای server-side می‌توان از `serverApi` در `src/services/server-api.ts` استفاده کرد.

## قراردادهای توسعه در این پروژه

- برای ترکیب کلاس‌ها همیشه از `cn` در `src/lib/utils.tsx` استفاده شود.
- رنگ‌ها باید از tokenهای Tailwind/CSS موجود در `src/app/globals.css` بیایند، نه مقدار خام داخل کامپوننت.
- logic مخصوص route در خود route و داخل `_components`، `_hooks` و `_types` نگه داشته شود.
- hookهای مشترک در `src/hooks` قرار می‌گیرند.
- utilityهای مشترک در `src/utils` یا طبق ساختار فعلی در `src/lib` قرار می‌گیرند؛ قبل از اضافه‌کردن helper جدید باید موارد موجود بررسی شوند.
- API typeهای route/domain بهتر است نزدیک همان domain قرار بگیرند.
- primitiveهای UI مشترک در آینده باید در `src/components/ui` ساخته شوند؛ کامپوننت‌های business-level در `src/components/app` و ماژول‌های feature-level در `src/components/modules`.
- آیکون‌های اختصاصی ابتدا باید در `src/components/Icons.tsx` اضافه شوند و در صورت نبودن، از `lucide-react` استفاده شود.

## فایل‌ها و پوشه‌هایی که معمولاً نباید دستی ویرایش شوند

| مسیر | دلیل |
| --- | --- |
| `node_modules/` | dependencyهای نصب‌شده؛ با package manager مدیریت می‌شود. |
| `.next/` | خروجی build/dev Next.js؛ تولیدی است. |
| `next-env.d.ts` | توسط Next.js تولید و به‌روزرسانی می‌شود. |
| `pnpm-lock.yaml` | فقط هنگام تغییر dependency یا نصب مجدد باید تغییر کند. |

## مسیر پیشنهادی برای توسعه قابلیت جدید

### اگر قابلیت یک صفحه مستقل است

1. یک فولدر جدید در `src/app` بسازید.
2. فایل `page.tsx` را برای route ایجاد کنید.
3. کامپوننت‌های مخصوص همان صفحه را در `_components` بگذارید.
4. hookهای مخصوص همان صفحه را در `_hooks` بگذارید.
5. typeهای مخصوص همان صفحه را در `_types` بگذارید.

نمونه:

```txt
src/app/dashboard/
├── page.tsx
├── _components/
├── _hooks/
└── _types/
```

### اگر قابلیت reusable است

- کامپوننت UI عمومی: `src/components/ui`
- کامپوننت یا feature module قابل استفاده در چند جا: `src/components/modules`
- hook مشترک: `src/hooks`
- API query/mutation: `src/services/queries` یا `src/services/mutations`
- type مشترک: `src/types` یا فایل نزدیک domain مربوطه

## نکات قابل توجه فعلی

- نام فولدر پروژه `nextjs15-reactquery` است، اما dependency فعلی پروژه Next.js نسخه `16.0.10` را استفاده می‌کند.
- بعضی متن‌های فارسی در `README.md` و برخی فایل‌های story/component به‌صورت mojibake دیده می‌شوند؛ احتمالاً در گذشته با encoding نادرست ذخیره یا خوانده شده‌اند.
- در `src/app/page.tsx` چند کلاس رنگی خام Tailwind مثل `blue-500` و `gray-900` دیده می‌شود؛ طبق قوانین فعلی پروژه، برای توسعه‌های بعدی بهتر است از tokenهای تعریف‌شده در `globals.css` استفاده شود.
- `src/services/queries/auth/useUserInfo.ts` و `src/services/mutations/auth/useAuthMutation.ts` بیشتر نقش نمونه/اسکلت دارند و منطق اصلی API آن‌ها کامنت شده است.
- پوشه‌های استاندارد `src/components/ui` و `src/components/app` هنوز در پروژه وجود ندارند و هنگام نیاز باید طبق قرارداد ساخته شوند.
