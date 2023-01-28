import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { ProdutDetail } from "../components/ProductDetail";
import { Products } from "../components/Products";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: '/home',
    element: <Home />,
    isPrivate: false,
    hidden: false,
  },
  {
    id: 2,
    title: "Products",
    path: '/products',
    element: <Products />,
    isPrivate: true,
    hidden: false,
  },
  {
    id: 3,
    title: "ProductDetail",
    path: '/home/:id',
    element: <ProdutDetail />,
    isPrivate: true,
    hidden: false,
  },
  {
    id: 4,
    title: "Login",
    path: '/login',
    element: <Login />,
    isPrivate: false,
    hidden: true,
  },
]