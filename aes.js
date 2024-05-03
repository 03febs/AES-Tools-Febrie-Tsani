function updateKeyInputFormat(type) {
  var keySize = document.getElementById(type + "KeySize").value;
  var keyInput = document.getElementById(type + "InputKey");
  if (keySize == 128) {
    keyInput.placeholder = "Enter 16-character key";
  } else if (keySize == 192) {
    keyInput.placeholder = "Enter 24-character key";
  } else if (keySize == 256) {
    keyInput.placeholder = "Enter 32-character key";
  }
  keyInput.value = ""; // Clear input field
  document.getElementById(type + "KeyError").innerText = ""; // Clear error message
}

function encryptAES() {
  var inputText = document.getElementById("encryptInputText").value;
  var key = document.getElementById("encryptInputKey").value;
  var keySize = document.getElementById("encryptKeySize").value;
  if (!validateKey(key, keySize)) {
    document.getElementById("encryptKeyError").innerText =
      "Error: Key size doesn't match selected key size";
    return;
  }
  var encryptedText = CryptoJS.AES.encrypt(inputText, key, {
    mode: CryptoJS.mode.ECB,
  }).toString();
  document.getElementById("encryptOutputText").value = encryptedText;
}

function decryptAES() {
  var encryptedText = document.getElementById("decryptInputText").value;
  var key = document.getElementById("decryptInputKey").value;
  var keySize = document.getElementById("decryptKeySize").value;
  if (!validateKey(key, keySize)) {
    document.getElementById("decryptKeyError").innerText =
      "Error: Key size doesn't match selected key size";
    return;
  }
  var decryptedText = CryptoJS.AES.decrypt(encryptedText, key, {
    mode: CryptoJS.mode.ECB,
  }).toString(CryptoJS.enc.Utf8);
  document.getElementById("decryptOutputText").value = decryptedText;
}

function validateKey(key, keySize) {
  if (keySize == 128 && key.length == 16) {
    return true;
  } else if (keySize == 192 && key.length == 24) {
    return true;
  } else if (keySize == 256 && key.length == 32) {
    return true;
  } else {
    return false;
  }
}

function resetFieldsEncrypt() {
  // Membersihkan inputan dan hasil enkripsi
  document.getElementById("encryptInputText").value = "";
  document.getElementById("encryptInputKey").value = "";
  document.getElementById("encryptOutputText").value = "";
  document.getElementById("encryptKeyError").innerText = "";
}
function resetFieldsDecrypt() {
  // Membersihkan inputan dan hasil dekripsi
  document.getElementById("decryptInputText").value = "";
  document.getElementById("decryptInputKey").value = "";
  document.getElementById("decryptOutputText").value = "";
  document.getElementById("decryptKeyError").innerText = "";
}
