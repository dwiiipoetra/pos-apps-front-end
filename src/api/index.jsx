import apiMock from "../config/api";

const api = {
  getAll: (page = 1, limit = 10, sortBy = "", order = "") => apiMock.get(`/products?page=${page}&limit=${limit}&sortBy=${sortBy}&order=${order}`),
  getById: (id) => apiMock.get(`/products/${id}`),
};

export default api;
