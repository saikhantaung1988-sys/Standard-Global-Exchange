const container = document.getElementById('tradingview-widget');

const script = document.createElement('script');
script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
script.async = true;
script.type = 'text/javascript';

script.innerHTML = JSON.stringify({
  lineWidth: 2,
  lineType: 0,
  chartType: 'area',
  showVolume: true,
  fontColor: '#707070',
  gridLineColor: 'rgba(242, 242, 242, 0.06)',
  volumeUpColor: 'rgba(34, 171, 148, 0.5)',
  volumeDownColor: 'rgba(247, 82, 95, 0.5)',
  backgroundColor: 'rgba(0, 0, 0, 1)',
  widgetFontColor: '#DBDBDB',
  upColor: '#22ab94',
  downColor: '#f7525f',
  borderUpColor: '#22ab94',
  borderDownColor: '#f7525f',
  wickUpColor: '#22ab94',
  wickDownColor: '#f7525f',
  colorTheme: 'dark',
  isTransparent: false,
  locale: 'en',
  chartOnly: false,
  scalePosition: 'right',
  scaleMode: 'Normal',
  fontFamily: '-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif',
  valuesTracking: '1',
  changeMode: 'price-and-percent',
  symbols: [
    ['TVC:GOLD|1M|USD'],
    ['TVC:USOIL|1M|USD'],
    ['BITSTAMP:BTCUSD|1M|USD']
  ],
  dateRanges: ['1m|30', '3m|60', '12m|1D', '60m|1W', 'all|1M'],
  fontSize: '10',
  headerFontSize: 'small',
  autosize: true,
  dateFormat: "qq 'yy",
  lineColor: 'rgba(8, 153, 129, 1)',
  width: '100%',
  height: '100%',
  noTimeScale: false,
  hideDateRanges: false,
  hideMarketStatus: false,
  hideSymbolLogo: false
});

container.appendChild(script);