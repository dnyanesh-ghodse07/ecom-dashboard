
import TotalRevenue from "../components/dashboard/TotalRevenue";
import ProductSold from "../components/dashboard/ProductSold";
import TotalIncome from "../components/dashboard/TotalIncome";
import RecentOrder from "../components/dashboard/RecentOrder";
import TopProducts from "../components/dashboard/TopProducts";
import Traffic from "../components/dashboard/Traffic";

export const Home = () => {
  return (
    <main className="flex gap-4 rounded-md h-full">
      <div className="w-3/4 flex flex-col gap-3 h-[calc(100vh-100px)] overflow-auto scroll-smooth no-scrollbar">
        <TotalRevenue />
        <div className="flex gap-3 w-full">
          <ProductSold />
          <TotalIncome />
        </div>
        <RecentOrder />
      </div>
      <div className="w-1/4 flex flex-col gap-3 h-full">
        <TopProducts />
        <Traffic />
      </div>
    </main>
  );
};
