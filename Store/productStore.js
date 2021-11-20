import { makeAutoObservable } from "mobx";

import { instance } from "./instance";

class ProductStore {
  products = [];
  isLoading = true;
  constructor() {
    makeAutoObservable(this);
  }

  fetchProduct = async () => {
    try {
      const res = await instance.get("/products");
      this.products = res.data;
      this.isLoading = false;
    } catch (error) {}
  };

  productCreate = async (shop, newProduct) => {
    try {
      const formData = new FormData();
      for (const key in newProduct) {
        formData.append(key, newProduct[key]);
      }

      const res = await instance.post(`/shops/${shop._id}/products`, formData);
      //   console.log(newProduct);
      this.products.push(res.data);
      shop.products.push(res.data);
    } catch (error) {}
  };
}
const productStore = new ProductStore();
productStore.fetchProduct();
export default ProductStore;
