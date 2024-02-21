document.addEventListener("DOMContentLoaded", (event) => {
    // Seleccionar mis dos elementos principales
    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile");

    // Funcion mostrar y ocultar menu
    const showHiddenMenu = () => {

        let show = mobile_menu.classList.contains("menu-mobile--show");

        if (show) {
            mobile_menu.classList.remove("menu-mobile--show");
        } else {
            mobile_menu.classList.add("menu-mobile--show");
        }
        
    }

    // Al dar click al menu mostrar el menu de la navegación
    mobile_btn.addEventListener("click",showHiddenMenu);

     //Cierrar el menu
    let btn_close = document.querySelector(".menu-mobile__close");

        btn_close.addEventListener("click",showHiddenMenu);

    // Redimensionar la pantalla para el menu
    window.addEventListener("resize", () => {
        let window_width = parseInt(document.body.clientWidth);

        btn_close.addEventListener("click", () => {
            let show = mobile_menu.classList.contains("menu-mobile--show");
    
            if (show) {
                mobile_menu.classList.remove("menu-mobile--show");
            } else {
                mobile_menu.classList.add("menu-mobile--show");
            }
        });
    });


    // Desplegar submenu
    let menu_item = document.querySelectorAll(".menu-mobile__item");

    menu_item.forEach(item => {
            
            item.addEventListener("click", (event) => {
                let submenu = item.lastElementChild;
               
                if(submenu.className === "menu-mobile__submenu-mobile"){
                    if(submenu.style.display === "block"){
                        submenu.style.display = "none";
                    }else{
                        submenu.style.display = "block";
                    }
                }
            });
        });

});
