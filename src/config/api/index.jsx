import axios from "axios";

const baseURL = "https://6305cec7dde73c0f844bca85.mockapi.io";

const mockApi = axios.create({
  baseURL: String(baseURL),
});

export default mockApi;
``;
