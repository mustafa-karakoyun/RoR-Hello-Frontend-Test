import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

// @ts-ignore - ESBuild eklentisinin 'default' importuyla ilgili olası tip çakışmalarını yoksay
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    // Adım 1: Test edilecek FRONTEND (Arayüz) uygulamasının adresi.
    // Rails API 3000'de çalışacağı için, Next.js (npm run dev) 3001 portunda başlayacaktır.
    baseUrl: "http://localhost:3001",

    // Adım 2: Test edilecek BACKEND (API) adresi.
    // Bunu bir 'env' değişkenine kaydediyoruz ki testlerin içinde kullanabilelim.
    env: {
      API_URL: "http://127.0.0.1:3000/api/v1"
    },
    
    // Adım 3: Test dosyaları olarak *.feature dosyalarını ara (BDD için)
    specPattern: "cypress/e2e/**/*.feature",

    // Adım 4: CI/CD için video kaydını aç
    video: true,

    async setupNodeEvents(on, config) {
      // Cucumber/Gherkin'i Cypress'e tanıt
      await addCucumberPreprocessorPlugin(on, config);

      // Dosya ön-işlemcisi (preprocessor) olarak ESBuild'i ayarla
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Mutlaka config'i geri döndür
      return config;
    },
  },
});