import axios from "axios";
import config from "./axios-config";

const log = axios.create({ config });

const logIn = async function (guestName, passwords, identity) {
  try {
    const res = await log.post("/login", {
      guestName: guestName,
      passwords: passwords,
      identity: identity,
    });
    return res;
  } catch (error) {
    console.error();
  }
};

export { logIn };
