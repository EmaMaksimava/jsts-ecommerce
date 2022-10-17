import { ProductsList } from "./Components/ProductsList";

export class App {

  private productList = new ProductsList();

  render() {
    return `
    <h1>Mango Outlet</h1>
    <div>
      ${this.productList.render()}
    </div>
    `;
  }
}