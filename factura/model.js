export class Firm {
  id;
  name;
  address;
  phone;
  nif;
  constructor(id, name, address, phone, nif) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.nif = nif;
  }
}

export class Item {
  code;
  description;
  price;
  amount;
  constructor(code, description = '', price = 0, amount = 0) {
    this.code = code;
    this.description = description;
    this.price = price;
    this.amount = amount;
  }
}

class Document {
  firm;
  constructor(firm) {
    this.firm = firm;
  }
  renderDocument(elementID, htmlDocument) {
    console.log(elementID);
    document.querySelector(elementID).innerHTML += htmlDocument;
  }
}

export class Invoice extends Document {
  client;
  items;
  vatRate;
  paymentMethod;
  totalAmount = 0;
  htmlOutput;
  constructor(
    firm,
    client,
    items,
    vatRate = 0.21,
    paymentMethod = 'transferencia'
  ) {
    super(firm);
    this.client = client;
    // client
    this.items = items;
    this.vatRate = vatRate;
    this.paymentMethod = paymentMethod;
  }
  addItem(item) {
    this.items = [...items, item];
  }
  calcTotal(withVat = false) {
    const amounts = this.items.map((item) => item.price * item.amount);
    let totalAmount = amounts.reduce((total, item) => total + item);
    if (withVat) {
      totalAmount += totalAmount * this.vatRate;
    }
    console.log('totalAmount', totalAmount);
    return totalAmount;
  }

  formatHTML() {
    const totalSum = this.calcTotal();
    const totalIva = totalSum * this.vatRate;
    const finalAmmount = totalSum + totalIva;
    const htmlFirm = `
      <div class="firm">
        <p class="firm__name">${this.firm.name}</p>
        <p class="firm__address">${this.firm.address}</p>
        <p class="firm__phone">Teléfono: ${this.firm.phone}</p>
        <p class="firm__nif">NIF: ${this.firm.nif}</p>
      </div>
    `;
    const htmlClient = `
      <div class="client">
        <p class="client__name">${this.client.name}</p>
        <p class="client__address">${this.client.address}</p>
        <p class="client__phone">Teléfono: ${this.client.phone}</p>
        <p class="client__nif">NIF: ${this.client.nif}</p>
      </div>
    `;
    const htmllPaymentData = `
      <div class="payment-data">
        <p class="payment-data__method">Forma de pago: ${this.paymentMethod}</p>
        <p class="payment-data__vat-rate">Tipo de IVA (%): ${this.vatRate}</p>
        <p class="payment-data__total-sum">
          Importe (sin IVA): ${totalSum.toLocaleString('de-DE')} €
        </p>
        <p class="payment-data__total-vat">IVA: ${totalIva} €</p>
        <p class="payment-data__final-ammount">
          Total: ${finalAmmount.toLocaleString('de-DE')} €
        </p>
      </div>
    `;
    let htmlTableBody = '<tbody class="items-table__body">';
    this.items.forEach((item) => {
      htmlTableBody += `
        <tr>
          <td>${item.code}</td>
          <td>${item.description}</td>
          <td>${item.amount}</td>
          <td>${item.price.toLocaleString('de-DE')} €</td>
        </tr>
      `;
    });
    htmlTableBody += '</tbody>';

    this.htmlOutput = `
      <header class="header">
        <h1>Factura</h1>
      </header>
      ${htmlFirm}
      ${htmlClient}
      <div class="items">
        <table class="items-table">
          <thead class="items-table__header">
            <tr>
              <th>Código</th>
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          ${htmlTableBody}
        </table>
      </div>
      ${htmllPaymentData}
    </div>`;
  }

  renderFactura(elementID) {
    this.formatHTML();
    this.renderDocument(elementID, this.htmlOutput);
  }
}
