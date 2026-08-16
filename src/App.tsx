import { RouterProvider } from "react-router";
import "./App.css";
import ReactQueryProvider from "./Providers/ReactQueryProvider";
import { router } from "./Router";

function App() {
  return (
    <>
      <ReactQueryProvider>
        <RouterProvider router={router} />
      </ReactQueryProvider>
    </>
  );
}

export default App;
