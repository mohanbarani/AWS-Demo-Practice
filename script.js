// Learn More Button

document.getElementById("learnBtn").addEventListener("click", function () {

    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });

});

// Contact Button

document.getElementById("contactBtn").addEventListener("click", function () {

    alert("Thanks for contacting Stackly solutions! We will get back to you soon.");

});

// Welcome Message

window.onload = function () {
    console.log("Welcome to Stackly Solutions");
};
