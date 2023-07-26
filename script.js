const karanlikModButon = document.getElementById("karanlikModButon");
const body = document.body;

karanlikModButon.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  // Local Storage'da karanlık modun durumunu saklayalım
  localStorage.setItem("karanlikMod", body.classList.contains("dark-mode"));
})

// Sayfa yüklendiğinde karanlık modun durumuna göre ayar yapalım
const karanlikModDurum = JSON.parse(localStorage.getItem("karanlikMod"));
if (karanlikModDurum) {
  body.classList.add("dark-mode");
}

// Sağ tıklamayı kaldıran JavaScript kodu
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
