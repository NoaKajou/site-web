// Code pour changer dynamiquement la feuille de style
const button = document.getElementById('switch-style');
const stylesheet = document.getElementById('stylesheet');

button.addEventListener('click', () => {
  // Vérifie si le style actuel est style1.css
  if (stylesheet.getAttribute('href') === 'white.css') {
    // Change vers style2.css
    stylesheet.setAttribute('href', 'black.css');
  } else {
    // Sinon, revient à style1.css
    stylesheet.setAttribute('href', 'white.css');
  }
});

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
