document.getElementById("openModalBtn").onclick = function () {
    document.getElementById("modal").style.display = "flex";
};

document.getElementById("closeModalBtn").onclick = function () {
    document.getElementById("modal").style.display = "none";
};

window.onclick = function (event) {
    if (event.target === document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    }
};



// javascript respo
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    // Change icon between burger and close (X)
    const icon = burger.querySelector("i");
    if (navLinks.classList.contains("show")) {
        icon.classList.remove("bi-list");
        icon.classList.add("bi-x");
    } else {
        icon.classList.remove("bi-x");
        icon.classList.add("bi-list");
    }
});

// javascript respo



// carousel

document.addEventListener("DOMContentLoaded", function () {
    const playBtn = document.getElementById("playBtn");
    const carousel = document.getElementById("carouselContainer");
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;
    let isCarouselVisible = false;

    playBtn.addEventListener("click", () => {
        if (isCarouselVisible) {
            carousel.style.display = "none";
        } else {
            carousel.style.display = "block";
            showItem(currentIndex);
        }
        isCarouselVisible = !isCarouselVisible;
    });

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle("active", i === index);
        });
    }

    window.next = function () {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    };

    window.prev = function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    };
});



// carousel