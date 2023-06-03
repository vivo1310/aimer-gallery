import Home from "../components/Home";
import BetiRoom from "../components/rooms/BetiRoom";
import DormRoom from "../components/rooms/DormRoom";
import MasterRoom from "../components/rooms/MasterRoom";

export const rooms = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Beti Room",
    path: "single-beti",
    element: <BetiRoom />,
  },
  {
    name: "Master Room",
    path: "master",
    element: <MasterRoom />,
  },
  {
    name: "Dorm Room",
    path: "dorm",
    element: <DormRoom />,
  },
];

// extract only path and element for createBrowserRouter object
export const routes = rooms.map((item) => {
  return { path: item.path, element: item.element };
});
