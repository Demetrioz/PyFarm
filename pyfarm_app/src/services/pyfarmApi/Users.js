import PyFarmApiService from "../PyFarmApiService";

export const getUsers = async () => {
  return await PyFarmApiService.request("users", null, "GET");
};

export const createUser = async (username, password) => {
  let body = {
    username,
    password,
  };

  return await PyFarmApiService.request("users", body, "POST");
};
