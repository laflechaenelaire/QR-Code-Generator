const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector(".form input"),
  qrImg = wrapper.querySelector(".qr-code img"),
  generateBtn = wrapper.querySelector(".form button");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) return; // If the input is empty then return from here
  generateBtn.innerText = "Generating QR Code...";
  // api and passing the API returned img src to qrImg
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    // once QR code img loaded
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  });
  qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
      wrapper.classList.remove("active");
    }
  });
});
