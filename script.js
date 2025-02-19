// 📸 Slideshow Foto Otomatis dengan Fade Effect
let images = ["images/foto1.jpg", "images/foto2.jpg", "images/foto3.jpg"];
let index = 0;

function changeImage() {
    let imgElement = document.getElementById("slideshow");
    imgElement.classList.add("fade-out"); // Efek transisi fade

    setTimeout(() => {
        index = (index + 1) % images.length;
        imgElement.src = images[index];
        imgElement.classList.remove("fade-out");
    }, 500); // Waktu transisi
}

// Ganti gambar setiap 3 detik
setInterval(changeImage, 3000);

// ❤️ Efek Hati Melayang
function createFloatingHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 500);
  }
