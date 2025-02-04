import { Table } from 'antd'
import orders from '../data/orders.json';

interface Product {
  product_id: number;
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: number;
  customer_id: number;
  products: Product[];
  total_price: number;
  status: string;
  order_date: string;
  shipping_address: string;
  payment_method: string;
}

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Customer ID',
    dataIndex: 'customer_id',
    key: 'customer_id',
  },
  {
    title: 'Products',
    dataIndex: 'products',
    key: 'products',
    render: (products: Product[]) => (
      <ul>
        {products.map((product: Product) => (
          <li>
            {product.name}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: 'Total Price',
    dataIndex: 'total_price',
    key: 'total_price',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Order Date',
    dataIndex: 'order_date',
    key: 'order_date',
  },
  {
    title: 'Shipping Address',
    dataIndex: 'shipping_address',
    key: 'shipping_address',
  },
  {
    title: 'Payment Method',
    dataIndex: 'payment_method',
    key: 'payment_method',
  },
];
const Orders = () => {
  const dataSource: Order[] = orders.map((order) => {
    return {
      id: order.id,
      customer_id: order.customer_id,
      products: order.products,
      total_price: order.total_price,
      status: order.status,
      order_date: order.order_date,
      shipping_address: order.shipping_address,
      payment_method: order.payment_method,
    };
  });
  return (
    <div className='bg-white rounded-xl p-4 h-[calc(100%-5rem)] overflow-scroll'>
      <h1 className='text-2xl font-bold'>Orders</h1>
      <Table scroll={{ x: 'max-content' }} dataSource={dataSource} columns={columns} rowKey="id" />
    </div>
  )
}

export default Orders