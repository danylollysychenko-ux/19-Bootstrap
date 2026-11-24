const sw = document.getElementById('themeSwitch');
const label = document.getElementById('themeLabel');

sw.addEventListener('change', () => {
  const theme = sw.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-bs-theme', theme);
  label.textContent = theme === 'dark' ? 'Dark mode' : 'Light mode';
});
