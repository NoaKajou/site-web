document.addEventListener('DOMContentLoaded', () => {
  // Code pour changer dynamiquement la feuille de style
  const button = document.getElementById('switch-style');
  const stylesheet = document.getElementById('stylesheet');

  // Vérifiez si les éléments existent avant de les utiliser
  if (button && stylesheet) {
    button.addEventListener('click', () => {
      // Vérifie si le style actuel est white.css
      if (stylesheet.getAttribute('href') === 'white.css') {
        // Change vers black.css
        stylesheet.setAttribute('href', 'black.css');
      } else {
        // Sinon, revient à white.css
        stylesheet.setAttribute('href', 'white.css');
      }
    });
  } else {
    console.error('Les éléments avec les IDs #switch-style ou #stylesheet n\'ont pas été trouvés.');
  }

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
});
