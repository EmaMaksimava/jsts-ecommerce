import { productsModel } from "../../Models/ProductsModel";
import { ProductItem } from "../ProductItem";
import { Product } from "../../Interfaces/Product";
import { appStore } from "../../Store/AppStore";



export class ProductsList {
  private loading = false;
  private error: Error | null = null;
  private products: Product[] = [];

  constructor() {
    this.fetchProducts()
  }

  fetchProducts() {
    this.loading = true;
    productsModel.getProducts()
      .then((products) => {
        this.products = products;
      })
      .catch((error) => {
        this.error = error;
      })
      .finally(() => {
        this.loading = false;
        appStore.$render.next(true);
      })
  }

  render() {
    return `<h2> Fashion for woman </h2>
    ${this.products
      .map((product) => new ProductItem(product))
      .map(product => product.render())
      .join('')}
    ${this.loading ? `
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>` : '' }
    ${this.error ? `<p>${this.error?.message}</p>` : '' }
    <div>
      <button>prev</button>
      <button>next</button>
    </div>
    `;

  }
}