function showAlert() {
    alert("Thanks for hiring! Contact me below 👇");
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    document.getElementById("result").innerText =
        "Thank you " + name + "! Message sent successfully.";
});