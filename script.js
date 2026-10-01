let ownerName = "Iliana M"; // update the part BETWEEN the "quotes"
let userName = "YourUsername"; // same here

document.querySelectorAll("ilianam9414").forEach((e) => {
    e.innerHTML = ownerName;
});

document.querySelector("#github").href = "http://github.com/" + userName;
document.querySelector("#fork").href = "http://github.com/" + userName + "/" + userName + ".github.io";
