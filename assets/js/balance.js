// Update these selectors to your actual balance card elements
const BALANCE_EL = document.querySelector('#totalBalance');     // e.g. <span id="totalBalance">0.00</span>
const CURRENCY_EL = document.querySelector('#balanceCurrency'); // optional

function setBalanceUI(balance) {
  const n = Number(balance ?? 0);
  if (BALANCE_EL) BALANCE_EL.textContent = n.toFixed(2);
  // if you want: if (CURRENCY_EL) CURRENCY_EL.textContent = 'USDT';
}

async function loadMyBalance() {
  // 1) get session
  const { data: { session }, error: sessErr } = await db.auth.getSession();
  if (sessErr) { console.error(sessErr); return; }
  if (!session) return; // not logged in yet

  const userId = session.user.id; // uuid

  // 2) fetch my profile balance (match by profiles.id)
  const { data, error } = await db
    .from('profiles')
    .select('balance')
    .eq('id', userId)
    .single();

  if (error) { console.error('balance fetch error:', error); return; }
  setBalanceUI(data?.balance);
}

// Call on page load
document.addEventListener('DOMContentLoaded', loadMyBalance);

let balanceChannel = null;

async function subscribeMyBalance() {
  const { data: { session } } = await db.auth.getSession();
  if (!session) return;

  const userId = session.user.id;

  // avoid duplicate channel
  if (balanceChannel) db.removeChannel(balanceChannel);

  balanceChannel = db
    .channel('balance-watch-' + userId)
    .on(
      'postgres_changes',
      {
        event: 'UPDATE',
        schema: 'public',
        table: 'profiles',
        filter: `id=eq.${userId}`
      },
      (payload) => {
        // payload.new.balance has the latest value
        setBalanceUI(payload.new.balance);
      }
    )
    .subscribe();
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadMyBalance();       // initial load
  await subscribeMyBalance();  // live updates
});