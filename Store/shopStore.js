import { makeAutoObservable } from "mobx";

import instance from "./instance";

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
}
const shopStore = new ShopStore();
shopStore.fetchShop();
export default shopStore;
