import axios from "axios";

export const api = axios.create({
  baseURL: "https://bdrconsignados.mdsw.shop/api",
  headers: {
    "Content-Type": "application/json",
  },
});
