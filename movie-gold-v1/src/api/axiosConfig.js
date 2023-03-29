import axios from "axios";

export default axios.create({
  baseURL: " https://f014-2804-d59-8e27-8500-b086-30aa-9215-47c.sa.ngrok.io",
  headers: { "ngrok-skip-browser-warning": "true" },
});
