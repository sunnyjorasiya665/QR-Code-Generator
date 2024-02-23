const URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");
const button = document.getElementById("button");


function generatQr(){
    let url = URL + qrText.value;
    qrImg.src = url;
}

button.addEventListener("click", generatQr);

