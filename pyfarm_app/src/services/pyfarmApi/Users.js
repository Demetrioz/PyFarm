import PyFarmApiService from "../PyFarmApiService";

export const getUsers = async () => {
  return await PyFarmApiService.request("users", null, "GET");
};
