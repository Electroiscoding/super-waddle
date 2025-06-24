(function () {
  const domain = document.currentScript.getAttribute('data-domain');
  if (!domain) return;

  const today = new Date();
  const key = `${domain}_${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;

  const clicks = Number(localStorage.getItem(key) || 0);
  localStorage.setItem(key, clicks + 1);
})();
