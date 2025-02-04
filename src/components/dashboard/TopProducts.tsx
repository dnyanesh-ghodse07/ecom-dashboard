import TopProductItem from "./TopProductItem";

const TopProducts = () => {
  const products = [
    {
      name: "Product 1",
      sales: 100,
    },
    {
      name: "Product 2",
      sales: 50,
    },
    {
      name: "Product 3",
      sales: 75,
    },
    {
      name: "Product 4",
      sales: 200,
    },
    {
      name: "Product 5",
      sales: 150,
    },
    {
      name: "Product 6",
      sales: 300,
    },
  ];

  return (
    <div className="bg-white p-4 rounded-xl h-1/2">
      <h1 className="text-xl my-2">Top products</h1>
      <div className="flex flex-col gap-2 overflow-auto h-[calc(100%-4rem)] p-2 no-scrollbar">
        {products.map((product) => (
          <TopProductItem key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
