/* Calendar-day countdown in the wedding's Pennsylvania time zone.
   Date-only arithmetic avoids daylight-saving and visitor-time-zone errors. */
function weddingDaysRemaining(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York', year: 'numeric', month: 'numeric', day: 'numeric'
  }).formatToParts(now);
  const part = (name) => Number(parts.find((p) => p.type === name).value);
  const today = Date.UTC(part('year'), part('month') - 1, part('day'));
  return Math.round((Date.UTC(2027, 6, 24) - today) / 86400000);
}
function updateCountdown() {
  const number = document.getElementById('days-left');
  const label = document.getElementById('countdown-label');
  if (!number || !label) return;
  const days = weddingDaysRemaining();
  number.textContent = days > 0 ? String(days) : days === 0 ? 'Today' : 'Married';
  label.textContent = days > 0 ? (days === 1 ? 'day until we say I do' : 'days until we say I do') : days === 0 ? 'Our wedding day is here!' : 'July 24, 2027 • Forever begins';
}
updateCountdown();
setInterval(updateCountdown, 60000);
document.addEventListener('visibilitychange', updateCountdown);
document.querySelectorAll('details').forEach((current) => {
  current.addEventListener('toggle', () => {
    if (!current.open) return;
    document.querySelectorAll('details').forEach((other) => {
      if (other !== current) other.open = false;
    });
  });
});
