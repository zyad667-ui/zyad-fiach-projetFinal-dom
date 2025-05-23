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




// menu
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.menu-tab');
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        item.style.display = 'flex';
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const category = this.getAttribute('data-category');

            items.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
// menu






// special
// specials part 
document.querySelectorAll('.specials-menu button').forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.specials-menu button').forEach(btn => btn.classList.remove('active'));
        item.classList.add('active');
    });
});

let modibutton = document.querySelector('#modi');
let undebutton = document.querySelector('#unde');
let pariabutton = document.querySelector('#paria');
let nostbutton = document.querySelector('#nost');
let iustobutton = document.querySelector('#iusto');

let modi = document.querySelectorAll('.modi');
let unde = document.querySelectorAll('.unde');
let paria = document.querySelectorAll('.paria');
let nost = document.querySelectorAll('.nost');
let iusto = document.querySelectorAll('.iusto');

modibutton.addEventListener('click', () => {
    modi.forEach(item => item.style.display = "flex");
    unde.forEach(item => item.style.display = "none");
    paria.forEach(item => item.style.display = "none");
    nost.forEach(item => item.style.display = "none");
    iusto.forEach(item => item.style.display = "none");
});

undebutton.addEventListener('click', () => {
    unde.forEach(item => item.style.display = "flex");
    modi.forEach(item => item.style.display = "none");
    paria.forEach(item => item.style.display = "none");
    nost.forEach(item => item.style.display = "none");
    iusto.forEach(item => item.style.display = "none");
});

pariabutton.addEventListener('click', () => {
    paria.forEach(item => item.style.display = "flex");
    modi.forEach(item => item.style.display = "none");
    unde.forEach(item => item.style.display = "none");
    nost.forEach(item => item.style.display = "none");
    iusto.forEach(item => item.style.display = "none");
});

nostbutton.addEventListener('click', () => {
    nost.forEach(item => item.style.display = "flex");
    modi.forEach(item => item.style.display = "none");
    unde.forEach(item => item.style.display = "none");
    paria.forEach(item => item.style.display = "none");
    iusto.forEach(item => item.style.display = "none");
});

iustobutton.addEventListener('click', () => {
    iusto.forEach(item => item.style.display = "flex");
    modi.forEach(item => item.style.display = "none");
    unde.forEach(item => item.style.display = "none");
    paria.forEach(item => item.style.display = "none");
    nost.forEach(item => item.style.display = "none");
});
// special





let currentcaro = 0;
let slides2 = document.querySelectorAll('.testimonial-card');
let slidesToShow = 3;

function showSlides(startIndex) {
    slides2.forEach((slide, i) => {
        slide.style.display = (i >= startIndex && i < startIndex + slidesToShow) ? 'block' : 'none';
    });
}


document.getElementById('nextBtn').addEventListener('click', () => {
    currentcaro = (currentcaro + 1) % slides2.length;
    if (currentcaro + slidesToShow > slides2.length) currentcaro = 0;
    showSlides(currentcaro);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentcaro = (currentcaro - 1 + slides2.length) % slides2.length;
    if (currentcaro < 0) currentcaro = slides2.length - slidesToShow;
    showSlides(currentcaro);
});

setInterval(() => {
    currentcaro = (currentcaro + 1) % slides2.length;
    if (currentcaro + slidesToShow > slides2.length) currentcaro = 0;
    showSlides(currentcaro);
}, 3000);


showSlides(currentcaro);










// gallery part
let images = document.querySelectorALL('.gallery')

images.forEach(image => {
    image.addEventListener('click', () => {

    });
});











document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    let autoSlideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    showSlide(currentSlide);
    startAutoSlide();
});

























































const backToTopBtn = document.getElementById('backToTopBtn');


window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
