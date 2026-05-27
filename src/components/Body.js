import { createBrowserRouter } from "react-router";
import Browse from "./Browse";
import { RouterProvider } from "react-router/dom";
import Login from "./Login";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
