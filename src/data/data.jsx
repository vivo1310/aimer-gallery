import BetiRoom from "/src/components/BetiRoom.jsx";
import Home from "/src/components/Home.jsx";
import MasterRoom from "/src/components/MasterRoom.jsx";
import DormRoom from "/src/components/DormRoom.jsx";

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
