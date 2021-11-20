import { makeAutoObservable } from "mobx";

import { instance } from "./instance";

class ShopStore {
  shops = [];
  isLoading = true;
  constructor() {
    makeAutoObservable(this);
  }

  fetchShop = async () => {
    try {
      const res = await instance.get("/shops");
      this.shops = res.data;
      this.isLoading = false;
    } catch (error) {}
  };

  shopCreate = async (newShop) => {
    try {
      const formData = new FormData();
      for (const key in newShop) {
        formData.append(key, newShop[key]);
      }
      const response = await instance.post("/shops", formData);
      this.shops.push(response.data);
    } catch (error) {}
  };
}
const shopStore = new ShopStore();
shopStore.fetchShop();
export default shopStore;
