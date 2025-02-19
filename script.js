// 📸 Slideshow Foto Otomatis dengan Fade Effect
let images = ["foto1.jpg", "foto2.jpg", "foto3.jpg"];
let index = 0;
function changeImage() {
    let imgElement = document.getElementById("slideshow");
    imgElement.classList.add("fade-out");
    setTimeout(() => {
        imgElement.src = images[index];
        imgElement.classList.remove("fade-out");
        index = (index + 1) % images.length;
    }, 500);
}
setInterval(changeImage, 3000);

}
window.onload = () => {
    typeWriter();
    createFloatingHearts();
};

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
