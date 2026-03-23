const tradeTime = document.getElementById('trade-time');
const tradeAmount = document.getElementById('trade-amount');
const buyBtn = document.getElementById('buy-btn');
const sellBtn = document.getElementById('sell-btn');

buyBtn.addEventListener('click', () => {
  const payload = {
    type: 'buy',
    time: tradeTime.value,
    amount: Number(tradeAmount.value || 0),
  };

  console.log('BUY ORDER =>', payload);
});

sellBtn.addEventListener('click', () => {
  const payload = {
    type: 'sell',
    time: tradeTime.value,
    amount: Number(tradeAmount.value || 0),
  };

  console.log('SELL ORDER =>', payload);
});

