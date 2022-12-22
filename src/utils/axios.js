import axios from "axios"
import { get } from "lodash"
import { API_URL, NODE_ENV } from "./env"
axios.defaults.baseURL = API_URL
axios.defaults.timeout = 180000 // 30 seconds
axios.interceptors.request.use(
  async (response) => {
    const originalConfig = response
    const cookie = await localStorage.getItem("_q")
    const userToken = cookie
    if (userToken) {
      originalConfig.headers.Authorization = `Bearer ${cookie}`
    }
    originalConfig.headers["Access-Control-Allow-Origin"] = "*"
    originalConfig.headers.Accept = "application/json"
    originalConfig.headers["Content-Type"] = "application/json; charset=utf-8"

    if (NODE_ENV === "development") {
      // console.log('[request] >>>', response)
    }

    return originalConfig
  },
  (error) => Promise.reject(error),
)

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (NODE_ENV === "development") {
      // console.log(`error at ${error.config.url}`);
      // console.log(error);
      // console.log(error.response);
    }

    if (
      get(error, "response.data.code", "") === "401" ||
      get(error, "response.data.message", "") === "Unauthorized"
    ) {
      localStorage.removeItem("_q")
      window.location.reload()
    }
    return Promise.reject(error)
  },
)

export default axios
