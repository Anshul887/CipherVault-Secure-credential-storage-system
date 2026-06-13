import crypto from "crypto";

const ALGORITHM = "aes-256-cbc";

const SECRET =
  crypto
    .createHash("sha256")
    .update(process.env.ENCRYPTION_KEY!)
    .digest();

export const encrypt = (
  text: string
) => {

  const iv =
    crypto.randomBytes(16);

  const cipher =
    crypto.createCipheriv(
      ALGORITHM,
      SECRET,
      iv
    );

  let encrypted =
    cipher.update(
      text,
      "utf8",
      "hex"
    );

  encrypted +=
    cipher.final("hex");

  return (
    iv.toString("hex") +
    ":" +
    encrypted
  );
};

export const decrypt = (
  encryptedText: string
) => {

  const parts =
    encryptedText.split(":");

  const iv =
    Buffer.from(parts[0], "hex");

  const encrypted =
    parts[1];

  const decipher =
    crypto.createDecipheriv(
      ALGORITHM,
      SECRET,
      iv
    );

  let decrypted =
    decipher.update(
      encrypted,
      "hex",
      "utf8"
    );

  decrypted +=
    decipher.final("utf8");

  return decrypted;
};
