import { AppComponent } from "../../Interfaces/AppComponent";
import { Product } from "../../Interfaces/Product";
import { cartModel } from "../../Models/CartModel";

export class ProductItem implements AppComponent {

  constructor(private product: Product) {}

  private getHtmlId = () => `product_${this.product.id}`;

  render() {
    return `
    <div class="card shadow-sm p-3 mb-5 bg-body rounded" style="width: 18rem; margin: 1rem">
      <img src="${this.product.image}" class="card-img-top" alt="${this.product.name}">
      <div class="card-body">
        <h5 class="card-title">${this.product.name}</h5>
        <p class="card-text">${this.product.price} zl</p>
        <a href="#" class="btn btn-outline-secondary" id="${this.getHtmlId()}">Buy now!</a>
      </div>
    </div>
    `
  }

  addEvents() {
    const btn = document.getElementById(this.getHtmlId());
    if(!btn) {
      throw new Error('Button is undefined');
    }
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(this.product);
      cartModel.addProduct(this.product);
    });
  }
}