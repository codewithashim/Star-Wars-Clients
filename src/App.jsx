import { RouterProvider } from "react-router-dom";
import routes from "./router/router";

const App = () => {
  return (
    <main>
      <RouterProvider router={routes} />
    </main>
  );
};

export default App;