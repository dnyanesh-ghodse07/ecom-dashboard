import { Table } from "antd";
import recentOrders from "../../data/recent-order.json";

interface DataType {
  id: number;
  product: string;
  date: string;
  status: string;
  price: number;
  customer: string;
}

const RecentOrder = () => {
  const dataSource: DataType[] = recentOrders.map((order) => {
    return {
      id: order.id,
      product: order.product,
      date: order.date,
      status: order.status,
      price: order.price,
      customer: order.customer,
    };
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Price ($)",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h1 className="text-xl font-bold mb-4">Recent Order</h1>
      <Table dataSource={dataSource} columns={columns} rowKey="id" />
    </div>
  );
};

export default RecentOrder;
