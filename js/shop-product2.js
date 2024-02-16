'use strict'

{
  // ----- price -----

  const numberOfItem = document.querySelector('#noi');
  const totalPrice = document.querySelector('#total-price');

  numberOfItem.addEventListener('input', () => {
    totalPrice.textContent = `${(numberOfItem.value * 8800).toLocaleString()}`;
  });
}