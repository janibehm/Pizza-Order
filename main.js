const form = document.querySelector('form');
//all inputs
const customer = document.querySelector('#name');
const size = document.querySelectorAll('[name="size"]');
const toppings = document.querySelectorAll('input[type="checkbox"]');
const delivery = document.querySelector('#delivery');

//all outputs
const order_name = document.querySelector('#order_name');
const order_size = document.querySelector('#order_size');
const order_toppings = document.querySelector('#order_toppings');
const order_delivery = document.querySelector('#order_delivery');
const order_price = document.querySelector('#order_price');

const myFunctjon = () => {
  let customerName = customer.value;
  let sizeResult = '';
  let sizeText = '';
  let toppingsResult = [];
  let deliveryResult = delivery.options[delivery.selectedIndex].value;

  let price = 0;

  size.forEach((item) => {
    if (item.checked) {
      sizeResult = item.value;
      sizeText = `pizza for ${sizeResult}`;
    }
  });

  switch (sizeResult) {
    case 'two':
      price += 7.5;
      order_size.textContent = sizeText;
      break;
    case 'four':
      price += 10.5;
      order_size.textContent = sizeText;
      break;
    case 'six':
      price += 12.5;
      order_size.textContent = sizeText;
      break;
    case 'eight':
      price += 15.5;
      order_size.textContent = sizeText;
      break;
  }

  toppings.forEach((item) => {
    if (item.checked) {
      toppingsResult.push(item.value);
    }
  });

  if (toppingsResult.length > 4) {
    price += (toppingsResult.length - 4) * 0.5;
  }

  if (deliveryResult == 'home') {
    price += 5;
  }

  if (deliveryResult != 'empty') {
    order_delivery.textContent = deliveryResult;
  }

  order_name.textContent = customerName;
  order_toppings.textContent = toppingsResult.join(', ');
  order_price.textContent = price + `€`;
};

form.addEventListener('input', myFunctjon);
