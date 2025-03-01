import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineBarChart } from "react-icons/ai";
import { AiOutlineProduct } from "react-icons/ai";
import { AiOutlineTruck } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { logoutUser } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";


const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>()
  
  const handleLogout = () => {
    dispatch(logoutUser());
  }

  return (
    <aside className="bg-white p-4 w-50 h-full rounded-xl flex flex-col justify-between">
      <div>
        <h1 className="p-2 font-bold text-2xl">HerCart</h1>
        <ul className="flex flex-col gap-2">
          <SidebatListItem label="Home" path="home" icon={<AiOutlineHome />} />
          <SidebatListItem
            label="Customers"
            path="customers"
            icon={<AiOutlineTeam />}
          />
          <SidebatListItem
            label="Orders"
            path="orders"
            icon={<AiOutlineShoppingCart />}
          />
          <SidebatListItem
            label="Analytics"
            path="analytics"
            icon={<AiOutlineBarChart />}
          />
          <SidebatListItem
            label="Products"
            path="products"
            icon={<AiOutlineProduct />}
          />
          <SidebatListItem
            label="Shipments"
            path="shipments"
            icon={<AiOutlineTruck />}
          />
        </ul>
      </div>

      <ul className="flex flex-col gap-2">
        <SidebatListItem
          label="Settings"
          path="settings"
          icon={<AiOutlineSetting />}
        />
        <button
          className="text-sm px-1 rounded-md cursor-pointer flex gap-2 items-center text-red-500"
          onClick={handleLogout}
        >
          <li className="flex gap-2 items-center px-1 py-2  rounded-md cursor-pointer">
            <span>
              <AiOutlineLogout />
            </span>
            Logout
          </li>
        </button>
      </ul>
    </aside>
  );
};

const SidebatListItem = ({
  label,
  path,
  icon,
}: {
  label: string;
  path: string;
  icon: string | ReactElement;
}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `text-sm px-1 rounded-md cursor-pointer flex gap-2 items-center
      ${isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`
      }
      to={path}
      end
    >
      <li className="flex gap-2 items-center px-1 py-2  rounded-md cursor-pointer">
        <span>{icon}</span>
        {label}
      </li>
    </NavLink>
  );
};

export default Sidebar;
