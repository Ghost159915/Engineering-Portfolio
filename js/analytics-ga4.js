(function () {
  const config = window.SITE_CONFIG || {};
  const measurementId = (config.gaMeasurementId || "").trim();

  if (!measurementId || measurementId === "G-XXXXXXXXXX") return;
  if (!/^G-[A-Z0-9]+$/.test(measurementId)) return;
  if (window.__ga4Initialized) return;
  window.__ga4Initialized = true;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
  document.head.appendChild(script);

  window.gtag("js", new Date());
  // Portfolio-friendly defaults: analytics only, no ads personalization.
  window.gtag("config", measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
})();

