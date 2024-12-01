
import { Outlet } from "react-router-dom";
import {Header} from "../../pages/Header";

export const Layout = () => {

  return (
    <div  className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <Header />
      <main className="mt-16 pt-5">
        <Outlet /> {/* Render nested routes here */}



      </main>
    </div>
  );
};
