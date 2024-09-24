import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
    priceAfterDiscount: '',
    description: '',
    image: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleAddProduct = () => {
    setProducts([...products, formData]);
    setFormData({
      name: '',
      category: '',
      price: '',
      quantity: '',
      priceAfterDiscount: '',
      description: '',
      image: null
    });
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const handleEditProduct = (index) => {
    const productToEdit = products[index];
    setFormData(productToEdit);
    handleDeleteProduct(index); // Remove product for update
  };

  return (
    <div className="product-component container">
      <h2 className="my-4">Manage Products</h2>
      <Form className="mb-4">
        <Form.Group controlId="formProductName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formProductCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formProductPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formProductQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formProductPriceAfterDiscount">
          <Form.Label>Price After Discount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price after discount"
            name="priceAfterDiscount"
            value={formData.priceAfterDiscount}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formProductDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter product description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formProductImage">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Form.Group>
        <Button variant="primary" className="mt-3" onClick={handleAddProduct}>
          {formData.id ? 'Update Product' : 'Add Product'}
        </Button>
      </Form>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Price After Discount</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.priceAfterDiscount}</td>
              <td>{product.description}</td>
              <td>
                {product.image && (
                  <img
                    src={URL.createObjectURL(product.image)}
                    alt="Product"
                    width="100"
                  />
                )}
              </td>
              <td>
                <Button
                  variant="warning"
                  className="me-2"
                  onClick={() => handleEditProduct(index)}
                >
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDeleteProduct(index)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Product;
