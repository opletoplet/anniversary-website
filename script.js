let fotoIndex = 0;
const fotoList = ["foto1.jpg", "foto2.jpg", "foto3.jpg"];
const fotoEl = document.getElementById("foto");

setInterval(() => {
    fotoIndex = (fotoIndex + 1) % fotoList.length;
    fotoEl.src = fotoList[fotoIndex];
}, 3000);

function hitungMundur() {
    const nextAnniv = new Date("2025-12-19");
    const now = new Date();
    const selisih = nextAnniv - now;
    
    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText = hari + " hari lagi!";
}

setInterval(hitungMundur, 1000);
hitungMundur();

const musik = document.getElementById("musik");

function toggleMusic() {
    if (musik.paused) {
        musik.play();
    } else {
        musik.pause();
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", function () {
    const loveContainer = document.createElement("div");
    loveContainer.classList.add("love-container");
    document.body.appendChild(loveContainer);

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw"; // Random posisi
        heart.style.animationDuration = Math.random() * 2 + 2 + "s"; // Random durasi
        loveContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove(); // Hapus setelah animasi selesai
        }, 3000);
    }

    setInterval(createHeart, 500); // Munculin heart tiap 0.5 detik
}
