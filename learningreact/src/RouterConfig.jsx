import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import HelloWorld from "./basics/HelloWorld";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <HelloWorld></HelloWorld>,
      },
    ],
  },
]);

export default router;
