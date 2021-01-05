import axios from "axios";
import { MOCK } from "./mock";
import { v4 as uuidv4 } from "uuid";

/** manage blog APIs */
const MOCK_MODE = false; // TODO: DEBUG MODE

const HOST_AAA = "http://125.212.225.148:2000/v01/"; // TOBE load from env
const BASE_URL = "";

const APIs = {
  // Authentication
  AUTH_SIGNIN: () => "auth/signin",
  AUTH_SIGNUP: () => "auth/register",
  AUTH_SIGNOUT: () => "auth/logout",
  AUTH_CHECK_TOKEN: () => "auth/check-token",
  AUTH_ME: () => `users/me`,

  // center
  CENTERS: () => "centers",
  LIST_USER: () => "users",
  CENTER_STAFFS: (id) => `centers/${id}/staffs/`,
};

let DEVICE_ID, HARDWARE_ID;
if (!localStorage.uuid) {
  localStorage.setItem("uuid", uuidv4());
}

DEVICE_ID = localStorage.uuid;
HARDWARE_ID = localStorage.uuid;

/**
 * Global header, load token from localstorage.
 * can async await for load token
 */
let HEADER = (head) => ({
  // Authorization: head.token || localStorage.token, // should load from cookies
  Authorization: "Bearer " + `${head.token || localStorage.token}`, // should load from cookies
  "Application-Code": "center",
  "Device-Id": DEVICE_ID,
  "Hardware-Id": HARDWARE_ID,
  UID: head.uid || localStorage.uid,
});

/**
 * Handle call apis with axios
 * if MOCK_MODE load data from ./mock.js
 * else set url then load data from api
 */
export const handleAPIs = (head, method, body, action) => {
  let url = `${
    action.includes("AUTH") ? HOST_AAA : HOST_CENTERS
  }${BASE_URL}${APIs[action](2)}`;
  return axios({
    headers: HEADER(head),
    method: method,
    url: url,
    data: body,
  })
    .then((response) => {
      // can be response.body etc...
      if (response.status === 200) return response;
      else return response;
    })
    .catch((error) => {
      return error.response || error;
    });
};
