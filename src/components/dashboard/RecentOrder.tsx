import React from "react";

const RecentOrder = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 h-full">
      <h1 className="text-xl font-bold mb-4">Recent Order</h1>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Customer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b">1</td>
            <td className="px-4 py-2 border-b">Apple Watch</td>
            <td className="px-4 py-2 border-b">23/12/2022</td>
            <td className="px-4 py-2 border-b text-green-500">Delivered</td>
            <td className="px-4 py-2 border-b">$500</td>
            <td className="px-4 py-2 border-b">John Doe</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">2</td>
            <td className="px-4 py-2 border-b">MacBook Pro</td>
            <td className="px-4 py-2 border-b">20/12/2022</td>
            <td className="px-4 py-2 border-b text-yellow-500">Shipping</td>
            <td className="px-4 py-2 border-b">$1000</td>
            <td className="px-4 py-2 border-b">Jane Doe</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">3</td>
            <td className="px-4 py-2 border-b">iPhone 12</td>
            <td className="px-4 py-2 border-b">18/12/2022</td>
            <td className="px-4 py-2 border-b text-red-500">Cancelled</td>
            <td className="px-4 py-2 border-b">$800</td>
            <td className="px-4 py-2 border-b">Alice Smith</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">4</td>
            <td className="px-4 py-2 border-b">Samsung Galaxy S21</td>
            <td className="px-4 py-2 border-b">15/12/2022</td>
            <td className="px-4 py-2 border-b text-green-500">Delivered</td>
            <td className="px-4 py-2 border-b">$900</td>
            <td className="px-4 py-2 border-b">Bob Johnson</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">5</td>
            <td className="px-4 py-2 border-b">Sony Headphones</td>
            <td className="px-4 py-2 border-b">10/12/2022</td>
            <td className="px-4 py-2 border-b text-yellow-500">Shipping</td>
            <td className="px-4 py-2 border-b">$200</td>
            <td className="px-4 py-2 border-b">Charlie Brown</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">6</td>
            <td className="px-4 py-2 border-b">Dell XPS 13</td>
            <td className="px-4 py-2 border-b">08/12/2022</td>
            <td className="px-4 py-2 border-b text-green-500">Delivered</td>
            <td className="px-4 py-2 border-b">$1200</td>
            <td className="px-4 py-2 border-b">David Williams</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">7</td>
            <td className="px-4 py-2 border-b">Google Pixel 6</td>
            <td className="px-4 py-2 border-b">05/12/2022</td>
            <td className="px-4 py-2 border-b text-red-500">Cancelled</td>
            <td className="px-4 py-2 border-b">$700</td>
            <td className="px-4 py-2 border-b">Emily Davis</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">8</td>
            <td className="px-4 py-2 border-b">Amazon Echo</td>
            <td className="px-4 py-2 border-b">02/12/2022</td>
            <td className="px-4 py-2 border-b text-green-500">Delivered</td>
            <td className="px-4 py-2 border-b">$100</td>
            <td className="px-4 py-2 border-b">Fiona Green</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">9</td>
            <td className="px-4 py-2 border-b">Garmin Watch</td>
            <td className="px-4 py-2 border-b">30/11/2022</td>
            <td className="px-4 py-2 border-b text-yellow-500">Shipping</td>
            <td className="px-4 py-2 border-b">$250</td>
            <td className="px-4 py-2 border-b">George Martin</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">10</td>
            <td className="px-4 py-2 border-b">Nintendo Switch</td>
            <td className="px-4 py-2 border-b">28/11/2022</td>
            <td className="px-4 py-2 border-b text-green-500">Delivered</td>
            <td className="px-4 py-2 border-b">$300</td>
            <td className="px-4 py-2 border-b">Hannah Lee</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">11</td>
            <td className="px-4 py-2 border-b">Apple Mac Mini</td>
            <td className="px-4 py-2 border-b">25/11/2022</td>
            <td className="px-4 py-2 border-b text-yellow-500">Shipping</td>
            <td className="px-4 py-2 border-b">$700</td>
            <td className="px-4 py-2 border-b">Ian Thomas</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrder;
