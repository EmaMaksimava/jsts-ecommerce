import { Card } from "./Components/Card";
import { ProductsList } from "./Components/ProductsList";

export class App {

  private productList = new ProductsList();
  private card = new Card();

  render() {
    return `
    <h1>Mango Outlet</h1>

    <div class="container text-center">
      <div class="row">
        <div class="col-3">
        ${this.card.render()}
        </div>
        <div class="col-9">
        ${this.productList.render()}
        </div>
      </div>
    </div>

    `;
  }
}