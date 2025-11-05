# RoR-Hello-Frontend-Test

Bu proje, Next.js ile geliştirilmiş bir frontend ve Cypress+Cucumber ile yazılmış uçtan uca testleri içerir. Backend olarak Ruby on Rails API (hello_app) ile entegre çalışır.


## Özellikler
- Kullanıcıları listeleme
- Yeni gönderi oluşturma
- Hatalı durumlar için uyarı mesajları
- Cypress+Cucumber ile BDD tabanlı testler

## Kurulum
1. Depoyu klonlayın:
	```bash
	git clone https://github.com/mustafa-karakoyun/RoR-Hello-Frontend-Test.git
	cd RoR-Hello-Frontend-Test
	```
2. Bağımlılıkları yükleyin:
	```bash
	npm install
	```
3. Next.js frontend’i başlatın:
	```bash
	npm run dev -- -p 3001
	```
4. Rails API’yi başlatın (ayrı terminalde):
	```bash
	bundle exec rails s
	```

## Testler
- Cypress testlerini çalıştırmak için:
  ```bash
  npx cypress run
  ```
- Test videoları `cypress/videos` klasöründe saklanır.

## Yapı
- `app/` : Next.js frontend sayfaları
- `cypress/e2e/features/` : Feature dosyaları ve step definitions
- `.cypress-cucumber-preprocessorrc.json` : Cucumber step dosyası yolu
- `cypress.config.ts` : Cypress ve Cucumber yapılandırması

## Notlar
- API adresi ve CORS ayarlarının doğru olduğundan emin olun.
- Testler için hem frontend hem de backend sunucusu açık olmalıdır.

---

**Hazırlayan:** Mustafa Karakoyun
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
