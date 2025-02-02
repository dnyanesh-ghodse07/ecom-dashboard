import React from 'react'

const ProductSold = () => {
  const productSalesData: ProductData[] = [
    { name: 'Product A', value: 300 },
    { name: 'Product B', value: 200 },
    { name: 'Product C', value: 150 },
  ];
  return (
    <div className="bg-white p-4 rounded-xl w-full">
    <h1>Product Sold</h1>
    <ProductPieChart data={productSalesData} />
  </div>
  )
}

export default ProductSold;





import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';

interface ProductData {
  name: string;
  value: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8DD1E7', '#A05195', '#FF5733']; // Array of colors

const ProductPieChart: React.FC<{ data: ProductData[] }> = ({ data }) => {

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {data[index].name} {(percent * 100).toFixed(0)}%
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label={renderCustomizedLabel} // Use custom label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} /> // Apply colors
          ))}
        </Pie>
        {/* <Legend /> */}
      </PieChart>
    </ResponsiveContainer>
  );
};

