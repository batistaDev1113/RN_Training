import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer OBgxun3DVyFsYP14FU-qTP2fRw8h5a7h6luVmYnSM8NUS2qcCrf3b-nOSGcDNc-PjpyhxuhX65tPPX0iAnG_3jsv7T005fZ5Xthz1oZ9cCIuNujxy_gHzFN_xDDnYXYx",
  },
});
