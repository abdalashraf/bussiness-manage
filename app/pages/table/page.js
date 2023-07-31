'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsPencil, BsTrash, BsEye } from "react-icons/bs";
import Layout from "../../../components/Layout/layout";
import axios from "axios";

const table = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productid, setproductid] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get("/api/products/getProducts");
        if (response) {
          setProducts(response.data);
          console.log(products);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDeleteModel = (id) => {
    setproductid(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handledeltemodelclick = (event) => {
    event.stopPropagation();
  };

  const handleDeleteProduct = async (id) => {
    let response = axios.delete(`/api/products/delete-product?id=${id}`);
    if (response) {
      setIsModalOpen(false);

      setProducts(function (prevProducts) {
        return prevProducts.filter(function (product) {
          return product._id !== id;
        });
      });
    }
  };

  return (
    <Layout>
      {loading ? (
        <div className="text-center mt-4">Loading...</div>
      ) : (
        <div className="container mx-auto mt-8">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  S/N
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  Product Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  Product Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  Cost Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  Sale Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products?.map((product, index) => (
                <tr key={product.id}>
                  <td className="px-6 py-3 whitespace-nowrap">{index}</td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {product.productName}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">nhi ha bai</td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {product.productCostPrice}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {product.productSalePrice}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {product.productQunatity}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap flex">
                    <Link href={`/productForm?id=${product._id}`}>
                      <BsPencil className="mr-3 text-indigo-600 cursor-pointer" />
                    </Link>
                    <BsTrash
                      onClick={() => handleOpenDeleteModel(product._id)}
                      className="mr-3 text-red-600 cursor-pointer"
                    />

                    <Link href="/detailsPage">
                      <BsEye className="text-green-600 cursor-pointer" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Modal */}
          {isModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <div
                onClick={handledeltemodelclick}
                className="bg-white p-8 rounded animate-fade-in"
                onAnimationEnd={isModalOpen ? null : handleCloseModal}
              >
                <h2 className="text-xl font-bold mb-4">Modal Content</h2>
                <p>Are You Sure to Delete the Product.</p>
                <button
                  className="mt-4 ml-5 bg-black hover:bg-black text-white font-bold py-2 px-6 rounded"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button
                  className="mt-4 ml-5 bg-red-600 hover:bg-red-600 text-white font-bold py-2 px-6 rounded"
                  onClick={() => handleDeleteProduct(productid)}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

export default table;
