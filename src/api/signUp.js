import axios from "axios";
import config from "./axios-config";

const sign = axios.create({ config });

const signUp = async function (guestName, passwords, identity, telephoneNum) {
  try {
    const res = await sign.post("/signup", {
      guestName: guestName,
      passwords: passwords,
      identity: identity,
      telephoneNum: telephoneNum,
    });
    return res;
  } catch (error) {
    console.error();
  }
};

export { signUp };
