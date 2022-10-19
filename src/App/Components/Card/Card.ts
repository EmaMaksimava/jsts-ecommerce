import { AppComponent } from "../../Interfaces/AppComponent";
import { appStore } from "../../Store/AppStore";
import { CartProducts } from "../../Store/State";

export class Card implements AppComponent {

  private cartProducts: CartProducts = {};
  private sumPrice = 0;
  private amount = 0;

  constructor() {
    appStore.$state.subscribe(({cart}) => {
      this.cartProducts = cart.products;
      this.amount = Object.keys(this.cartProducts).length;
      this.sumPrice = Object.values(this.cartProducts).reduce( (sum, item) => sum + item.product.price, 0);
    })
  }

  render() {
    return `
    <h3 class="fw-bold"> My Cart </h3>
    <div>
      <ul class="list-group" style="margin-top: 1em">
        ${Object.values(this.cartProducts).map(({amount, product}) => `
          <li class="list-group-item d-flex justify-content-between align-items-center">
          <p> ${product.name} </p>
          <p> ${product.price} </p>
          <a href="#" class="btn bg-secondary bg-gradient bg-opacity-10 fw-bolder">+</a>
          <a href="#" class="btn bg-secondary bg-gradient bg-opacity-10 fw-bolder">-</a>
          <span class="badge text-bg-info opacity-50 rounded-pill">${amount}</span>
        </li>
        `).join('')}



      </ul>
      <ul class="list-group ">
        <li class="list-group-item
                   d-flex justify-content-between
                   align-items-center
                   bg-warning
                   bg-opacity-10
                   fw-bold"> Summary: ${this.amount} products, ${this.sumPrice} zl </li>
    </div>
    `;
  }

  addEvents() {
    
  }
}