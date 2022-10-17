import { productsModel } from "../../Models/ProductsModel";
import { ProductItem } from "../ProductItem";
import { Product } from "../../Interfaces/Product";



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
  }

  render() {
    return `<h2> Product title</h2>
    ${this.products
      .map((product) => new ProductItem(product))
      .map(product => product.render())
      .join('')}
    ${this.loading ? '<p>Loading...</p>' : '' }
    ${this.error ? `<p>${this.error?.message}</p>` : '' }
    <div>
      <button>prev</button>
      <button>next</button>
    </div>
    `;

  }
}