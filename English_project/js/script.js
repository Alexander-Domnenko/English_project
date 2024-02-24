
  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.header__link').forEach((link) => {
          let id = link.getAttribute('href').replace('#', '');
          if (id === entry.target.id) {
            link.classList.add('header__link--active');
          } else {
            link.classList.remove('header__link--active');
          }
        });
      }
    });
  }, {
    threshold: 1.0
  });
  
  document.querySelectorAll('.section').forEach(section => { observer.observe(section)} );