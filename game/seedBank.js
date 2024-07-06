for (let i = 1; i < 100; i++) {
    var anchor = document.querySelector("#seedBank");
    var newType = document.querySelector("#locker0").cloneNode(true);
    newType.innerHTML = `locker ${i + 1}: locked`;
    newType.class = "locker";
    newType.id = "locker" + String(i);
    anchor.appendChild(newType);
}