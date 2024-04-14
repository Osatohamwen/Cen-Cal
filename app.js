const navItems = document.getElementById("navItems")
const menuIcon = document.getElementById("hamburger")
const menuActiveIcon = document.getElementById("hideBar")

menuIcon.addEventListener('click',(e) => {
    menuActiveIcon.style.display = "flex";
    menuIcon.style.display = "none";
    navItems.style.display = "flex";
});

menuActiveIcon.addEventListener('click',(e) => {
    menuActiveIcon.style.display = "none";
    menuIcon.style.display = "flex";
    navItems.style.display = "none";
});