const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Simple theme toggle (dark-only palette with subtle accent change)
const toggle = document.getElementById('themeToggle');
if (toggle) {
  const root = document.documentElement;
  const dark = {
    bg: '#0b0f14', bgElev: '#121820', text: '#e6edf3', muted: '#9fb0c3', primary: '#4cc9f0', accent: '#a96bf5'
  };
  const alt = {
    bg: '#0b1016', bgElev: '#141a22', text: '#eef2f7', muted: '#9aa8b8', primary: '#5de1f7', accent: '#8f79ff'
  };
  let isAlt = false;
  toggle.addEventListener('click', () => {
    const palette = isAlt ? dark : alt;
    root.style.setProperty('--bg', palette.bg);
    root.style.setProperty('--bg-elev', palette.bgElev);
    root.style.setProperty('--text', palette.text);
    root.style.setProperty('--muted', palette.muted);
    root.style.setProperty('--primary', palette.primary);
    root.style.setProperty('--accent', palette.accent);
    isAlt = !isAlt;
  });
}
