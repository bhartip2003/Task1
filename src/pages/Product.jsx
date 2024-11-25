import React, { useState, useEffect } from "react";
import { headers, headerTitle } from "../data/product.json";
import axios from "axios";
import Button from "../components/Button";

const Product = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  const limit = 15;

  const fetchCategories = async () => {
    const response = await axios.get(
      `https://dummyjson.com/products/categories`
    );
    setCategories(response.data);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${limit}`
      );
      setData(response.data.products);
    };

    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div className="container flex flex-col justify-center items-center my-32 gap-y-10">
      <h1 className="text-3xl font-semibold ">Products Page</h1>

      {/* product category */}
      <div className="flex gap-x-5">
        {categories.length > 0 ? (
          categories
            .slice(0, 5)
            .map((category) => (
              <Button
                key={category.slug}
                type={category.slug}
                name={category.name}
              />
            ))
        ) : (
          <p>Loading Categories...</p>
        )}
      </div>
        
        {/* product table */}
      <table>
        <thead>
          <tr>
            {headerTitle.map((header) => (
              <th className="font-semibold text-lg" key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {headers.map((header) => (
                <td>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
