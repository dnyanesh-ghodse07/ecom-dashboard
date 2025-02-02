import React from "react";

const TopProducts = () => {
  return (
    <div className="bg-white p-4 rounded-xl h-full">
      <h1 className="text-xl my-2">Top products</h1>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between p-2 bg-gray-100 rounded-md">
          <span>Shirt</span>
          <span>2000</span>
        </div>
        <div className="flex justify-between p-2 bg-gray-100 rounded-md">
          <span>Shirt</span>
          <span>2000</span>
        </div>
        <div className="flex justify-between p-2 bg-gray-100 rounded-md">
          <span>Shirt</span>
          <span>2000</span>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
