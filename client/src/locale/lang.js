const LANG_KEY = "blazeLang";
let currentLang = localStorage.getItem(LANG_KEY) || "en"; // <-- Use stored language
let translations = {};

// List all translation files you want to load (without .json extension)
const TRANSLATION_FILES = [
  "data-model/telemetry",
];

function getTranslationFilePaths(lang) {
  console.log("Loading translation files for language:", lang);
  return TRANSLATION_FILES.map(
    (file) => `/client/src/locale/${lang}/${file}.json`);
}

function loadTranslations(lang) {
  const files = getTranslationFilePaths(lang);
  console.log(files);
  Promise.all(files.map((file) => fetch(file).then((res) => res.json())))
    .then((results) => {
      // Merge all loaded sections into one translations object
      translations = results.reduce((acc, obj) => {
        Object.assign(acc, obj);
        return acc;
      }, {});
      document.dispatchEvent(new Event("lang-changed"));
    });
}


export function setLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  loadTranslations(lang);
}

export function getCurrentLang() {
  return currentLang;
}

export function t(section, key, fallback = "") {
  return (translations[section] && translations[section][key]) || fallback || key;
}

// On load, load default language and trigger lang-changed after fetch
await loadTranslations(currentLang);

export { translations };






