import { useState } from "react";
import api from "../api";

const useProducts = () => {
  const [data, setData] = useState([]);

  const getAllProducts = async (page, limit, sortBy, order) => {
    try {
      const res = await api.getAll(page, limit, sortBy, order);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return [data, getAllProducts];
};

const detailProduct = () => {
  const [data, setData] = useState([]);

  const getProductDetails = async (product_id) => {
    try {
      const res = await api.getById(product_id);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return [data, getProductDetails];
};

export { useProducts, detailProduct };
