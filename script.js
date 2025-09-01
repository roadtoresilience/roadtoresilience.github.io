function find(id) {
    return document.getElementById(id);
}

var navigation = find("navigation");
var home = find("home");
var about = find("about");
var blog = find("blog");
var survey = find("survey");
var contact = find("contact");

var main = find("main");
var rtr = find("rtr-button");

function redirect(link) {
    if (link.tagName == "SPAN" || link == "blog") {
        let url = link.innerHTML.toLowerCase();
        if (url == "home") {
            url = "index.html";
        }
        link.onclick = function() {
            window.open(url + "/", "_self");
        }
    }
}
navigation.childNodes.forEach(redirect);
rtr.onclick = function(){redirect("blog")};
