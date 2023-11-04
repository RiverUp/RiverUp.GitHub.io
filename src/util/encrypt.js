import crypto from "crypto-js";

const key = crypto.enc.Hex.parse("HE ZIANG");
const iv = crypto.enc.Hex.parse("101112131415161718191a1b1c1d1eee");

function encrypt(data) {
  var encrypted = crypto.AES.encrypt(data, key, {
    iv: iv,
    mode: crypto.mode.CBC,
    padding: crypto.pad.Pkcs7,
  });
  return encrypted.toString();
}

export default encrypt;
