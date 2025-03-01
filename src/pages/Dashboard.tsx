import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {

  return (
    <div className="p-4 bg-gray-100 w-screen h-screen flex gap-3">
      <Sidebar />
      <section className="w-full h-full flex flex-col gap-3">
        <Header />
        <Outlet/>
      </section>
    </div>
  );
};

export default Dashboard;
