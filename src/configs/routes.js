import React from 'react'
import HomePage from "../pages/Home"
import NotFoundPage from "../pages/NotFound"
const routes = [
  {
    path: "/",
    exact: true,
    component: () => <HomePage />
  },
  {
    path: "",
    exact: true,
    component: () => <NotFoundPage />
  }
]

export default routes