import { Product } from "../../Interfaces/Product";

export class ProductItem {

  constructor(private product: Product) {

  }

  render() {
    return `
    <div class="card" style="width: 18rem; margin: 1rem">
      <img src="${this.product.image}" class="card-img-top" alt="${this.product.name}">
      <div class="card-body">
        <h5 class="card-title">${this.product.name}</h5>
        <p class="card-text">${this.product.price} zl</p>
        <a href="#" class="btn btn-outline-secondary">Buy now!</a>
      </div>
    </div>
    `
  }
}