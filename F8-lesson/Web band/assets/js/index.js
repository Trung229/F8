var header = document.getElementById("header");
var menubar = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;

menubar.onclick = function() {
    if (header.clientHeight === headerHeight) {
        header.style.height = "auto";
    } else {
        header.style.height = null;
    }
}
var menuItems = document.querySelectorAll("#nav li a[href*='#'");

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function(event) {
        var isParent = this.nextElementSibling && this.nextElementSibling.classList.contains("subnav");
        if (!isParent) {
            header.style.height = null;
        } else {
            event.preventDefault();
        }

    }
}