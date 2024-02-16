'use strict'

{
/* ----- sp-menu-overlay ----- */

  const spMenuOpen = document.querySelector('#sp-overlay-open');
  const spMenuClose = document.querySelector('#sp-overlay-close');
  const spMenuLis = document.querySelectorAll('.sp-menu li');

  spMenuOpen.addEventListener('click', () => {
    document.querySelector('.sp-menu-overlay').classList.add('menu-open');
    spMenuOpen.classList.add('dot-hidden');
  });

  spMenuClose.addEventListener('click', () => {
    document.querySelector('.sp-menu-overlay').classList.remove('menu-open');
    spMenuOpen.classList.remove('dot-hidden');
  });

  for (let i = 1; i < spMenuLis.length; i++) {
    spMenuLis[i].addEventListener('click', () => {
      document.querySelector('.sp-menu-overlay').classList.remove('menu-open');
      spMenuOpen.classList.remove('dot-hidden');
    })
  }
  
  // spMenuLis.forEach(li => {
  //   li.addEventListener('click', () => {
  //     document.querySelector('.sp-menu-overlay').classList.remove('menu-open');
  //     spMenuOpen.classList.remove('dot-hidden');
  //   });
  // })



/* ----- main image observer ----- */

  const productTargets = document.querySelectorAll('.product-img');

  function productCallback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('popup');
        obs.unobserve(entry.target);
      }
    });
  }

  const productOptions = {
    threshold: .4,
  };

  const productObserver = new IntersectionObserver(productCallback, productOptions);

  productTargets.forEach(target => {
    productObserver.observe(target);
  });

  /* ----- slide-menu ----- */

  const slideMenuItems = document.querySelectorAll('.slide-menu li a');
  const slideMenuSections = document.querySelectorAll('.slide-menu-content')

  slideMenuItems.forEach(item => {
    item.addEventListener('click', (e)=> {
      e.preventDefault();
      slideMenuItems.forEach(el => {
        el.classList.remove('active');
      })
      item.classList.add('active');
      slideMenuSections.forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(item.dataset.id).classList.add('active');
    });
  });
  
  /* ----- main sp-menu ----- */

  const spMenuItems = document.querySelector('#sp-menu-items');
  const spMenu = document.querySelector('.sp-menu');
  const spMenuLists = document.querySelector('.sp-menu-lists')
  const spLists = spMenuLists.children;

  spMenuItems.addEventListener('click', (e) => {
    e.preventDefault();
    spMenu.classList.toggle('open');
  })

  for (let i = 0; i < spLists.length; i++) {
    spLists[i].addEventListener('click', () => {
      spMenu.classList.remove('open');
    })
  }

  /* ----- main pc-menu ----- */

  const pcMenuItems = document.querySelector('#pc-menu-items');
  const pcMenu = document.querySelector('.pc-menu');
  const pcMenuLists = document.querySelector('.pc-menu-lists')
  const pcLists = pcMenuLists.children;

  pcMenuItems.addEventListener('click', (e) => {
    e.preventDefault();
    pcMenu.classList.toggle('open');
  })

  for (let i = 0; i < pcLists.length; i++) {
    pcLists[i].addEventListener('click', () => {
      pcMenu.classList.remove('open');
    })
  }

  /* ----- aside ----- */

  const asideDts = document.querySelectorAll('aside dl dt');

  asideDts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('open');

      asideDts.forEach(el => {
        if (dt !== el) {
          el.parentNode.classList.remove('open');
        }
      });
    });
  });

}