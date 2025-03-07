import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Switch,
  Table,
} from "antd";
import { useCreateProductMutation, useGetProductsQuery } from "../redux/appWriteApi";
import {useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
  brand: string,
  rating: number,
  isFeatured: boolean,
  status: string,
  stock: number,
  reviewsCount: number,
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
    title: "Brand",
    dataIndex: "brand",
    key: "brand", 
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
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];
const Products = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const {data: products, isLoading} = useGetProductsQuery({});
  const [createProduct] = useCreateProductMutation({});

  console.log('data', products)

  const dataSource: Product[] = products?.map((product: Product, index: number) => {
    return {
      id: index + 1,
      name: product.name,
      category: product.category,
      price: product.price,
      quantity: product.quantity,
      image: product.image,
      description: product.description,
      brand: product.brand,
      rating: product.rating,
      isFeatured: product.isFeatured,
      status: product.status,
      stock: product.stock,
      reviewsCount: product.reviewsCount,
    };
  });
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>Loading...</p>
      </div>
    );
  }

  const handleCreateProduct = async (values) => {
    try {
      console.log('values', values);
      await createProduct(values).unwrap();
      setModalVisible(false);
    } catch (error) {
      console.error("Failed to create product:", error);
    }
  }

  return (
    <div className="bg-white rounded-xl p-4 h-[calc(100%-5rem)]">
      <div className="flex justify-between items-center p-2">
        <h1 className="text-2xl font-bold">Products</h1>
        <Button onClick={() => setModalVisible(true)}>Add Product</Button>
        {modalVisible && (
          <Modal
            title="Add Product"
            open={modalVisible}
            onCancel={() => setModalVisible(false)}
            footer={null}
          >
            <Form layout="vertical" onFinish={(values) => handleCreateProduct(values)}>
              <Row gutter={16}>
                {/* Product Name */}
                <Col span={12}>
                  <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input the product name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>

                {/* Category */}
                <Col span={12}>
                  <Form.Item
                    label="Category"
                    name="category"
                    rules={[
                      { required: true, message: "Please select a category!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                {/* Price */}
                <Col span={12}>
                  <Form.Item
                    label="Price (₹)"
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
                </Col>

                {/* Stock */}
                <Col span={12}>
                  <Form.Item
                    label="Stock Quantity"
                    name="stock"
                    rules={[
                      {
                        required: true,
                        message: "Please input the stock quantity!",
                      },
                    ]}
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                {/* Brand */}
                <Col span={12}>
                  <Form.Item label="Brand" name="brand">
                    <Input />
                  </Form.Item>
                </Col>

                {/* Discount */}
                <Col span={12}>
                  <Form.Item label="Discount (%)" name="discount">
                    <Input type="number" min={0} max={100} step={0.1} />
                  </Form.Item>
                </Col>
              </Row>
              {/* Images */}
              <Form.Item label="Images (comma-separated URLs)" name="images">
                <Input.TextArea placeholder="Enter image URLs separated by commas" />
              </Form.Item>

              {/* Description */}
              <Form.Item label="Description" name="description">
                <Input.TextArea rows={3} />
              </Form.Item>

              <Row gutter={16}>
                {/* Is Featured */}
                <Col span={12}>
                  <Form.Item
                    label="Is Featured"
                    name="isFeatured"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>

                {/* Status */}
                <Col span={12}>
                  <Form.Item
                    label="Status"
                    name="status"
                    rules={[
                      {
                        required: true,
                        message: "Please select product status!",
                      },
                    ]}
                  >
                    <Select>
                      <Select.Option value="available">Available</Select.Option>
                      <Select.Option value="out_of_stock">
                        Out of Stock
                      </Select.Option>
                      <Select.Option value="discontinued">
                        Discontinued
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              {/* Submit Button */}
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
          rowKey={(record) => record.id}
          sticky
        />
      </div>
    </div>
  );
};

export default Products;
