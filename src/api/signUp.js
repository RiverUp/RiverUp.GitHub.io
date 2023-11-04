import axios from "axios";
import config from "./axios-config";
import encrypt from "../util/encrypt";

const sign = axios.create(config);

const signUp = async function (guestName, passwords, identity, telephoneNum) {
  try {
    var pwd = encrypt(passwords);
    const res = await sign.post("/signup", {
      guestName: guestName,
      passwords: pwd,
      identity: identity,
      telephoneNum: telephoneNum,
    });
    return res;
  } catch (error) {
    console.error();
  }
};

export { signUp };
