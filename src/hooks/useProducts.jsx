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

export { useProducts };
