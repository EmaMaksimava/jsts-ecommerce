import { Product } from "../../Interfaces/Product";

export class ProductItem {

  constructor(private product: Product) {

  }

  render() {
    return `
    <div>
      <img src="${this.product.image}" alt="${this.product.name}">
      <h3>${this.product.name}</h3>
      <p>${this.product.price}</p>
    </div>
    `
  }
}