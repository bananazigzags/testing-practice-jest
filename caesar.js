function caesar(plaintext, shift) {
    let ciphertext = "";

    for (let i = 0; i < plaintext.length; i++) {
        let character = plaintext[i];

        if (character.match(/[a-z]/)) {
            ciphertext += String.fromCharCode((plaintext.charCodeAt(i) - 97 + shift) % 26 + 97);
        }
        else if (character.match(/[A-Z]/)) {
            ciphertext += String.fromCharCode((plaintext.charCodeAt(i) - 65 + shift) % 26 + 65);
        }
        else {
            ciphertext += character;
        }
    }
    return ciphertext;
}

module.exports = caesar;