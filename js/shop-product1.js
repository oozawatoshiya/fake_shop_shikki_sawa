'use strict'

{
  // ----- product image ------

  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainProductImage = document.querySelector('#main-product-img');

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', ()=> {
      thumbnails.forEach(thumbnail => {
        thumbnail.classList.remove('active');
      });
      thumbnail.classList.add('active');
      mainProductImage.src = thumbnail.src;
    });
  });

  // ----- price -----

  const numberOfItem = document.querySelector('#noi');
  const totalPrice = document.querySelector('#total-price');

  numberOfItem.addEventListener('input', () => {
    totalPrice.textContent = `${(numberOfItem.value * 20000).toLocaleString()}`;
  });
}