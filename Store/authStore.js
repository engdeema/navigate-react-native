import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import { instance } from "./instance";
class UserAuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }
  signup = async (userData, navigation, toast) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
      navigation.navigate("CartList");

      //   history.push("/");
    } catch (error) {
      toast.show({
        title: "Check your user name/password",
        // status:"info" يطلع شكل ثاني
        status: "error",
        description: "Wrong Password",
      });
    }
  };

  signin = async (user, navigation, toast) => {
    try {
      const res = await instance.post("/signin", user);
      this.setUser(res.data.token);
      //navigate ترد اليوزر مره ثانيه يطلع
      //   navigation.navigate("Home");
      // i want to go checkout after i finish so i will not put home
      //   navigation.replace("Home");
      // also i want to go back to cartlist and it is like my brevious plase so i use goback
      //   navigation.replace("CartList");
      navigation.goBack();
    } catch (error) {
      toast.show({
        title: "Check your user name/password",
        // status:"info" يطلع شكل ثاني
        status: "error",
        description: "Wrong Password",
      });
    }
  };
  setUser = (token) => {
    localStorage.setItem("myToken", token);
    // any req. from backend it will stay in header
    this.user = decode(token);
    instance.defaults.headers.common.Authorization = `bearer ${token}`;
  };
  logout = () => {
    delete instance.defaults.headers.common.Authorization;
    // localStorage.removeItem("myToken");
    this.user = null;
  };
  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const currenTime = Date.now();
      let tempUser = decode(token);
      if (tempUser.exp >= currenTime) {
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}
// }
const userAuthStore = new UserAuthStore();
// userAuthStore.checkForToken();
export default userAuthStore;
