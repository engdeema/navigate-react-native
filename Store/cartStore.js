import { makeAutoObservable } from "mobx";

class CartStore {
  items = [
    {
      product: {
        _id: "6182a8b31bd7fa38942fdf23",
        name: "Cookie",
        price: 5,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 5,
    },
    {
      product: {
        _id: "6182a8b31bd7fa46652fdf88",
        name: "Another cookie",
        price: 15,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 3,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
  // شوفي فوق شكل الآيتمز فيها برودكت وفيها كوانتيتي
  // اهيا الفنكشن تضيفهم على الأراي
  addItemToCart = (product, quantity) => {
    // اول شي جيكي اذا البرودكت موجود او لا
    const foundItem = this.items.find(
      (item) => item.product._id === product._id
    );
    if (foundItem) {
      // اذا موجوده ابديت الموجود وضيفيها
      foundItem.quantity = quantity;
      // الموجوده في نيومرك انبت
    } else {
      const newItem = {
        // شي يشبه الدمي داتا يكون فيها برودكت وكوانتيتي
        product: product,
        // هذا البرودكت من الباكند
        quantity: quantity,
        // هذي من نيومرك فاليو من الستيت
      };
      this.items.push(newItem);
    }
  };
  // function that computes something and return a value
  // خاصيه كلاس
  get totalQuantity() {
    let total = 0;
    // استخدمنا فور ايج لاني مابي اغير القيمه بس ابي اشوف الناتج الكلي مال الجمع ف ماستخدم ماب
    this.items.forEach((item) => (total = total += item.quantity));
    // return 0;
    return total;
  }
}

const cartStore = new CartStore();
export default cartStore;
