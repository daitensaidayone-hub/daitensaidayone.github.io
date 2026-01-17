//Gemini3にScriptを依頼、その後微調整
//ハンバーガーボタン
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.hamburger_button');
  const nav = document.querySelector('nav');

  const toggleMenu = () => {
    btn.classList.toggle('active');
    nav.classList.toggle('active');
  };

  btn.onclick = (e) => {
    e.stopPropagation();
    toggleMenu();
  };

  document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && !nav.contains(e.target)) {
      btn.classList.remove('active');
      nav.classList.remove('active');
    }
  });
});

//スクロールと同時にコンテンツ表示
document.addEventListener('DOMContentLoaded', () => {
  const options = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  const targets = document.querySelectorAll('.legend, .legend02');
  targets.forEach(target => {
    observer.observe(target);
  });
});
