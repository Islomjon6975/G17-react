import { Home } from '../components/Home';
import { Products } from '../components/Products';
import { Login } from '../components/Login';

export const navbar = [
  {
    id: 1,
    title: 'Logo',
    path: '/',
    componenet: Home,
    isPrivate: false,
    hidden: false
  },
  {
    id: 2,
    title: 'Home',
    path: '/home',
    componenet: Home,
    isPrivate: false,
    hidden: false
  },
  {
    id: 3,
    title: 'Products',
    path: '/products',
    componenet: Products,
    isPrivate: true,
    hidden: false
  },
  {
    id: 4,
    title: 'Login',
    path: '/login',
    componenet: Login,
    isPrivate: false,
    hidden: false
  },
  {
    id: 5,
    title: 'Register',
    path: '/register',
    componenet: Home,
    isPrivate: false,
    hidden: true
  },
]