import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/page";
import Login from "./pages/login/page";
import EventDetail from "./pages/detail_event/page";
import CreateEvent from "./pages/create_event/page";
import Header from "./_components/header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export const router = createBrowserRouter([
  {

    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/detalle-evento/:id", 
        element: <EventDetail />,
      },
      {
        path: "/crear-evento",
        element: <CreateEvent />,
      },
    ],
  },
]);
