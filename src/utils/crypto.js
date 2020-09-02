import cryptoJs from 'crypto-js';

// DESC 对称加密
export const encryptDes = (message) => {
  var keyHex = cryptoJs.enc.Utf8.parse('reservationAes');
  var encrypted = cryptoJs.DES.encrypt(message, keyHex, {
    mode: cryptoJs.mode.ECB,
    padding: cryptoJs.pad.Pkcs7
  });
  return encrypted.toString();
}