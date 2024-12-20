import { ReactNode } from "react";
import { Categories, Dashboard, Meals, Orders, Tables } from "../pages";

// Define a type for the route structure
type Route = {
  id: number;
  path: string;
  component: ReactNode;
};

export const routes: Route[] = [
  {
    id: 1,
    path: '/',
    component: <Dashboard />,
  },
  {
    id: 5,
    path: '*',
    component: <Dashboard />,
  },
  {
    id: 6,
    path: '/meals',
    component: <Meals />,
  },
  {
    id: 2,
    path: '/orders',
    component: <Orders />,
  },
  {
    id: 2,
    path: '/categories',
    component: <Categories />,
  },
  {
    id: 3,
    path: '/tables',
    component: <Tables />,
  },
  // {
  //   id: 4,
  //   path: '/logout',
  //   component: <Logout />,
  // },
  // {
  //   id: 7,
  //   path: '/brands',
  //   component: <BrandPage />,
  // },
  // {
  //   id: 8,
  //   path: '/banner',
  //   component: <Banner />,
  // },
];
