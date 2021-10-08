window.onload = function () {
    initPage1();
}

function initPage1 () {
    let start = document.getElementById("startButton");
    start.addEventListener("click", (e) => {
        window.location.href = "./page2.html";
        console.log("Page 2");
    });
}