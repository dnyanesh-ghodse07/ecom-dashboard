import ProductSold from "../components/dashboard/ProductSold";
import RecentOrder from "../components/dashboard/RecentOrder";
import TopProducts from "../components/dashboard/TopProducts";
import TotalIncome from "../components/dashboard/TotalIncome";
import TotalRevenue from "../components/dashboard/TotalRevenue";
import Traffic from "../components/dashboard/Traffic";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="p-4 bg-gray-100 w-screen h-screen flex gap-3">
      <Sidebar />
      <section className="w-full h-full flex flex-col gap-3">
        <Header />
        <main className="flex gap-4 rounded-md h-full">
          <div className="w-2/3 flex flex-col gap-3 h-[calc(100vh-100px)] overflow-auto scroll-smooth no-scrollbar">
            <TotalRevenue />
            <div className="flex gap-3 w-full">
              <ProductSold />
              <TotalIncome />
            </div>
            <RecentOrder />
          </div>
          <div className="w-1/3 flex flex-col gap-3 h-full">
            <TopProducts />
            <Traffic />
          </div>
        </main>
      </section>
    </div>
  );
};

export default Dashboard;
