import axios from "axios";
import config from "./axios-config";
import encrypt from "../util/encrypt";

const log = axios.create(config);

const logIn = async function (guestName, passwords, identity) {
  try {
    var pwd = encrypt(passwords);
    const res = await log.post("/login", {
      guestName: guestName,
      passwords: pwd,
      identity: identity,
    });
    return res;
  } catch (error) {
    console.error();
  }
};

export { logIn };
