import apiMock from "../config/api";

const api = {
  getAll: (page = 1, limit = 10, sortBy = "", order = "") => apiMock.get(`/products?page=${page}&limit=${limit}&sortBy=${sortBy}&order=${order}`),
  getById: (product_id) => apiMock.get(`/products/${product_id}`),
  delete: (product_id) => apiMock.delete(`/products/${product_id}`),
  update: (product_id) => apiMock.put(`/products/${product_id}`),
};

export default api;
