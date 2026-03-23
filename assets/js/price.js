document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("tv-market-widget");

  const widget = document.createElement("script");
  widget.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
  widget.async = true;

  widget.innerHTML = JSON.stringify({
    colorTheme: "dark",
    dateRange: "12M",
    showChart: true,
    locale: "en",
    isTransparent: true,
    showSymbolLogo: true,
    showFloatingTooltip: false,
    backgroundColor: "#0f0f0f",
    width: "100%",
    height: "100%",

    plotLineColorGrowing: "rgba(41, 221, 169, 1)",
    plotLineColorFalling: "rgba(255, 97, 120, 1)",

    gridLineColor: "rgba(255,255,255,0.06)",
    scaleFontColor: "rgba(255,255,255,0.7)",

    tabs: [
      {
        
         title: "Crypto",
        symbols: [
          { s: "CRYPTO:BTCUSD", d: "Singapore Exchange"},
          { s: "CRYPTO:ETHUSD", d: "Singapore Exchange"},
          { s: "CRYPTO:BNBUSD", d: "Singapore Exchange"},
          { s: "CRYPTO:SOLUSD", d: "Singapore Exchange"},
          { s: "CRYPTO:XRPUSD", d: "Singapore Exchange"},
          { s: "TVC:USOIL", d: "Singapore Exchange"},
          { s: "TVC:GOLD", d: "Singapore Exchange"},
          { s: "CRYPTO:ADAUSD", d: "Singapore Exchange"},
          { s: "CRYPTO:DOGEUSD", d: "Singapore Exchange"},
          { s: "CRYPTO:AVAXUSD", d: "Singapore Exchange"}

          
        ]
      },
   {
      title: "Currency",
        symbols: [
          { s: "FX:EURUSD", d: "Singapore Exchange"},
          { s: "FX:GBPUSD", d: "Singapore Exchange"},
          { s: "FX:USDJPY", d: "Singapore Exchange"},
          { s: "FX:USDCHF", d: "Singapore Exchange"},
          { s: "FX:AUDUSD", d: "Singapore Exchange"},
          { s: "FX:USDCAD", d: "Singapore Exchange"},
          { s: "FX:NZDUSD", d: "Singapore Exchange"},
          { s: "FX:EURGBP", d: "Singapore Exchange"},
          { s: "FX:EURJPY", d: "Singapore Exchange"},
          { s: "FX:GBPJPY", d: "Singapore Exchange"}

        ]
      }
    ]
  });

  container.appendChild(widget);
});

document.addEventListener("DOMContentLoaded", function() {
    // ၁။ လက်ရှိရောက်နေတဲ့ Page နာမည်ကို ယူမယ်
    const path = window.location.pathname;
    const page = path.split("/").pop(); // ဥပမာ - index.html

    // ၂။ Page နဲ့ Icon နာမည် တွဲမယ်
    let currentIcon = "";

    if (page === "" || page === "index.html") {
        currentIcon = "home";
    } else if (page === "about.html") {
        currentIcon = "assets";
    } else if (page === "market.html") {
        currentIcon = "trade";
    } else if (page === "price.html") {
        currentIcon = "markets";
   } else if (page === "profile.html") {
        currentIcon = "profile";
    }

    // ၃။ Active ဖြစ်တဲ့ကောင်ကို Icon လဲမယ်
    if (currentIcon) {
        // Text အရောင်ပြောင်းဖို့ Class ထည့်မယ်
        const linkElement = document.getElementById('link-' + currentIcon);
        if (linkElement) {
            linkElement.classList.add('active');
        }
        
        // Image ကို -active.svg နဲ့ လဲလိုက်မယ်
        const imgElement = document.getElementById('icon-' + currentIcon);
        if (imgElement) {
            imgElement.src = `assets/media/nav-icons/${currentIcon}-active.svg`;
        }
    }
});