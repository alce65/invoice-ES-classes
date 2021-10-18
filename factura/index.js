import { Firm, Invoice, Item } from './model.js';

const app = function () {
  console.log('Loaded DOM');
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
};

(() => {
  document.addEventListener('DOMContentLoaded', app);
})();
