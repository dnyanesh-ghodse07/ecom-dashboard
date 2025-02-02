import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineBarChart } from "react-icons/ai";
import { AiOutlineProduct } from "react-icons/ai";
import { AiOutlineTruck } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = () => {
  return (
    <aside className="bg-white p-4 w-50 h-full rounded-xl flex flex-col justify-between">
            <div>
              <h1 className="p-2 font-bold text-2xl">HerCart</h1>
              <ul>
                <SidebatListItem
                  label="Home"
                  path="/"
                  icon={<AiOutlineHome />}
                />
                <SidebatListItem
                  label="Customers"
                  path="/customers"
                  icon={<AiOutlineTeam />}
                />
                <SidebatListItem
                  label="Orders"
                  path="/orders"
                  icon={<AiOutlineShoppingCart />}
                />
                <SidebatListItem
                  label="Analytics"
                  path="/analytics"
                  icon={<AiOutlineBarChart />}
                />
                <SidebatListItem
                  label="Products"
                  path="/products"
                  icon={<AiOutlineProduct />}
                />
                <SidebatListItem
                  label="Shipments"
                  path="/shipments"
                  icon={<AiOutlineTruck />}
                />
              </ul>
            </div>
    
            <ul>
              <SidebatListItem
                label="Settings"
                path="/settings"
                icon={<AiOutlineSetting />}
              />
              <SidebatListItem
                label="Logout"
                path="/logout"
                icon={<AiOutlineLogout />}
              />
            </ul>
          </aside>
  )
}


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
      <li className="flex gap-2 items-center px-1 py-2 hover:bg-blue-100 rounded-md cursor-pointer">
        <span>{icon}</span>
        <Link className="text-sm" to={path}>{label}</Link>
      </li>
    );
  };


export default Sidebar