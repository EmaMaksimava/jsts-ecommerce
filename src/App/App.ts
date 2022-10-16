import { ProductsList } from "./Components/ProductsList";

export class App {

  private productList = new ProductsList();

  render() {
    return `
    <h1>App E-Commerce</h1>
    <div>
      ${this.productList.render()}
    </div>
    `;
  }
}