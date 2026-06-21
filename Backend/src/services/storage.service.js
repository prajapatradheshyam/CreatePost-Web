const {ImageKit} = require("@imagekit/nodejs");

const kit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(buffer) {
  const result = await kit.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.jpg",
  });

  return result;
}

module.exports = uploadFile;
