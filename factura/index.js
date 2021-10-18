import { Firm, Invoice, Item } from './model.js';

const app = function () {
  // DON Elements
  const nodesButton = document.querySelectorAll('button');
  console.log(nodesButton);
  // nodesButton = [...nodesButton];

  // EventListeners
  nodesButton.forEach((item) => item.addEventListener('click', onButtonClick));

  console.log('Loaded DOM');
  createInvoices();
};

function onButtonClick(ev) {
  ev.preventDefault();
  console.dir(ev);
  let baseMsg = 'Hecho click en';
  switch (ev.target.id) {
    case 'btn1':
      console.log(`${baseMsg} BTN1 - ${ev.target.dataset.foo}`);
      break;
    case 'btn2':
      console.log(`${baseMsg} en BTN2 ${ev.target.dataset.bar}`);
      break;
  }
}

function createInvoices() {
  const firm = new Firm(
    1,
    'Nosotros',
    'c/ Galaxia 23, Cádiz',
    956364582,
    '4346536634-Z'
  );
  let client = new Firm(
    'cl-023',
    'Smooth Hard',
    'c/ Estratosfera, Algeciras',
    956648235,
    '6345348382-D'
  );
  let items = [
    new Item(103, 'Portatil Acer', 1000, 1),
    new Item(205, 'Pantalla Asus', 200, 2),
  ];
  // let varRate = 0.21
  let invoice = new Invoice(firm, client, items);
  invoice.renderFactura('.page-facturas');

  // New invoice
  client = new Firm(
    'cl-042',
    'Escuelas Siderales',
    'c/ La Luna, San Fernando',
    956623532,
    '6346345382-D'
  );
  items = [
    new Item(103, 'Portatil Acer', 1000, 3),
    new Item(205, 'Pantalla Asus', 200, 6),
  ];
  const varRate = 0.16;
  invoice = new Invoice(firm, client, items, varRate, 'VISA');
  invoice.renderFactura('.page-facturas');
}

(() => {
  document.addEventListener('DOMContentLoaded', app);
})();
