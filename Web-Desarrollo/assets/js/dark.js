document.addEventListener("DOMContentLoaded", () => {
    let switcher = document.querySelector(".switcher__btn");
    let light = document.querySelector(".switcher__icon-light");
    let dark = document.querySelector(".switcher__icon-dark");
    let logolight = document.querySelector(".navbar__logo-light");
    let logodark = document.querySelector(".navbar__logo-dark");

    switcher.addEventListener("click", () =>{
      let head = document.head;

      let link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "./assets/css/dark.css";
        link.id = "theme-dark"

        let theme_dark = document.querySelector("#theme-dark");
        if(document.querySelector("#theme-dark")){
            head.removeChild(theme_dark);
            dark.style.display = "none";
            light.style.display = "block";
            logodark.style.display = "none";
            logolight.style.display = "block";

        }else{
            head.appendChild(link);
            dark.style.display = "block";
            light.style.display = "none";
            logodark.style.display = "block";
            logolight.style.display = "none";
        }
    });
});