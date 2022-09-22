import axios from "axios";

const ROOT_URL = "https://6327f60f5731f3db99613806.mockapi.io/users";

export async function loginUser(dispatch, loginPayLoad) {

  console.log(dispatch, loginPayLoad);

  try {
    dispatch({ type: "REQUEST_LOGIN" });
    const res = await axios.post(`${ROOT_URL}`, loginPayLoad);

    if (res.data) {
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      return res.data;
    }
    dispatch({ type: "LOGIN_ERROR", error: "Error" });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
    console.log("ini error", error);
  }
}
