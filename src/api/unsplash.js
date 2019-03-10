import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 1b9327d4cc6d716eb48427264aecdc3db10895a157b1cb3440632d90735baa84"
  }
});
