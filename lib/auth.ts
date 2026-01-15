import Cookies from "js-cookie";

export const login = () => {
  Cookies.set("auth", "true");
};

export const logout = () => {
  Cookies.remove("auth");
};

export const isLoggedIn = () => {
  return Cookies.get("auth") === "true";
};
