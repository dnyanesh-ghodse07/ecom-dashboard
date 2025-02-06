const TopProductItem = ({
  product,
}: {
  product: {
    name: string;
    sales: number;
  };
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md">
      <h1>{product.name}</h1>
      <p>{product.sales}</p>
    </div>
  );
};

export default TopProductItem;
