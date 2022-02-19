import jwt_decode from "jwt-decode";

import PyFarmApiService from "../PyFarmApiService";

export const login = async (username, password) => {
  // let key = await PyFarmApiService.request("Auth/Key", null, "POST");

  // let encrypt = new JSEncrypt();
  // encrypt.setPublicKey(key);
  // let encryptedUser = encrypt.encrypt(username);
  // let encryptedPassword = encrypt.encrypt(password);

  let encryptedCredentials = {
    // username: encryptedEmail,
    // password: encryptedPassword,
    username: username,
    password: password,
  };

  let tokenResponse = await PyFarmApiService.request(
    "auth/login",
    encryptedCredentials,
    "POST"
  );

  PyFarmApiService.userToken = tokenResponse[0];
  let token = jwt_decode(tokenResponse[0]);
  return token;
};
