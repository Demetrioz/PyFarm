import Settings from "../Settings";

class PyFarmApiService {
  static apiUrl = null;
  static userToken = null;

  static Authentication = require("./pyfarmApi/Authentication");

  static async request(uri, body, method) {
    let headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.userToken}`,
    };

    let options = {
      headers: headers,
      body: method === "GET" ? null : JSON.stringify(body),
      method: method,
    };

    let url = `${this.apiUrl}${uri}`;

    let response = await fetch(url, options);
    response = await response.json();

    if (response.Error) throw Error(response.Error);
    return response.data;
  }

  static async initialize() {
    this.apiUrl = Settings.getApiUrl();
  }
}

export default PyFarmApiService;
