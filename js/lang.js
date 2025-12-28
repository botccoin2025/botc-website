const translations = {
  en: {
    t_title: "BOTC — Botcoin Project",
    t_subtitle: "A community-driven crypto project built with responsibility, transparency, and long-term vision.",
    t_noticeTitle: "Important Notice",
    t_noticeP1: "Cryptocurrency involves risk. BOTC does not guarantee profits, returns, or financial gains of any kind.",
    t_noticeP2: "Nothing on this website constitutes financial advice.",
    t_footer: "© 2025 BOTC Project — All rights reserved."
  },

  pt: {
    t_title: "BOTC — Projeto Botcoin",
    t_subtitle: "Um projeto cripto orientado pela comunidade, com responsabilidade, transparência e visão de longo prazo.",
    t_noticeTitle: "Aviso Importante",
    t_noticeP1: "As criptomoedas envolvem riscos. O BOTC não garante lucros, retornos ou ganhos financeiros de qualquer tipo.",
    t_noticeP2: "Nada neste website constitui aconselhamento financeiro.",
    t_footer: "© 2025 Projeto BOTC — Todos os direitos reservados."
  },

  fr: {
    t_title: "BOTC — Projet Botcoin",
    t_subtitle: "Un projet crypto communautaire fondé sur la responsabilité, la transparence et une vision à long terme.",
    t_noticeTitle: "Avis Important",
    t_noticeP1: "Les cryptomonnaies comportent des risques. BOTC ne garantit aucun profit ni gain financier.",
    t_noticeP2: "Rien sur ce site ne constitue un conseil financier.",
    t_footer: "© 2025 Projet BOTC — Tous droits réservés."
  },

  de: {
    t_title: "BOTC — Botcoin Projekt",
    t_subtitle: "Ein gemeinschaftsorientiertes Krypto-Projekt mit Verantwortung, Transparenz und langfristiger Vision.",
    t_noticeTitle: "Wichtiger Hinweis",
    t_noticeP1: "Kryptowährungen sind mit Risiken verbunden. BOTC garantiert keine Gewinne oder finanziellen Erträge.",
    t_noticeP2: "Nichts auf dieser Website stellt eine Finanzberatung dar.",
    t_footer: "© 2025 BOTC Projekt — Alle Rechte vorbehalten."
  }
};

function setLang(lang) {
  Object.keys(translations[lang]).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerText = translations[lang][id];
  });
}

// idioma default
setLang("en");

