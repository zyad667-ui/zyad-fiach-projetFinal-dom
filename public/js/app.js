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
