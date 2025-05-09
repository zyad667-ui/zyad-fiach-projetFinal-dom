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




















































































const topBtn = document.querySelector('.top-btn');

window.onscroll = function () {
    topBtn.classList.toggle('visible', window.scrollY > 300);
};

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};