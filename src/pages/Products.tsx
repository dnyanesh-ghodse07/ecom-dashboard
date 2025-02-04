import { Button, Form, Input, Modal, Table } from "antd";
import products from "../data/products.json";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
}

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];
const Products = () => {
  const dataSource: Product[] = products?.map((product) => {
    return {
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      quantity: product.quantity,
      image: product.image,
      description: product.description,
    };
  });

  const [modalVisible, setModalVisible] = useState(false);

  const handleAddProduct = () => {};

  return (
    <div className="bg-white rounded-xl p-4 h-[calc(100%-5rem)]">
      <div className="flex justify-between items-center p-2">
        <h1 className="text-2xl font-bold">Products</h1>
        <Button onClick={() => setModalVisible(true)}>Add Product</Button>
        {modalVisible && (
          <Modal
            title="Add Product"
            visible={modalVisible}
            onCancel={() => setModalVisible(false)}
            footer={null}
          >
            <Form layout="vertical" onFinish={handleAddProduct}>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  { required: true, message: "Please input the product name!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Category"
                name="category"
                rules={[
                  {
                    required: true,
                    message: "Please input the product category!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Price"
                name="price"
                rules={[
                  {
                    required: true,
                    message: "Please input the product price!",
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>
              <Form.Item
                label="Quantity"
                name="quantity"
                rules={[
                  {
                    required: true,
                    message: "Please input the product quantity!",
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>
              <Form.Item label="Description" name="description">
                <Input.TextArea />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Add Product
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        )}
      </div>
      <div className="h-[calc(100%-4rem)] overflow-scroll">
        <Table
          scroll={{ x: "max-content" }}
          dataSource={dataSource}
          columns={columns}
          rowKey="id"
          sticky
        />
      </div>
    </div>
  );
};

export default Products;
