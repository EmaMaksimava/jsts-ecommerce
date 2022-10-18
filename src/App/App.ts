import { ProductsList } from "./Components/ProductsList";

export class App {

  private productList = new ProductsList();

  render() {
    return `
    <h1>Mango Outlet</h1>

    <div class="container text-center">
      <div class="row">
        <div class="col-12">
        ${this.productList.render()}
        </div>
      </div>
    </div>

    `;
  }
}