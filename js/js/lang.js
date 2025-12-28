const translations = {
  en: {
    title: "BOTC — Botcoin Project",
    subtitle: "A community-driven crypto project built with responsibility, transparency, and long-term vision."
  },
  pt: {
    title: "BOTC — Projeto Botcoin",
    subtitle: "Um projeto cripto orientado pela comunidade, com responsabilidade, transparência e visão de longo prazo."
  },
  fr: {
    title: "BOTC — Projet Botcoin",
    subtitle: "Un projet crypto communautaire fondé sur la responsabilité, la transparence et une vision à long terme."
  },
  de: {
    title: "BOTC — Botcoin Projekt",
    subtitle: "Ein gemeinschaftsorientiertes Krypto-Projekt mit Verantwortung, Transparenz und langfristiger Vision."
  }
};

function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyLang(lang);
}

function applyLang(lang) {
  document.querySelector("h1").innerText = translations[lang].title;
  document.querySelector(".subtitle").innerText = translations[lang].subtitle;
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  applyLang(lang);
});
