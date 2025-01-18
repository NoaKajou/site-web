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
  const styleLink = document.getElementById('style-link');
  const switchButton = document.getElementById('switch-style');

  switchButton.addEventListener('click', () => {
    if (styleLink.getAttribute('href') === 'styles.css') {
      styleLink.setAttribute('href', 'styles-alt.css');
    } else {
      styleLink.setAttribute('href', 'styles.css');
    }
  });