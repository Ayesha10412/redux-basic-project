import App from "@/App";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // Component:App,
    children: [
      {
        path: "user",
        element: <User></User>,
      },
      {
        // path: "tasks",
        index: true,
        element: <Tasks></Tasks>,
      },
      {
        path: "tasks",
        element: <Tasks></Tasks>,
      },
    ],
  },
]);
export default router;
