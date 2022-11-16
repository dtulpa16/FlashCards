import React from "react";
import axios from "axios";
export default function requestHandler(url, method, body) {
  const sendReq = async () => {
    var error = "No error";
    var data = "";
    try {
      debugger;
      if ((method == "get") | (method == "delete"))
        var response = await axios[method](url);
      else {
        var response = await axios[method](url, body);
      }
      data = response.data;
      return { data, error };
    } catch (er) {
      console.log("ERROR IN REQUEST HANDLER: ", er);
      error = er;
      return { data, error };
    }
  };
  sendReq();
}
