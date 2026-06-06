import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import Browse from "./components/Browse";
import Login from "./components/Login";

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

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
