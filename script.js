// LOADING
window.addEventListener("load", () => {

    const loading =
    document.getElementById("loading");

    setTimeout(() => {

        loading.style.display = "none";

    }, 1000);

});

// MUSIC
const music =
document.getElementById("bgMusic");

music.volume = 0.15;

// LOGIN
const loginBtn =
document.getElementById("loginBtn");

const authContainer =
document.getElementById("authContainer");

const showUser =
document.getElementById("showUser");

const navbarUser =
document.getElementById("navbarUser");

loginBtn.addEventListener("click", () => {

    const username =
    document.getElementById("loginUsername").value;

    if(username === ""){

        alert("Masukkan username");
        return;

    }

    showUser.innerText = username;
    navbarUser.innerText = username;

    authContainer.style.display = "none";

    music.play();

});

// REGISTER
const registerBtn =
document.getElementById("registerBtn");

registerBtn.addEventListener("click", () => {

    alert("Akun berhasil dibuat");

    document.getElementById("registerForm").style.display = "none";

    document.getElementById("loginForm").style.display = "block";

});

// SWITCH FORM
document.getElementById("showRegister")
.addEventListener("click", () => {

    document.getElementById("loginForm").style.display = "none";

    document.getElementById("registerForm").style.display = "block";

});

document.getElementById("showLogin")
.addEventListener("click", () => {

    document.getElementById("registerForm").style.display = "none";

    document.getElementById("loginForm").style.display = "block";

});

// POPUP QRIS
const popup =
document.getElementById("popup");

const closePopup =
document.getElementById("closePopup");

document.querySelectorAll(".buy-btn")
.forEach(btn => {

    btn.addEventListener("click", () => {

        popup.style.display = "flex";

    });

});

closePopup.addEventListener("click", () => {

    popup.style.display = "none";

});

// PARTICLE
const bg =
document.querySelector(".bg-animation");

for(let i=0;i<40;i++){

    const span =
    document.createElement("span");

    span.style.left =
    Math.random()*100+"%";

    span.style.animationDuration =
    5 + Math.random()*10 + "s";

    span.style.animationDelay =
    Math.random()*5 + "s";

    bg.appendChild(span);

}