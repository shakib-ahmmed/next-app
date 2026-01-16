import Cookies from "js-cookie";

const EMAIL = "admin@example.com";
const PASSWORD = "password123";

export function login(email: string, password: string) {
  if (email === EMAIL && password === PASSWORD) {
    Cookies.set("auth", "true", { expires: 1 });
    return true;
  }
  return false;
}

export function isLoggedIn() {
  return Cookies.get("auth") === "true";
}

export function logout() {
  Cookies.remove("auth");
}
