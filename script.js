// Toggle tema claro/escuro
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// Verifica preferência do sistema ou salva
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Altera ícone do botão
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});