import { productsModel } from "../../Models/ProductsModel";
import { ProductItem } from "../ProductItem";
import { Product } from "../../Interfaces/Product";
import { appStore } from "../../Store/AppStore";
import { AppComponent } from "../../Interfaces/AppComponent";



export class ProductsList implements AppComponent {
  private loading = false;
  private error: Error | null = null;
  private products: Product[] = [];
  private productsComponents:ProductItem[] = [];

  constructor() {
    this.fetchProducts();
    appStore.$state.subscribe(({ products }) => {
      this.products = products;
      this.productsComponents = this.products.map((product) => new ProductItem(product));

      if(products.length) {
        this.error = null;
        this.loading = false;
      }
    })
  }

  fetchProducts() {
    this.loading = true;
    appStore.update({});
    productsModel.getProducts()
      .catch((error) => {
        this.error = error;
        this.loading = false;
      })
  }

  render() {
    return `<h2> Fashion for woman </h2>
    <div style="display:flex; flex-wrap: wrap">
      ${this.productsComponents
        .map(product => product.render())
        .join('')}
    </div>

    ${this.loading ? `
      <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>` : '' }
    ${this.error ? `
      <div class="alert alert-warning" role="alert">
      ${this.error?.message}
      </div>
      ` : '' }
    <div>
      <button type="button" class="btn btn-outline-secondary">Previous</button>
      <button type="button" class="btn btn-outline-secondary">Next</button>
    </div>
    `;

  }

  addEvents() {
    this.productsComponents.forEach(component => component.addEvents());
  }
}