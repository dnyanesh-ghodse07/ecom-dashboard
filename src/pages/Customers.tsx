
import customers from '../data/customers.json';
import { Table } from 'antd'
interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  registered_date: string;
}


const columns = [
  { title: "ID", dataIndex: "id", key: "id" },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Email", dataIndex: "email", key: "email" },
  { title: "Phone", dataIndex: "phone", key: "phone" },
  { title: "Address", dataIndex: "address", key: "address" },
  { title: "City", dataIndex: "city", key: "city" },
  { title: "State", dataIndex: "state", key: "state" },
  { title: "Zip", dataIndex: "zip", key: "zip" },
  { title: "Country", dataIndex: "country", key: "country" },
  { title: "Registered Date", dataIndex: "registered_date", key: "registered_date" },
];

const Customers = () => {


  const customersData: Customer[] = customers.map((customer) => {
    return {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      address: customer.address,
      city: customer.city,
      state: customer.state,
      zip: customer.zip,
      country: customer.country,
      registered_date: customer.registered_date,
    };
  })

  return (
    <div className='bg-white rounded-xl shadow-md h-full px-2'>
      <h1 className='text-xl font-bold mb-2 p-2 ml-3'>Customers</h1>
      <Table dataSource={customersData} columns={columns} rowKey="id" />
    </div>
  )
}

export default Customers