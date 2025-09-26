function toggleDarkMode() {
    const body = document.body;
    const button = document.getElementById("lightswitch");
    
    if (body.hasAttribute("data-theme")) {
        body.removeAttribute("data-theme");
        button.textContent = "Prefer Dark Mode?";
    } else {
        body.setAttribute("data-theme", "dark");
        button.textContent = "Want To Go Back?";
    }
}

document.getElementById("lightswitch").addEventListener("click", toggleDarkMode);

function test(){
    StylePropertyMap
}

document.getElementById("test").addEventListener("click", test);