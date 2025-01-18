// Exemple d'interactivité : Défilement fluide vers les sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fonction pour basculer entre les styles (alt.css et styles.css)
const styleToggleBtn = document.createElement('button');
styleToggleBtn.textContent = "Changer le style";
styleToggleBtn.style.position = "fixed";
styleToggleBtn.style.bottom = "20px";
styleToggleBtn.style.right = "20px";
styleToggleBtn.style.padding = "10px 20px";
styleToggleBtn.style.border = "none";
styleToggleBtn.style.borderRadius = "5px";
styleToggleBtn.style.backgroundColor = "#4caf50";
styleToggleBtn.style.color = "#fff";
styleToggleBtn.style.cursor = "pointer";

document.body.appendChild(styleToggleBtn);

let isAltStyle = false;
styleToggleBtn.addEventListener('click', () => {
  const currentStyle = document.querySelector('link[rel="stylesheet"]');
  if (currentStyle) {
    currentStyle.setAttribute(
      'href',
      isAltStyle ? 'styles.css' : 'styles-alt.css'
    );
    isAltStyle = !isAltStyle;
  }
});
