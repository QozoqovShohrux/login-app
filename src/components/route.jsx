import Login from "./login";
import Register from "./register";
export const route = [
 {path : "/login", component : Login, exact : true},
 {path : "/register", component : Register, exact : true}
]