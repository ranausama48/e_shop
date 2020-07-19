// function for live url of upload image
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

// function for restrict to upload only one image at time in the array
function normFile(e) {
  if (Array.isArray(e)) {
    e.fileList = e.fileList.slice(-1);

    return e;
  }
  return e && e.fileList.slice(-1);
}

module.exports = {
  getBase64,
  normFile,
};
